import { View } from "react-native";
import Text from "@/components/Text/Text";
import type { TopProduct } from "../home.controller";
import { styles } from "../home.styles";

type TopProductRowProps = {
  item: TopProduct;
  isLast: boolean;
};

export function TopProductRow({ item, isLast }: TopProductRowProps) {
  return (
    <View style={[styles.productRow, !isLast && styles.dividedRow]}>
      <View style={styles.rankBadge}>
        <Text size={18} weight={600} style={styles.rankText}>
          {String(item.rank)}
        </Text>
      </View>
      <Text size={16} weight={600} style={styles.productName}>
        {item.name}
      </Text>
      <Text size={16} weight={400} style={styles.productUnits}>
        {item.units}
      </Text>
    </View>
  );
}
