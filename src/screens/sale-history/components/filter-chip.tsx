import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import type { SaleHistoryFilter } from "../sale-history.controller";
import { styles } from "../sale-history.styles";

type FilterChipProps = {
  item: SaleHistoryFilter;
  isSelected: boolean;
  onPress: (filterId: SaleHistoryFilter["id"]) => void;
};

export function FilterChip({ item, isSelected, onPress }: FilterChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Filtrar por ${item.label}`}
      accessibilityState={isSelected ? { selected: true } : undefined}
      onPress={() => onPress(item.id)}
      style={[styles.filterChip, isSelected && styles.filterChipSelected]}
    >
      <Text
        size={12}
        weight={800}
        style={[styles.filterChipText, isSelected && styles.filterChipTextSelected]}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}
