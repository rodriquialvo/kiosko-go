import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { StockHistorySummary } from "../stock-history.controller";
import { styles } from "../stock-history.styles";

type StockHistorySummaryCardProps = {
  item: StockHistorySummary;
};

function getSummaryIcon(item: StockHistorySummary) {
  if (item.variant === "incoming") return "arrow-up-circle-outline" as const;
  if (item.variant === "outgoing") return "arrow-down-circle-outline" as const;
  return "clipboard-edit-outline" as const;
}

function getSummaryIconColor(item: StockHistorySummary): string {
  if (item.variant === "incoming") return colors.primaryBright;
  if (item.variant === "outgoing") return colors.dangerBright;
  return colors.secondaryBright;
}

function getSummaryIconBoxStyle(item: StockHistorySummary) {
  if (item.variant === "incoming") return styles.summaryIconIncoming;
  if (item.variant === "outgoing") return styles.summaryIconOutgoing;
  return styles.summaryIconAdjustment;
}

export function StockHistorySummaryCard({ item }: StockHistorySummaryCardProps) {
  return (
    <View style={styles.summaryCard}>
      <View style={[styles.summaryIconBox, getSummaryIconBoxStyle(item)]}>
        <MaterialCommunityIcons
          name={getSummaryIcon(item)}
          size={28}
          color={getSummaryIconColor(item)}
        />
      </View>

      <View style={styles.summaryTextGroup}>
        <Text size={14} weight={600} style={styles.summaryTitle}>
          {item.title}
        </Text>
        <Text size={18} weight={800} style={styles.summaryValue}>
          {item.value}
        </Text>
      </View>
    </View>
  );
}
