import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { StockProduct, StockStatus } from "../stock.controller";
import { styles } from "../stock.styles";

type StockProductRowProps = {
  item: StockProduct;
  onPress: (productId: string) => void;
};

function getStatusLabel(status: StockStatus): string {
  if (status === "ok") return "OK";
  if (status === "low") return "Bajo";
  return "Sin";
}

function getStatusStyle(status: StockStatus) {
  if (status === "ok") return styles.statusOk;
  if (status === "low") return styles.statusLow;
  return styles.statusOut;
}

function getStatusTextStyle(status: StockStatus) {
  if (status === "ok") return styles.statusTextOk;
  if (status === "low") return styles.statusTextLow;
  return styles.statusTextOut;
}

function getStockTextStyle(status: StockStatus) {
  if (status === "ok") return styles.stockValueOk;
  if (status === "low") return styles.stockValueLow;
  return styles.stockValueOut;
}

export function StockProductRow({ item, onPress }: StockProductRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Ver ${item.name}`}
      onPress={() => onPress(item.id)}
      style={styles.productRow}
    >
      <View style={styles.productImageBox}>
        <Text size={30} weight={600} style={styles.productEmoji}>
          {item.emoji}
        </Text>
      </View>

      <View style={styles.productTextGroup}>
        <Text size={12} weight={600} numberOfLines={2} style={styles.productName}>
          {item.name}
        </Text>
        <Text size={12} weight={400} style={styles.productCategory}>
          {item.category}
        </Text>
      </View>

      <View style={styles.stockGroup}>
        <Text size={12} weight={400} style={styles.stockLabel}>
          Stock
        </Text>
        <Text size={16} weight={600} style={getStockTextStyle(item.status)}>
          {String(item.stock)}
        </Text>
      </View>

      <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
        <Text size={12} weight={400} style={getStatusTextStyle(item.status)}>
          {getStatusLabel(item.status)}
        </Text>
      </View>

      <MaterialCommunityIcons name="chevron-right" size={24} color={colors.textMuted} />
    </Pressable>
  );
}
