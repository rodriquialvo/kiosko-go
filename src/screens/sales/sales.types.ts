import type { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  name: string;
  stock: number;
  price: string;
  emoji: string;
  image?: ImageSourcePropType;
};

export type Category = {
  id: string;
  label: string;
};
