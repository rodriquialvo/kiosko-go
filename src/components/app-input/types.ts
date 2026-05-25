import { Feather } from "@expo/vector-icons";
import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export type IconName = React.ComponentProps<typeof Feather>["name"];

export type InputVariant = "outline" | "filled" | "ghost";
export type InputSize = "sm" | "md" | "lg";

export type AppInputProps = Omit<TextInputProps, "style"> & {
  label?: string;
  helperText?: string;
  errorText?: string;

  leftIcon?: IconName;
  rightIcon?: IconName;

  secure?: boolean;
  clearable?: boolean;

  variant?: InputVariant;
  size?: InputSize;

  fullWidth?: boolean;
  disabled?: boolean;

  containerStyle?: ViewStyle;
  inputWrapperStyle?: ViewStyle;
  inputStyle?: TextStyle;
  iconColor?: string;

  onRightIconPress?: () => void;
  onClear?: () => void;
};
