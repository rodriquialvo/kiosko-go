import { View } from "react-native";
import Text from "@/components/Text/Text";
import { styles } from "../checkout.styles";

type ChangeSummaryProps = {
  change: string;
};

export function ChangeSummary({ change }: ChangeSummaryProps) {
  return (
    <View style={styles.changeSection}>
      <Text size={16} weight={800} style={styles.sectionTitle}>
        Vuelto
      </Text>
      <Text size={32} weight={800} style={styles.changeValue}>
        {change}
      </Text>
    </View>
  );
}
