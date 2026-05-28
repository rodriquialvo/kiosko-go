import { View } from "react-native";
import Text from "@/components/Text/Text";
import type { StockHistoryMovement, StockHistoryMovementType } from "../stock-history.controller";
import { styles } from "../stock-history.styles";

type StockHistoryMovementCardProps = {
  item: StockHistoryMovement;
};

function getMovementTypeStyle(type: StockHistoryMovementType) {
  if (type === "incoming") return styles.movementTypeIncoming;
  if (type === "sale") return styles.movementTypeSale;
  if (type === "adjustment") return styles.movementTypeAdjustment;
  if (type === "product_created") return styles.movementTypeProductCreated;
  if (type === "manual_out") return styles.movementTypeManualOut;
  return styles.movementTypeCorrection;
}

function isPositiveQuantity(quantityLabel: string): boolean {
  return quantityLabel.startsWith("+");
}

export function StockHistoryMovementCard({ item }: StockHistoryMovementCardProps) {
  const isPositive = isPositiveQuantity(item.quantityLabel);

  return (
    <View style={styles.movementCard}>
      <View style={styles.movementHeader}>
        <View style={styles.movementTitleGroup}>
          <View style={[styles.movementType, getMovementTypeStyle(item.type)]}>
            <Text size={12} weight={800} style={styles.movementTypeText}>
              {item.typeLabel}
            </Text>
          </View>
          <Text size={16} weight={800} numberOfLines={2} style={styles.movementProduct}>
            {item.productName}
          </Text>
        </View>

        <Text
          size={18}
          weight={800}
          style={[
            styles.movementQuantity,
            isPositive ? styles.movementQuantityPositive : styles.movementQuantityNegative,
          ]}
        >
          {item.quantityLabel}
        </Text>
      </View>

      <View style={styles.stockChangeRow}>
        <Text size={12} weight={600} style={styles.stockChangeLabel}>
          Stock
        </Text>
        <Text size={16} weight={800} style={styles.stockChangeValue}>
          {item.previousStock} → {item.newStock}
        </Text>
      </View>

      <Text size={12} weight={600} style={styles.movementMeta}>
        {item.dateTimeLabel} · {item.actorLabel}
      </Text>
      <Text size={12} weight={500} style={styles.movementReason}>
        Motivo: {item.reasonLabel}
      </Text>
    </View>
  );
}
