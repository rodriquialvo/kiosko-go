import { View } from "react-native";
import Text from "@/components/Text/Text";
import { styles } from "../checkout.styles";

type CheckoutTotalCardProps = {
  total: string;
};

export function CheckoutTotalCard({ total }: CheckoutTotalCardProps) {
  return (
    <View style={styles.totalCard}>
      <Text size={14} weight={600} style={styles.totalLabel}>
        Total a cobrar
      </Text>
      <Text size={32} weight={800} style={styles.totalValue}>
        {total}
      </Text>
    </View>
  );
}
