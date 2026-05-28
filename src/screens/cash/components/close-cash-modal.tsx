import { Modal, Pressable, TextInput, View } from "react-native";
import Text from "@/components/Text/Text";
import { PrimaryButton } from "@/components/primary-button/primary-button";
import { colors } from "@/theme/src/theme";
import type { CloseCashForm, CloseCashFormField } from "../cash.controller";
import { styles } from "../cash.styles";

type CloseCashModalProps = {
  visible: boolean;
  form: CloseCashForm;
  expectedCash: string;
  onChangeField: (field: CloseCashFormField, value: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
};

type CloseCashInputProps = {
  label: string;
  value: string;
  placeholder: string;
  multiline?: boolean;
  onChangeText: (value: string) => void;
};

function CloseCashInput({
  label,
  value,
  placeholder,
  multiline = false,
  onChangeText,
}: CloseCashInputProps) {
  return (
    <View style={styles.openCashField}>
      <Text size={14} weight={700} style={styles.openCashLabel}>
        {label}
      </Text>
      <TextInput
        accessibilityLabel={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        multiline={multiline}
        style={[styles.openCashInput, multiline && styles.openCashInputMultiline]}
      />
    </View>
  );
}

export function CloseCashModal({
  visible,
  form,
  expectedCash,
  onChangeField,
  onCancel,
  onConfirm,
}: CloseCashModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.modalOverlay}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cancelar cierre de caja"
          onPress={onCancel}
          style={styles.modalBackdrop}
        />

        <View style={styles.openCashModalCard}>
          <Text size={20} weight={800} style={styles.openCashTitle}>
            Cerrar caja
          </Text>

          <View style={styles.closeCashExpectedRow}>
            <Text size={14} weight={600} style={styles.closeCashExpectedLabel}>
              Efectivo esperado
            </Text>
            <Text size={18} weight={800} style={styles.closeCashExpectedValue}>
              {expectedCash}
            </Text>
          </View>

          <CloseCashInput
            label="Efectivo contado"
            value={form.countedCash}
            placeholder="Ej: $201.680"
            onChangeText={(value) => onChangeField("countedCash", value)}
          />
          <CloseCashInput
            label="Responsable"
            value={form.responsible}
            placeholder="Ej: Juan Pérez"
            onChangeText={(value) => onChangeField("responsible", value)}
          />
          <CloseCashInput
            label="Observación opcional"
            value={form.observation}
            placeholder="Ej: Diferencia revisada"
            multiline
            onChangeText={(value) => onChangeField("observation", value)}
          />

          <View style={styles.openCashActions}>
            <PrimaryButton
              title="Cancelar"
              type="secondary"
              onPress={onCancel}
              accessibilityLabel="Cancelar"
              style={styles.openCashActionButton}
            />
            <PrimaryButton
              title="Cerrar caja"
              leftIcon="lock"
              onPress={onConfirm}
              accessibilityLabel="Confirmar cierre de caja"
              style={styles.openCashActionButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
