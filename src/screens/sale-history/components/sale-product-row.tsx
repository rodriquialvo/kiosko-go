import { View } from "react-native";
import Text from "@/components/Text/Text";
import type { SaleHistoryProduct } from "../sale-history.controller";
import { styles } from "../sale-history.styles";

type SaleProductRowProps = {
  item: SaleHistoryProduct;
};

export function SaleProductRow({ item }: SaleProductRowProps) {
  return (
    <View style={styles.detailProductRow}>
      <View style={styles.detailProductTextGroup}>
        <Text size={14} weight={700} numberOfLines={2} style={styles.detailProductName}>
          {item.name}
        </Text>
        <Text size={12} weight={500} style={styles.detailProductMeta}>
          {item.quantity} x {item.unitPrice}
        </Text>
      </View>
      <Text size={14} weight={800} style={styles.detailProductSubtotal}>
        {item.subtotal}
      </Text>
    </View>
  );
}
