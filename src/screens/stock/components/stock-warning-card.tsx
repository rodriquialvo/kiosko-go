import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../stock.styles";

type StockWarningCardProps = {
  count: number;
  onPress: () => void;
};

export function StockWarningCard({ count, onPress }: StockWarningCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Ver productos con bajo stock"
      onPress={onPress}
      style={styles.warningCard}
    >
      <View style={styles.warningIconBox}>
        <MaterialCommunityIcons name="alert-outline" size={34} color={colors.warningBright} />
      </View>
      <View style={styles.warningTextGroup}>
        <Text size={14} weight={600} style={styles.warningTitle}>
          {count} productos con bajo stock
        </Text>
        <Text size={12} weight={400} style={styles.warningDescription}>
          Revisá el inventario para evitar faltantes.
        </Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={28} color={colors.warningBright} />
    </Pressable>
  );
}
