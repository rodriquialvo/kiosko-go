import { Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { styles } from "../home.styles";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export function SectionHeader({ title, actionLabel, onActionPress }: SectionHeaderProps) {
  return (
    <View style={styles.sectionHeader}>
      <Text size={18} weight={600} style={styles.sectionTitle}>
        {title}
      </Text>
      {actionLabel ? (
        <Pressable onPress={onActionPress} hitSlop={8}>
          <Text size={18} weight={700} style={styles.sectionAction}>
            {actionLabel}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}
