import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { AlertItem } from "../home.controller";
import { styles } from "../home.styles";

type AlertRowProps = {
  item: AlertItem;
  isLast: boolean;
};

export function AlertRow({ item, isLast }: AlertRowProps) {
  return (
    <Pressable style={[styles.alertRow, !isLast && styles.dividedRow]}>
      <View style={[styles.alertIconBox, { backgroundColor: item.iconBackgroundColor }]}>
        <MaterialCommunityIcons name={item.icon} size={24} color={colors.white} />
      </View>
      <View style={styles.alertTextGroup}>
        <Text size={16} weight={600} style={styles.listTitle}>
          {item.title}
        </Text>
        <Text size={14} weight={400} style={styles.mutedText}>
          {item.description}
        </Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={34} color={colors.textSoft} />
    </Pressable>
  );
}
