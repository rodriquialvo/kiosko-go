import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { CashMetric } from "../cash.controller";
import { styles } from "../cash.styles";

type CashMetricCardProps = {
  item: CashMetric;
  onPress: (metricId: string) => void;
};

export function CashMetricCard({ item, onPress }: CashMetricCardProps) {
  const isCard = item.variant === "card";
  const isTransfer = item.variant === "transfer";
  const accentColor = isCard
    ? colors.secondaryBright
    : isTransfer
      ? colors.info
      : colors.primaryBright;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.title}
      onPress={() => onPress(item.id)}
      style={[
        styles.metricCard,
        isCard && styles.metricCardSecondary,
        isTransfer && styles.metricCardTransfer,
      ]}
    >
      <View style={[styles.metricIconBox, isCard && styles.metricIconBoxSecondary, isTransfer && styles.metricIconBoxTransfer]}>
        <MaterialCommunityIcons name={item.icon} size={32} color={accentColor} />
      </View>
      <View style={styles.metricTextGroup}>
        <Text size={14} weight={600} numberOfLines={1} style={styles.metricTitle}>
          {item.title}
        </Text>
        <Text size={18} weight={600} style={styles.metricAmount}>
          {item.amount}
        </Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={26} color={accentColor} />
    </Pressable>
  );
}
