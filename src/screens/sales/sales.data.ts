import { images } from "@/constants/images";
import type { Category, Product } from "./sales.types";

export const products: Product[] = [
  { id: "coca-cola-500", name: "Coca Cola 500ml", stock: 24, price: "$900", emoji: "🥤", image: images.coca_500 },
  { id: "lays-clasicas", name: "Papas Lay's Clásicas", stock: 16, price: "$1.200", emoji: "🍟", image: images.coca_500 },
  { id: "quilmes-473", name: "Cerveza Quilmes 473ml", stock: 12, price: "$1.500", emoji: "🍺", image: images.coca_500 },
  { id: "fernet-750", name: "Fernet Branca 750ml", stock: 8, price: "$7.500", emoji: "🍾", image: images.coca_500 },
  { id: "marlboro-box-20", name: "Marlboro Box 20", stock: 35, price: "$2.800", emoji: "🚬", image: images.coca_500 },
  { id: "agua-500", name: "Agua Mineral 500ml", stock: 40, price: "$600", emoji: "💧", image: images.coca_500 },
  { id: "snickers-50", name: "Snickers 50g", stock: 28, price: "$800", emoji: "🍫", image: images.coca_500 },
  { id: "baggio-200", name: "Jugo Baggio 200ml", stock: 18, price: "$700", emoji: "🧃", image: images.coca_500 },
];

export const categories: Category[] = [
  { id: "all", label: "Todos" },
  { id: "drinks", label: "Bebidas" },
  { id: "snacks", label: "Snacks" },
  { id: "alcohol", label: "Alcohol" },
  { id: "cigarettes", label: "Cigarrillos" },
  { id: "other", label: "Otro" },
];
