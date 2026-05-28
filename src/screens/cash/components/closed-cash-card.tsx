import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { LastClosedCash } from "../cash.controller";
import { styles } from "../cash.styles";

type ClosedCashCardProps = {
  lastClosedCash: LastClosedCash;
};

export function ClosedCashCard({ lastClosedCash }: ClosedCashCardProps) {
  return (
    <View style={styles.closedCashCard}>
      <View style={styles.closedCashIconBox}>
        <MaterialCommunityIcons name="lock-outline" size={32} color={colors.warningBright} />
      </View>

      <View style={styles.closedCashTextGroup}>
        <Text size={20} weight={800} style={styles.closedCashTitle}>
          Caja cerrada
        </Text>
        <Text size={14} weight={500} style={styles.closedCashDescription}>
          No hay una caja abierta en este momento.
        </Text>
        <Text size={12} weight={600} style={styles.closedCashMeta}>
          Último cierre: {lastClosedCash.closedAt}
        </Text>
        <Text size={12} weight={600} style={styles.closedCashMeta}>
          Cerrada por: {lastClosedCash.employee}
        </Text>
      </View>
    </View>
  );
}
