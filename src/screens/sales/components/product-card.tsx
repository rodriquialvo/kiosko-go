import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { Product } from "../sales.types";
import { styles } from "../sales.styles";

type ProductCardProps = {
  item: Product;
  quantity: number;
  onIncrease: (product: Product) => void;
  onDecrease: (product: Product) => void;
  onAddToCart: (product: Product) => void;
};

export function ProductCard({
  item,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
}: ProductCardProps) {
  return (
    <View style={styles.productCard}>
      <View style={styles.productImageBox}>
        {item.image ? (
          <Image source={item.image} style={styles.productImage} contentFit="contain" />
        ) : (
          <Text size={32} weight={600} style={styles.productEmoji}>
            {item.emoji}
          </Text>
        )}
      </View>
      <View style={styles.productInfo}>
        <Text size={14} weight={600} numberOfLines={2} style={styles.productName}>
          {item.name}
        </Text>
        <Text size={14} weight={400} style={styles.productStock}>
          Stock: {item.stock}
        </Text>
        <Text size={18} weight={600} style={styles.productPrice}>
          {item.price}
        </Text>
      </View>
      <View style={styles.quantitySelector}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Quitar ${item.name}`}
          disabled={quantity === 0}
          onPress={() => onDecrease(item)}
          style={[styles.quantityButton, quantity === 0 && styles.quantityButtonDisabled]}
        >
          <MaterialCommunityIcons name="minus" size={18} color={colors.white} />
        </Pressable>
        <Text size={14} weight={800} style={styles.quantityValue}>
          {String(quantity)}
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Agregar ${item.name}`}
          disabled={quantity >= item.stock}
          onPress={() => onIncrease(item)}
          style={[styles.quantityButton, quantity >= item.stock && styles.quantityButtonDisabled]}
        >
          <MaterialCommunityIcons name="plus" size={18} color={colors.white} />
        </Pressable>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Agregar ${item.name} al carrito`}
        disabled={quantity === 0}
        onPress={() => onAddToCart(item)}
        style={[styles.addToCartButton, quantity === 0 && styles.addToCartButtonDisabled]}
      >
        <Text
          size={12}
          weight={800}
          style={[
            styles.addToCartButtonText,
            quantity === 0 && styles.addToCartButtonTextDisabled,
          ]}
        >
          Agregar
        </Text>
      </Pressable>
    </View>
  );
}
