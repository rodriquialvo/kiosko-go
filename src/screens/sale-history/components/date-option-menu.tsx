import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { SaleHistoryDateOption } from "../sale-history.controller";
import { styles } from "../sale-history.styles";

type DateOptionMenuProps = {
  options: SaleHistoryDateOption[];
  selectedOptionId: SaleHistoryDateOption["id"];
  onSelect: (dateOptionId: SaleHistoryDateOption["id"]) => void;
};

export function DateOptionMenu({ options, selectedOptionId, onSelect }: DateOptionMenuProps) {
  return (
    <View style={styles.dateMenu}>
      {options.map((item) => {
        const isSelected = item.id === selectedOptionId;

        return (
          <Pressable
            key={item.id}
            accessibilityRole="button"
            accessibilityLabel={`Seleccionar ${item.label}`}
            accessibilityState={isSelected ? { selected: true } : undefined}
            onPress={() => onSelect(item.id)}
            style={[styles.dateOption, isSelected && styles.dateOptionSelected]}
          >
            <Text
              size={12}
              weight={700}
              style={[styles.dateOptionText, isSelected && styles.dateOptionTextSelected]}
            >
              {item.label}
            </Text>
            {isSelected && (
              <MaterialCommunityIcons name="check" size={18} color={colors.primaryBright} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
