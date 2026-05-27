import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../cash.styles";

type CurrentCashCardProps = {
  amount: string;
  openedAt: string;
};

export function CurrentCashCard({ amount, openedAt }: CurrentCashCardProps) {
  return (
    <View style={styles.currentCashCard}>
      <View style={styles.currentCashIconBox}>
        <MaterialCommunityIcons name="cash-register" size={32} color={colors.primaryBright} />
      </View>
      <View style={styles.currentCashTextGroup}>
        <Text size={14} weight={600} style={styles.currentCashLabel}>
          Efectivo esperado
        </Text>
        <Text size={24} weight={600} style={styles.currentCashAmount}>
          {amount}
        </Text>
        <View style={styles.openedAtRow}>
          <MaterialCommunityIcons name="clock-outline" size={18} color={colors.textSoft} />
          <Text size={14} weight={400} style={styles.openedAtText}>
            {openedAt}
          </Text>
        </View>
      </View>
      <View style={styles.statusPill}>
        <Text size={14} weight={700} style={styles.statusPillText}>
          Abierta
        </Text>
      </View>
    </View>
  );
}
