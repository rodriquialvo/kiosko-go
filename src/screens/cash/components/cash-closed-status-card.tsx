import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../cash.styles";

export function CashClosedStatusCard() {
  return (
    <View style={styles.closedStatusCard}>
      <View style={styles.closedStatusIconBox}>
        <MaterialCommunityIcons name="cash-register" size={28} color={colors.warningBright} />
      </View>

      <View style={styles.closedStatusTextGroup}>
        <Text size={16} weight={800} style={styles.closedStatusTitle}>
          Estado actual
        </Text>
        <Text size={14} weight={700} style={styles.closedStatusValue}>
          Caja cerrada
        </Text>
        <Text size={12} weight={500} style={styles.closedStatusDescription}>
          No se pueden registrar ventas hasta abrir una caja.
        </Text>
      </View>
    </View>
  );
}
