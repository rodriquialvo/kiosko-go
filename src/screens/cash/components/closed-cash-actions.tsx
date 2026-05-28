import { View } from "react-native";
import { PrimaryButton } from "@/components/primary-button/primary-button";
import { styles } from "../cash.styles";

type ClosedCashActionsProps = {
  onOpenHistory: () => void;
  onOpenCash: () => void;
};

export function ClosedCashActions({ onOpenHistory, onOpenCash }: ClosedCashActionsProps) {
  return (
    <View style={styles.actionsRow}>
      <PrimaryButton
        title="Ver historial"
        type="secondary"
        leftIcon="clock"
        onPress={onOpenHistory}
        accessibilityLabel="Ver historial de caja"
        style={styles.registerButton}
      />
      <PrimaryButton
        title="Abrir caja"
        leftIcon="unlock"
        onPress={onOpenCash}
        accessibilityLabel="Abrir caja"
        style={styles.closeButton}
      />
    </View>
  );
}
