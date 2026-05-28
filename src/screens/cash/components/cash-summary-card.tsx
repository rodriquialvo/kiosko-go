import { View } from "react-native";
import Text from "@/components/Text/Text";
import type { CashSummaryRow } from "../cash.controller";
import { styles } from "../cash.styles";

type CashSummaryCardProps = {
  rows: CashSummaryRow[];
  expectedCash: string;
};

function getValueStyle(variant: CashSummaryRow["variant"]) {
  if (variant === "income") return styles.summaryValueIncome;
  if (variant === "expense") return styles.summaryValueExpense;
  return styles.summaryValue;
}

export function CashSummaryCard({ rows, expectedCash }: CashSummaryCardProps) {
  return (
    <View style={styles.summaryCard}>
      {rows.map((item) => (
        <View key={item.id} style={styles.summaryRow}>
          <Text size={14} weight={500} style={styles.summaryLabel}>
            {item.label}
          </Text>
          <Text size={14} weight={700} style={getValueStyle(item.variant)}>
            {item.value}
          </Text>
        </View>
      ))}

      <View style={styles.expectedCashRow}>
        <Text size={16} weight={800} style={styles.expectedCashLabel}>
          Dinero esperado en caja
        </Text>
        <Text size={20} weight={800} style={styles.expectedCashValue}>
          {expectedCash}
        </Text>
      </View>
    </View>
  );
}
