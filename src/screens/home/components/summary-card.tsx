import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Text from "@/components/Text/Text";
import type { SummaryCard } from "../home.controller";
import { styles } from "../home.styles";

type SummaryCardProps = {
  item: SummaryCard;
};

export function SummaryCardView({ item }: SummaryCardProps) {
  return (
    <View style={styles.summaryCard}>
      <View style={[styles.summaryIconBox, { backgroundColor: item.iconBackgroundColor }]}>
        <MaterialCommunityIcons name={item.icon} size={32} color={item.accentColor} />
      </View>
      <View style={styles.summaryTextGroup}>
        <Text size={16} weight={400} style={styles.mutedText}>
          {item.title}
        </Text>
        <Text size={24} weight={600} style={styles.amountText}>
          {item.amount}
        </Text>
      </View>
    </View>
  );
}
