import { TextInput, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { styles } from "../checkout.styles";

type CashReceivedFieldProps = {
  value: string;
  formattedValue: string;
  onChangeText: (value: string) => void;
};

export function CashReceivedField({
  value,
  formattedValue,
  onChangeText,
}: CashReceivedFieldProps) {
  return (
    <View style={styles.cashSection}>
      <Text size={16} weight={800} style={styles.sectionTitle}>
        Efectivo recibido
      </Text>
      <View style={styles.cashInputBox}>
        <Text size={28} weight={800} style={styles.cashPrefix}>
          $
        </Text>
        <TextInput
          accessibilityLabel="Efectivo recibido"
          keyboardType="number-pad"
          value={value}
          onChangeText={onChangeText}
          placeholder={formattedValue}
          placeholderTextColor={colors.textMuted}
          style={styles.cashInput}
        />
      </View>
    </View>
  );
}
