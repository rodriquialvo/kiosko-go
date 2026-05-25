import { useMemo, useState } from "react";

export type Product = {
  id: string;
  name: string;
  stock: number;
  price: string;
  emoji: string;
};

export type Category = {
  id: string;
  label: string;
};

const products: Product[] = [
  { id: "coca-cola-500", name: "Coca Cola 500ml", stock: 24, price: "$900", emoji: "🥤" },
  { id: "lays-clasicas", name: "Papas Lay's Clásicas", stock: 16, price: "$1.200", emoji: "🍟" },
  { id: "quilmes-473", name: "Cerveza Quilmes 473ml", stock: 12, price: "$1.500", emoji: "🍺" },
  { id: "fernet-750", name: "Fernet Branca 750ml", stock: 8, price: "$7.500", emoji: "🍾" },
  { id: "marlboro-box-20", name: "Marlboro Box 20", stock: 35, price: "$2.800", emoji: "🚬" },
  { id: "agua-500", name: "Agua Mineral 500ml", stock: 40, price: "$600", emoji: "💧" },
  { id: "snickers-50", name: "Snickers 50g", stock: 28, price: "$800", emoji: "🍫" },
  { id: "baggio-200", name: "Jugo Baggio 200ml", stock: 18, price: "$700", emoji: "🧃" },
];

const categories: Category[] = [
  { id: "all", label: "Todos" },
  { id: "drinks", label: "Bebidas" },
  { id: "snacks", label: "Snacks" },
  { id: "alcohol", label: "Alcohol" },
  { id: "cigarettes", label: "Cigarrillos" },
  { id: "other", label: "Otro" },
];

function parsePrice(price: string): number {
  return Number(price.replace(/\D/g, ""));
}

function formatPrice(value: number): string {
  return `$${value.toLocaleString("es-AR")}`;
}

export function useSalesController() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [productQuantities, setProductQuantities] = useState<Record<string, number>>({});
  const [cartQuantities, setCartQuantities] = useState<Record<string, number>>({});

  const cartSummary = useMemo(() => {
    const quantity = products.reduce((totalQuantity, product) => {
      return totalQuantity + (cartQuantities[product.id] ?? 0);
    }, 0);

    const total = products.reduce((totalAmount, product) => {
      return totalAmount + (cartQuantities[product.id] ?? 0) * parsePrice(product.price);
    }, 0);

    return {
      quantity,
      total: formatPrice(total),
    };
  }, [cartQuantities]);

  const handleIncreaseProductQuantity = (product: Product) => {
    setProductQuantities((currentQuantities) => ({
      ...currentQuantities,
      [product.id]: Math.min((currentQuantities[product.id] ?? 0) + 1, product.stock),
    }));
  };

  const handleDecreaseProductQuantity = (product: Product) => {
    setProductQuantities((currentQuantities) => {
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
  };

  const handleAddProductToCart = (product: Product) => {
    const selectedQuantity = productQuantities[product.id] ?? 0;

    if (selectedQuantity === 0) {
      return;
    }

    setCartQuantities((currentQuantities) => ({
      ...currentQuantities,
      [product.id]: Math.min((currentQuantities[product.id] ?? 0) + selectedQuantity, product.stock),
    }));

    setProductQuantities((currentQuantities) => {
      const { [product.id]: _selectedQuantity, ...remainingQuantities } = currentQuantities;
      return remainingQuantities;
    });
  };

  const handleOpenCart = () => {};
  const handleOpenHistory = () => {};

  return {
    categories,
    products,
    productQuantities,
    selectedCategoryId,
    cartSummary,
    setSelectedCategoryId,
    handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    handleAddProductToCart,
    handleOpenCart,
    handleOpenHistory,
  };
}
