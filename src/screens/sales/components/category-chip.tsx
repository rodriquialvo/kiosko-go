import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import type { Category } from "../sales.types";
import { styles } from "../sales.styles";

type CategoryChipProps = {
  item: Category;
  isSelected: boolean;
  onPress: (categoryId: string) => void;
};

export function CategoryChip({ item, isSelected, onPress }: CategoryChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={isSelected ? { selected: true } : undefined}
      onPress={() => onPress(item.id)}
      style={[styles.categoryChip, isSelected && styles.categoryChipSelected]}
    >
      <Text
        size={12}
        weight={600}
        style={[styles.categoryChipText, isSelected && styles.categoryChipTextSelected]}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}
