import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import { styles } from "../stock-history.styles";

type StockHistoryFilterChipProps<T extends string> = {
  id: T;
  label: string;
  isSelected: boolean;
  onPress: (id: T) => void;
};

export function StockHistoryFilterChip<T extends string>({
  id,
  label,
  isSelected,
  onPress,
}: StockHistoryFilterChipProps<T>) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Filtrar por ${label}`}
      accessibilityState={isSelected ? { selected: true } : undefined}
      onPress={() => onPress(id)}
      style={[styles.filterChip, isSelected && styles.filterChipSelected]}
    >
      <Text
        size={12}
        weight={800}
        style={[styles.filterChipText, isSelected && styles.filterChipTextSelected]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
