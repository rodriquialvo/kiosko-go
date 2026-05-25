import { TextProps as RNTextProps } from "react-native";

export interface TextProps extends RNTextProps {
  size: 8 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 30 | 32 | 40 | 48 | 54;
  weight: 400 | 500 | 600 | 700 | 800;
}
