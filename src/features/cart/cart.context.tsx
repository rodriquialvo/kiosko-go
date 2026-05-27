import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products } from "@/screens/sales/sales.data";
import type { Product } from "@/screens/sales/sales.types";

export type CartItem = {
  product: Product;
  quantity: number;
  subtotal: string;
};

type CartSummary = {
  quantity: number;
  totalAmount: number;
  total: string;
};

type CartContextValue = {
  items: CartItem[];
  summary: CartSummary;
  addProduct: (product: Product, quantity: number) => void;
  increaseProduct: (product: Product) => void;
  decreaseProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function parsePrice(price: string): number {
  return Number(price.replace(/\D/g, ""));
}

function formatPrice(value: number): string {
  return `$${value.toLocaleString("es-AR")}`;
}

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cartQuantities, setCartQuantities] = useState<Record<string, number>>({});

  const items = useMemo<CartItem[]>(() => {
    return products
      .map((product) => {
        const quantity = cartQuantities[product.id] ?? 0;

        return {
          product,
          quantity,
          subtotal: formatPrice(quantity * parsePrice(product.price)),
        };
      })
      .filter((item) => item.quantity > 0);
  }, [cartQuantities]);

  const summary = useMemo<CartSummary>(() => {
    const quantity = items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
    const total = items.reduce((totalAmount, item) => {
      return totalAmount + item.quantity * parsePrice(item.product.price);
    }, 0);

    return {
      quantity,
      totalAmount: total,
      total: formatPrice(total),
    };
  }, [items]);

  const addProduct = useCallback((product: Product, quantity: number) => {
    if (quantity <= 0) {
      return;
    }

    setCartQuantities((currentQuantities) => ({
      ...currentQuantities,
      [product.id]: Math.min((currentQuantities[product.id] ?? 0) + quantity, product.stock),
    }));
  }, []);

  const increaseProduct = useCallback((product: Product) => {
    setCartQuantities((currentQuantities) => ({
      ...currentQuantities,
      [product.id]: Math.min((currentQuantities[product.id] ?? 0) + 1, product.stock),
    }));
  }, []);

  const decreaseProduct = useCallback((product: Product) => {
    setCartQuantities((currentQuantities) => {
      const nextQuantity = Math.max((currentQuantities[product.id] ?? 0) - 1, 0);

      if (nextQuantity === 0) {
        const { [product.id]: _removedQuantity, ...remainingQuantities } = currentQuantities;
        return remainingQuantities;
      }

      return {
        ...currentQuantities,
        [product.id]: nextQuantity,
      };
    });
  }, []);

  const removeProduct = useCallback((product: Product) => {
    setCartQuantities((currentQuantities) => {
      const { [product.id]: _removedQuantity, ...remainingQuantities } = currentQuantities;
      return remainingQuantities;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartQuantities({});
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      summary,
      addProduct,
      increaseProduct,
      decreaseProduct,
      removeProduct,
      clearCart,
    }),
    [addProduct, clearCart, decreaseProduct, increaseProduct, items, removeProduct, summary],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
