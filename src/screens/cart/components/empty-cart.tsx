import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../cart.styles";

export function EmptyCart() {
  return (
    <View style={styles.emptyCard}>
      <View style={styles.emptyIconBox}>
        <MaterialCommunityIcons name="cart-outline" size={42} color={colors.primaryBright} />
      </View>
      <Text size={20} weight={800} style={styles.emptyTitle}>
        Tu carrito está vacío
      </Text>
      <Text size={14} weight={500} style={styles.emptyDescription}>
        Agregá productos desde ventas para preparar el pedido.
      </Text>
    </View>
  );
}
