import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { StockAction } from "../stock.controller";
import { styles } from "../stock.styles";

type StockActionCardProps = {
  item: StockAction;
  onPress: (actionId: string) => void;
};

export function StockActionCard({ item, onPress }: StockActionCardProps) {
  const isPrimary = item.variant === "primary";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.title}
      onPress={() => onPress(item.id)}
      style={[styles.actionCard, isPrimary ? styles.actionCardPrimary : styles.actionCardSecondary]}
    >
      <View style={styles.actionIconRow}>
        <View style={[styles.actionIconBox, isPrimary ? styles.actionIconBoxPrimary : styles.actionIconBoxSecondary]}>
          <MaterialCommunityIcons
            name={item.icon}
            size={32}
            color={isPrimary ? colors.primaryBright : colors.secondaryBright}
          />
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color={colors.textMuted} />
      </View>
      <View style={styles.actionTextGroup}>
        <Text size={14} weight={800} numberOfLines={2} style={styles.actionTitle}>
          {item.title}
        </Text>
        <Text size={12} weight={500} numberOfLines={2} style={styles.actionDescription}>
          {item.description}
        </Text>
      </View>
    </Pressable>
  );
}
