import { View } from "react-native";
import Text from "@/components/Text/Text";
import type { LastClosedCash } from "../cash.controller";
import { styles } from "../cash.styles";

type LastClosedCashCardProps = {
  item: LastClosedCash;
};

type LastClosedCashRowProps = {
  label: string;
  value: string;
  variant?: "neutral" | "income" | "expense";
};

function LastClosedCashRow({ label, value, variant = "neutral" }: LastClosedCashRowProps) {
  return (
    <View style={styles.lastClosedRow}>
      <Text size={14} weight={500} style={styles.lastClosedLabel}>
        {label}
      </Text>
      <Text
        size={14}
        weight={800}
        style={[
          styles.lastClosedValue,
          variant === "income" && styles.lastClosedValueIncome,
          variant === "expense" && styles.lastClosedValueExpense,
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

export function LastClosedCashCard({ item }: LastClosedCashCardProps) {
  return (
    <View style={styles.lastClosedCard}>
      <Text size={18} weight={800} style={styles.lastClosedTitle}>
        Última caja cerrada
      </Text>

      <View style={styles.lastClosedRows}>
        <LastClosedCashRow label="Apertura" value={item.openedAt} />
        <LastClosedCashRow label="Cierre" value={item.closedAt} />
        <LastClosedCashRow label="Empleado" value={item.employee} />
        <LastClosedCashRow label="Total ventas" value={item.totalSales} />
        <LastClosedCashRow label="Ventas en efectivo" value={item.cashSales} />
        <LastClosedCashRow label="Efectivo esperado" value={item.expectedCash} />
        <LastClosedCashRow label="Efectivo contado" value={item.countedCash} />
        <LastClosedCashRow label="Diferencia" value={item.difference} variant="expense" />
      </View>
    </View>
  );
}
