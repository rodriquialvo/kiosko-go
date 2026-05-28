import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../more.styles";

type MoreProfileCardProps = {
  name: string;
  role: string;
  badge: string;
  onPress: () => void;
};

export function MoreProfileCard({ name, role, badge, onPress }: MoreProfileCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Ver perfil"
      onPress={onPress}
      style={styles.profileCard}
    >
      <View style={styles.avatarBox}>
        <MaterialCommunityIcons name="account" size={48} color={colors.white} />
      </View>
      <View style={styles.profileTextGroup}>
        <Text size={16} weight={800} style={styles.profileName}>
          {name}
        </Text>
        <View style={styles.profileRoleRow}>
          <Text size={12} weight={500} style={styles.profileRole}>
            {role}
          </Text>
          <View style={styles.roleBadge}>
            <Text size={10} weight={800} style={styles.roleBadgeText}>
              {badge}
            </Text>
          </View>
        </View>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={28} color={colors.textMuted} />
    </Pressable>
  );
}
