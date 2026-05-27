import { View } from "react-native";
import Text from "@/components/Text/Text";
import { styles } from "../sale-success.styles";

type SaleSummaryCardProps = {
  total: string;
  payment: string;
  change: string;
};

export function SaleSummaryCard({ total, payment, change }: SaleSummaryCardProps) {
  return (
    <View style={styles.summaryCard}>
      <View style={styles.summaryRow}>
        <Text size={16} weight={600} style={styles.summaryLabel}>
          Total
        </Text>
        <Text size={16} weight={800} style={styles.summaryValue}>
          {total}
        </Text>
      </View>
      <View style={styles.summaryRow}>
        <Text size={16} weight={600} style={styles.summaryLabel}>
          Pago
        </Text>
        <Text size={16} weight={800} style={styles.summaryValue}>
          {payment}
        </Text>
      </View>
      <View style={styles.summaryRow}>
        <Text size={16} weight={600} style={styles.summaryLabel}>
          Vuelto
        </Text>
        <Text size={16} weight={800} style={styles.summaryValue}>
          {change}
        </Text>
      </View>
    </View>
  );
}
