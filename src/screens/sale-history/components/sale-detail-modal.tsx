import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal, Pressable, View } from "react-native";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import type { SaleHistoryItem } from "../sale-history.controller";
import { styles } from "../sale-history.styles";
import { SaleProductRow } from "./sale-product-row";

type SaleDetailModalProps = {
  item: SaleHistoryItem | null;
  onClose: () => void;
};

export function SaleDetailModal({ item, onClose }: SaleDetailModalProps) {
  const isPaid = item?.status === "paid";

  return (
    <Modal visible={!!item} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cerrar detalle de venta"
          onPress={onClose}
          style={styles.modalBackdrop}
        />

        {!!item && (
          <View style={styles.detailCard}>
            <View style={styles.detailHeader}>
              <View style={styles.saleTitleGroup}>
                <Text size={20} weight={800} style={styles.detailTitle}>
                  {item.ticketNumber}
                </Text>
                <Text size={12} weight={500} style={styles.detailSubtitle}>
                  {item.dateLabel} · {item.timeLabel}
                </Text>
              </View>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Cerrar"
                onPress={onClose}
                style={styles.closeButton}
              >
                <MaterialCommunityIcons name="close" size={22} color={colors.textBright} />
              </Pressable>
            </View>

            <View style={styles.detailInfoGrid}>
              <View style={styles.detailInfoItem}>
                <Text size={12} weight={500} style={styles.detailInfoLabel}>
                  Pago
                </Text>
                <Text size={14} weight={800} style={styles.detailInfoValue}>
                  {item.paymentMethod}
                </Text>
              </View>
              <View style={styles.detailInfoItem}>
                <Text size={12} weight={500} style={styles.detailInfoLabel}>
                  Estado
                </Text>
                <Text
                  size={14}
                  weight={800}
                  style={isPaid ? styles.statusTextPaid : styles.statusTextCancelled}
                >
                  {isPaid ? "Cobrada" : "Anulada"}
                </Text>
              </View>
            </View>

            <View style={styles.detailProducts}>
              {item.products.map((product) => (
                <SaleProductRow key={product.id} item={product} />
              ))}
            </View>

            <View style={styles.detailTotalRow}>
              <Text size={14} weight={700} style={styles.detailTotalLabel}>
                Total
              </Text>
              <Text size={24} weight={800} style={styles.detailTotalValue}>
                {item.total}
              </Text>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}
