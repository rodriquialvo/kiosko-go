import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { MoreOption } from "../more.controller";
import { styles } from "../more.styles";

type MoreOptionRowProps = {
  item: MoreOption;
  isLast: boolean;
  onPress: (optionId: string) => void;
};

function getIconBoxStyle(variant: MoreOption["variant"]) {
  if (variant === "green") return styles.iconBoxGreen;
  if (variant === "purple") return styles.iconBoxPurple;
  if (variant === "blue") return styles.iconBoxBlue;
  if (variant === "yellow") return styles.iconBoxYellow;
  if (variant === "pink") return styles.iconBoxPink;
  if (variant === "cyan") return styles.iconBoxCyan;
  return styles.iconBoxOrange;
}

function getIconColor(variant: MoreOption["variant"]): string {
  if (variant === "green") return colors.primaryBright;
  if (variant === "purple") return colors.secondaryBright;
  if (variant === "blue") return colors.info;
  if (variant === "yellow") return colors.warningBright;
  if (variant === "pink") return colors.dangerBright;
  if (variant === "cyan") return colors.info;
  return colors.warningBright;
}

export function MoreOptionRow({ item, isLast, onPress }: MoreOptionRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.title}
      onPress={() => onPress(item.id)}
      style={[styles.optionRow, !isLast && styles.optionRowDivider]}
    >
      <View style={[styles.optionIconBox, getIconBoxStyle(item.variant)]}>
        <MaterialCommunityIcons name={item.icon} size={28} color={getIconColor(item.variant)} />
      </View>
      <View style={styles.optionTextGroup}>
        <Text size={16} weight={600} style={styles.optionTitle}>
          {item.title}
        </Text>
        <Text size={14} weight={400}  style={styles.optionDescription}>
          {item.description}
        </Text>
      </View>
      {item.badge ? (
        <View style={styles.optionBadge}>
          <MaterialCommunityIcons name="whatsapp" size={18} color={colors.primaryBright} />
          <Text size={12} weight={600} style={styles.optionBadgeText}>
            {item.badge}
          </Text>
        </View>
      ) : (
        <MaterialCommunityIcons name="chevron-right" size={28} color={colors.textMuted} />
      )}
    </Pressable>
  );
}
