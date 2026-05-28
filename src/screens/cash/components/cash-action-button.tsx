import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../cash.styles";

type CashActionButtonProps = {
  title: string;
  icon: "file-document-plus-outline" | "lock-check-outline";
  variant: "primary" | "secondary";
  onPress: () => void;
};

export function CashActionButton({ title, icon, variant, onPress }: CashActionButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={[styles.actionButton, isPrimary ? styles.actionButtonPrimary : styles.actionButtonSecondary]}
    >
      <MaterialCommunityIcons
        name={icon}
        size={26}
        color={isPrimary ? colors.white : colors.secondaryBright}
      />
      <Text
        size={14}
        weight={800}
        numberOfLines={1}
        style={[styles.actionButtonText, isPrimary && styles.actionButtonTextPrimary]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
