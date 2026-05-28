import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../sale-history.styles";

type SummaryCardProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  value: string;
};

export function SummaryCard({ icon, label, value }: SummaryCardProps) {
  return (
    <View style={styles.summaryCard}>
      <View style={styles.summaryIconRow}>
        <Text size={12} weight={600} style={styles.summaryLabel}>
          {label}
        </Text>
        <MaterialCommunityIcons name={icon} size={22} color={colors.primaryBright} />
      </View>
      <Text size={20} weight={800} style={styles.summaryValue}>
        {value}
      </Text>
    </View>
  );
}
