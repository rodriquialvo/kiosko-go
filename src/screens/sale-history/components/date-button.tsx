import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../sale-history.styles";

type DateButtonProps = {
  label: string;
  onPress: () => void;
};

export function DateButton({ label, onPress }: DateButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Elegir fecha"
      onPress={onPress}
      style={styles.dateButton}
    >
      <MaterialCommunityIcons name="calendar-month-outline" size={22} color={colors.textBright} />
      <Text size={12} weight={800} numberOfLines={1} style={styles.dateButtonText}>
        {label}
      </Text>
      <MaterialCommunityIcons name="chevron-down" size={20} color={colors.textSoft} />
    </Pressable>
  );
}
