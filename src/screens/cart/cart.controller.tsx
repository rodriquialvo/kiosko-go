import { router } from "expo-router";
import { useCart } from "@/features/cart/cart.context";
import type { Product } from "@/screens/sales/sales.types";

export function useCartController() {
  const {
    items,
    summary,
    increaseProduct,
    decreaseProduct,
    removeProduct,
    clearCart,
  } = useCart();

  const handleGoBack = () => {
    router.back();
  };

  const handleIncreaseProduct = (product: Product) => {
    increaseProduct(product);
  };

  const handleDecreaseProduct = (product: Product) => {
    decreaseProduct(product);
  };

  const handleRemoveProduct = (product: Product) => {
    removeProduct(product);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return {
    items,
    summary,
    handleGoBack,
    handleIncreaseProduct,
    handleDecreaseProduct,
    handleRemoveProduct,
    handleClearCart,
    handleCheckout,
  };
}
