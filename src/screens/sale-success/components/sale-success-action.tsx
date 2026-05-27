import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../sale-success.styles";

type SaleSuccessActionProps = {
  label: string;
  icon: "receipt-text-outline" | "cart-outline" | "home-outline";
  variant?: "primary" | "secondary";
  onPress: () => void;
};

export function SaleSuccessAction({
  label,
  icon,
  variant = "secondary",
  onPress,
}: SaleSuccessActionProps) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={[styles.actionButton, isPrimary && styles.actionButtonPrimary]}
    >
      <MaterialCommunityIcons
        name={icon}
        size={28}
        color={isPrimary ? colors.white : colors.secondaryBright}
      />
      <Text
        size={16}
        weight={800}
        style={[styles.actionButtonText, isPrimary && styles.actionButtonTextPrimary]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
