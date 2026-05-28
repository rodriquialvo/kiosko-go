import { useMemo, useState } from "react";
import { router } from "expo-router";
import type { ImageSourcePropType } from "react-native";
import { images } from "@/constants/images";

export type StockStatus = "ok" | "low" | "out";

export type StockProduct = {
  id: string;
  name: string;
  category: string;
  stock: number;
  status: StockStatus;
  emoji: string;
  image?: ImageSourcePropType;
};

export type StockFilter = {
  id: string;
  label: string;
};

export type StockAction = {
  id: string;
  title: string;
  description: string;
  icon: "cube-send" | "clipboard-edit-outline";
  variant: "primary" | "secondary";
};

const filters: StockFilter[] = [
  { id: "all", label: "Todos" },
  { id: "low", label: "Bajo stock" },
  { id: "out", label: "Sin stock" },
  { id: "bebidas", label: "Bebidas" },
  { id: "snacks", label: "Snacks" },
  { id: "alcohol", label: "Alcohol" },
];

const products: StockProduct[] = [
  { id: "coca-cola-500", name: "Coca Cola 500ml", category: "Bebidas", stock: 32, status: "ok", emoji: "🥤", image: images.coca_500 },
  { id: "lays-clasicas", name: "Papas Lay's Clásicas", category: "Snacks", stock: 6, status: "low", emoji: "🍟", image: images.lays_clasicas },
  { id: "fernet-750", name: "Fernet Branca 750ml", category: "Alcohol", stock: 0, status: "out", emoji: "🍾", image: images.branca_750 },
  { id: "quilmes-473", name: "Cerveza Quilmes 473ml", category: "Bebidas", stock: 15, status: "ok", emoji: "🍺", image: images.quilmes_473 },
  { id: "marlboro-box-20", name: "Marlboro Box 20", category: "Tabaco", stock: 4, status: "low", emoji: "🚬", image: images.malboro_20 },
  { id: "agua-500", name: "Agua Mineral 500ml", category: "Bebidas", stock: 40, status: "ok", emoji: "💧", image: images.agua_500 },
];

const actions: StockAction[] = [
  {
    id: "receive",
    title: "Ingresar mercadería",
    description: "Agregar productos al inventario",
    icon: "cube-send",
    variant: "primary",
  },
  {
    id: "adjust",
    title: "Ajuste manual",
    description: "Modificar stock de productos",
    icon: "clipboard-edit-outline",
    variant: "secondary",
  },
];

export function useStockController() {
  const [selectedFilterId, setSelectedFilterId] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const lowStockCount = useMemo(() => {
    return products.filter((product) => product.status === "low" || product.status === "out").length;
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      if (!matchesSearch) {
        return false;
      }

      if (selectedFilterId === "all") {
        return true;
      }

      if (selectedFilterId === "low" || selectedFilterId === "out") {
        return product.status === selectedFilterId;
      }

      return product.category.toLowerCase() === selectedFilterId;
    });
  }, [searchValue, selectedFilterId]);

  const handleOpenHistory = () => {
    router.push("/stock-history");
  };
  const handleOpenLowStock = () => {};
  const handleOpenAction = (_actionId: string) => {};
  const handleOpenProduct = (_productId: string) => {};

  return {
    actions,
    filters,
    filteredProducts,
    lowStockCount,
    searchValue,
    selectedFilterId,
    setSearchValue,
    setSelectedFilterId,
    handleOpenHistory,
    handleOpenLowStock,
    handleOpenAction,
    handleOpenProduct,
  };
}
