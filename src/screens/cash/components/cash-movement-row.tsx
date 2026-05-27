import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { CashMovement } from "../cash.controller";
import { styles } from "../cash.styles";

type CashMovementRowProps = {
  item: CashMovement;
  isLast: boolean;
  onPress: (movementId: string) => void;
};

export function CashMovementRow({ item, isLast, onPress }: CashMovementRowProps) {
  const isExpense = item.type === "expense";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.title}
      onPress={() => onPress(item.id)}
      style={[styles.movementRow, !isLast && styles.movementRowDivider]}
    >
      <View style={[styles.movementIconBox, isExpense && styles.movementIconBoxExpense]}>
        <MaterialCommunityIcons
          name={item.icon}
          size={26}
          color={isExpense ? colors.dangerBright : colors.primaryBright}
        />
      </View>
      <View style={styles.movementTextGroup}>
        <Text size={14} weight={600} style={styles.movementTitle}>
          {item.title}
        </Text>
        <Text size={12} weight={400} style={styles.movementDescription}>
          {item.description}
        </Text>
      </View>
      <Text
        size={16}
        weight={600}
        style={[styles.movementAmount, isExpense && styles.movementAmountExpense]}
      >
        {item.amount}
      </Text>
      <MaterialCommunityIcons name="chevron-right" size={24} color={colors.textMuted} />
    </Pressable>
  );
}
