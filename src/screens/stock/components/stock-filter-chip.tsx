import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import type { StockFilter } from "../stock.controller";
import { styles } from "../stock.styles";

type StockFilterChipProps = {
  item: StockFilter;
  isSelected: boolean;
  onPress: (filterId: string) => void;
};

export function StockFilterChip({ item, isSelected, onPress }: StockFilterChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={isSelected ? { selected: true } : undefined}
      onPress={() => onPress(item.id)}
      style={[styles.filterChip, isSelected && styles.filterChipSelected]}
    >
      <Text
        size={12}
        weight={700}
        style={[styles.filterChipText, isSelected && styles.filterChipTextSelected]}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}
