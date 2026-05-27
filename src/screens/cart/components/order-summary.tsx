import { View } from "react-native";
import Text from "@/components/Text/Text";
import { styles } from "../cart.styles";

type OrderSummaryProps = {
  quantity: number;
  total: string;
};

export function OrderSummary({ quantity, total }: OrderSummaryProps) {
  return (
    <View style={styles.summaryCard}>
      <View style={styles.summaryRow}>
        <Text size={14} weight={500} style={styles.summaryLabel}>
          Productos
        </Text>
        <Text size={14} weight={700} style={styles.summaryValue}>
          {quantity}
        </Text>
      </View>
      <View style={styles.summaryDivider} />
      <View style={styles.summaryRow}>
        <Text size={16} weight={800} style={styles.summaryTotalLabel}>
          Total
        </Text>
        <Text size={24} weight={800} style={styles.summaryTotal}>
          {total}
        </Text>
      </View>
    </View>
  );
}
