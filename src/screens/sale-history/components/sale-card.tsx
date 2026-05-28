import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import type { SaleHistoryItem } from "../sale-history.controller";
import { styles } from "../sale-history.styles";

type SaleCardProps = {
  item: SaleHistoryItem;
  onPress: (saleId: string) => void;
};

export function SaleCard({ item, onPress }: SaleCardProps) {
  const isPaid = item.status === "paid";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Ver venta ${item.ticketNumber}`}
      onPress={() => onPress(item.id)}
      style={styles.saleCard}
    >
      <View style={styles.saleHeader}>
        <View style={styles.saleTitleGroup}>
          <Text size={16} weight={800} style={styles.ticketNumber}>
            {item.ticketNumber}
          </Text>
          <Text size={12} weight={500} style={styles.saleDate}>
            {item.dateLabel} · {item.timeLabel}
          </Text>
        </View>

        <View style={[styles.statusBadge, isPaid ? styles.statusPaid : styles.statusCancelled]}>
          <Text
            size={12}
            weight={700}
            style={isPaid ? styles.statusTextPaid : styles.statusTextCancelled}
          >
            {isPaid ? "Cobrada" : "Anulada"}
          </Text>
        </View>
      </View>

      <View style={styles.saleBody}>
        <View style={styles.saleMeta}>
          <Text size={14} weight={700} style={styles.itemCount}>
            {item.itemCount} productos
          </Text>
          <Text size={12} weight={500} style={styles.paymentMethod}>
            {item.paymentMethod}
          </Text>
        </View>

        <View style={styles.saleTotalGroup}>
          <Text size={12} weight={500} style={styles.totalLabel}>
            Total
          </Text>
          <Text size={18} weight={800} style={styles.totalValue}>
            {item.total}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
