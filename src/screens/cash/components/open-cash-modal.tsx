import { Modal, Pressable, TextInput, View } from "react-native";
import Text from "@/components/Text/Text";
import { PrimaryButton } from "@/components/primary-button/primary-button";
import { colors } from "@/theme/src/theme";
import type { OpenCashForm, OpenCashFormField } from "../cash.controller";
import { styles } from "../cash.styles";

type OpenCashModalProps = {
  visible: boolean;
  form: OpenCashForm;
  onChangeField: (field: OpenCashFormField, value: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
};

type OpenCashInputProps = {
  label: string;
  value: string;
  placeholder: string;
  multiline?: boolean;
  onChangeText: (value: string) => void;
};

function OpenCashInput({
  label,
  value,
  placeholder,
  multiline = false,
  onChangeText,
}: OpenCashInputProps) {
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

export function OpenCashModal({
  visible,
  form,
  onChangeField,
  onCancel,
  onConfirm,
}: OpenCashModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.modalOverlay}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cancelar apertura de caja"
          onPress={onCancel}
          style={styles.modalBackdrop}
        />

        <View style={styles.openCashModalCard}>
          <Text size={20} weight={800} style={styles.openCashTitle}>
            Abrir caja
          </Text>

          <OpenCashInput
            label="Fondo inicial"
            value={form.initialFund}
            placeholder="Ej: $50.000"
            onChangeText={(value) => onChangeField("initialFund", value)}
          />
          <OpenCashInput
            label="Responsable"
            value={form.responsible}
            placeholder="Ej: Juan Pérez"
            onChangeText={(value) => onChangeField("responsible", value)}
          />
          <OpenCashInput
            label="Observación opcional"
            value={form.observation}
            placeholder="Ej: Turno mañana"
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
              title="Abrir caja"
              onPress={onConfirm}
              accessibilityLabel="Confirmar apertura de caja"
              style={styles.openCashActionButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
