import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import type { CartItem } from "@/features/cart/cart.context";
import { colors } from "@/theme/src/theme";
import type { Product } from "@/screens/sales/sales.types";
import { styles } from "../cart.styles";

type CartItemCardProps = {
  item: CartItem;
  onIncrease: (product: Product) => void;
  onDecrease: (product: Product) => void;
  onRemove: (product: Product) => void;
};

export function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) {
  return (
    <View style={styles.itemCard}>
      <View style={styles.itemImageBox}>
        <Text size={32} weight={700} style={styles.itemEmoji}>
          {item.product.emoji}
        </Text>
      </View>

      <View style={styles.itemContent}>
        <View style={styles.itemHeader}>
          <View style={styles.itemTextGroup}>
            <Text size={14} weight={700} numberOfLines={2} style={styles.itemName}>
              {item.product.name}
            </Text>
            <Text size={12} weight={500} style={styles.itemMeta}>
              {item.product.price} · Stock {item.product.stock}
            </Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Quitar ${item.product.name} del carrito`}
            onPress={() => onRemove(item.product)}
            style={styles.removeButton}
          >
            <MaterialCommunityIcons name="trash-can-outline" size={20} color={colors.dangerBright} />
          </Pressable>
        </View>

        <View style={styles.itemFooter}>
          <View style={styles.quantitySelector}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Restar ${item.product.name}`}
              onPress={() => onDecrease(item.product)}
              style={styles.quantityButton}
            >
              <MaterialCommunityIcons name="minus" size={18} color={colors.white} />
            </Pressable>
            <Text size={14} weight={800} style={styles.quantityValue}>
              {String(item.quantity)}
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Sumar ${item.product.name}`}
              disabled={item.quantity >= item.product.stock}
              onPress={() => onIncrease(item.product)}
              style={[
                styles.quantityButton,
                item.quantity >= item.product.stock && styles.quantityButtonDisabled,
              ]}
            >
              <MaterialCommunityIcons name="plus" size={18} color={colors.white} />
            </Pressable>
          </View>

          <Text size={16} weight={800} style={styles.itemSubtotal}>
            {item.subtotal}
          </Text>
        </View>
      </View>
    </View>
  );
}
