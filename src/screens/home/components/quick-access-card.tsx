import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { QuickAccessItem } from "../home.controller";
import { styles } from "../home.styles";

type QuickAccessCardProps = {
  item: QuickAccessItem;
};

export function QuickAccessCard({ item }: QuickAccessCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.title}
      style={[
        styles.quickAccessCard,
        { backgroundColor: item.backgroundColor, borderColor: item.borderColor },
      ]}
      onPress={item.onPress}
    >
      <MaterialCommunityIcons name={item.icon} size={32} color={colors.white} />
      <Text size={18} weight={600} style={styles.quickAccessTitle}>
        {item.title}
      </Text>
      <Text size={14} weight={400} style={styles.quickAccessSubtitle}>
        {item.subtitle}
      </Text>
    </Pressable>
  );
}
