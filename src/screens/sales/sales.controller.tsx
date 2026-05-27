import { useState } from "react";
import { router } from "expo-router";
import { useCart } from "@/features/cart/cart.context";
import { categories, products } from "./sales.data";
import type { Product } from "./sales.types";

export function useSalesController() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [productQuantities, setProductQuantities] = useState<Record<string, number>>({});
  const { addProduct, summary: cartSummary } = useCart();

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

    addProduct(product, selectedQuantity);

    setProductQuantities((currentQuantities) => {
      const { [product.id]: _selectedQuantity, ...remainingQuantities } = currentQuantities;
      return remainingQuantities;
    });
  };

  const handleOpenCart = () => {
    router.push("/cart");
  };

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
