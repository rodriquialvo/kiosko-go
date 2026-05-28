import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../more.styles";

type LogoutButtonProps = {
  onPress: () => void;
};

export function LogoutButton({ onPress }: LogoutButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Cerrar sesión"
      onPress={onPress}
      style={styles.logoutButton}
    >
      <MaterialCommunityIcons name="logout" size={26} color={colors.secondaryBright} />
      <Text size={16} weight={800} style={styles.logoutText}>
        Cerrar sesión
      </Text>
    </Pressable>
  );
}
