import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { PaymentMethod, PaymentMethodId } from "../checkout.controller";
import { styles } from "../checkout.styles";

type PaymentMethodRowProps = {
  item: PaymentMethod;
  isSelected: boolean;
  onPress: (methodId: PaymentMethodId) => void;
};

export function PaymentMethodRow({ item, isSelected, onPress }: PaymentMethodRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={isSelected ? { selected: true } : undefined}
      onPress={() => onPress(item.id)}
      style={[styles.methodRow, isSelected && styles.methodRowSelected]}
    >
      <View style={[styles.methodIconBox, isSelected && styles.methodIconBoxSelected]}>
        <MaterialCommunityIcons
          name={item.icon}
          size={26}
          color={isSelected ? colors.secondaryBright : colors.textMuted}
        />
      </View>
      <Text
        size={16}
        weight={700}
        style={[styles.methodLabel, isSelected && styles.methodLabelSelected]}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}
