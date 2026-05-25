import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../sales.styles";

type CartSummaryProps = {
  quantity: number;
  total: string;
  onPress: () => void;
};

export function CartSummary({ quantity, total, onPress }: CartSummaryProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.cartSummary}>
      <View style={styles.cartIconBox}>
        <MaterialCommunityIcons name="cart-outline" size={32} color={colors.primaryBright} />
        <View style={styles.cartIconBadge}>
          <Text size={10} weight={800} style={styles.cartIconBadgeText}>
            {String(quantity)}
          </Text>
        </View>
      </View>
      <View style={styles.cartSummaryText}>
        <Text size={16} weight={800} style={styles.cartQuantity}>
          {quantity} productos
        </Text>
        <Text size={14} weight={700} style={styles.cartAction}>
          Ver carrito
        </Text>
      </View>
      <View style={styles.cartTotalBox}>
        <Text size={14} weight={700} style={styles.cartTotalLabel}>
          Total
        </Text>
        <Text size={20} weight={800} style={styles.cartTotal}>
          {total}
        </Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={28} color={colors.primaryBright} />
    </Pressable>
  );
}
