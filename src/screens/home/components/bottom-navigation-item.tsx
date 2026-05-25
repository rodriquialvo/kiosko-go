import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { TabItem } from "../home.controller";
import { styles } from "../home.styles";

type BottomNavigationItemProps = {
  item: TabItem;
};

export function BottomNavigationItem({ item }: BottomNavigationItemProps) {
  const itemColor = item.isActive ? colors.primaryBright : colors.textMutedStrong;

  return (
    <Pressable style={styles.bottomNavigationItem}>
      <View>
        {item.isActive ? <View style={styles.activeTabDot} /> : null}
        <MaterialCommunityIcons name={item.icon} size={36} color={itemColor} />
      </View>
      <Text size={14} weight={500} style={[styles.bottomNavigationLabel, { color: itemColor }]}>
        {item.label}
      </Text>
    </Pressable>
  );
}
