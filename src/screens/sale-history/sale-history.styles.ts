import { StyleSheet } from "react-native";
import { spacing } from "@/constants/theme";
import { colors } from "@/theme/src/theme";

export const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  header: {
    marginBottom: 0,
  },
  dateButton: {
    maxWidth: 176,
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.surfaceGlass,
    paddingHorizontal: 12,
  },
  dateButtonText: {
    flex: 1,
    color: colors.textBright,
    marginHorizontal: 8,
  },
  dateMenu: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlassStrong,
    padding: 8,
    marginBottom: 14,
    gap: 4,
  },
  dateOption: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 11,
    paddingHorizontal: 12,
  },
  dateOptionSelected: {
    backgroundColor: colors.primarySoft,
  },
  dateOptionText: {
    color: colors.textSoft,
  },
  dateOptionTextSelected: {
    color: colors.textBright,
  },
  summaryGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 18,
  },
  summaryCard: {
    flex: 1,
    minHeight: 96,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: spacing.md,
    justifyContent: "space-between",
  },
  summaryIconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryLabel: {
    color: colors.textMuted,
  },
  summaryValue: {
    color: colors.textBright,
  },
  filters: {
    flexGrow: 0,
    height: 46,
    marginBottom: 18,
  },
  filtersContent: {
    alignItems: "center",
    gap: 10,
  },
  filterChip: {
    minHeight: 38,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    paddingHorizontal: 16,
  },
  filterChipSelected: {
    borderColor: colors.primaryBright,
    backgroundColor: colors.primarySurfaceStrong,
  },
  filterChipText: {
    color: colors.textSoft,
  },
  filterChipTextSelected: {
    color: colors.white,
  },
  listContent: {
    paddingBottom: 44,
    gap: 12,
  },
  saleCard: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 14,
  },
  saleHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  saleTitleGroup: {
    flex: 1,
    minWidth: 0,
  },
  ticketNumber: {
    color: colors.textBright,
  },
  saleDate: {
    color: colors.textMuted,
    marginTop: 4,
  },
  statusBadge: {
    minHeight: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  statusPaid: {
    borderColor: colors.primaryBright,
    backgroundColor: colors.primarySoft,
  },
  statusCancelled: {
    borderColor: colors.dangerBright,
    backgroundColor: colors.dangerSoft,
  },
  statusTextPaid: {
    color: colors.primaryBright,
  },
  statusTextCancelled: {
    color: colors.dangerBright,
  },
  saleBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  saleMeta: {
    flex: 1,
    minWidth: 0,
  },
  itemCount: {
    color: colors.textBright,
  },
  paymentMethod: {
    color: colors.textMuted,
    marginTop: 4,
  },
  saleTotalGroup: {
    alignItems: "flex-end",
    marginLeft: 12,
  },
  totalLabel: {
    color: colors.textMuted,
  },
  totalValue: {
    color: colors.textBright,
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.surfaceOverlayStrong,
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFill,
  },
  detailCard: {
    maxHeight: "82%",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.appBackgroundMid,
    padding: 20,
  },
  detailHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  detailTitle: {
    color: colors.textBright,
  },
  detailSubtitle: {
    color: colors.textMuted,
    marginTop: 4,
  },
  closeButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    marginLeft: 12,
  },
  detailInfoGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  detailInfoItem: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 12,
  },
  detailInfoLabel: {
    color: colors.textMuted,
    marginBottom: 4,
  },
  detailInfoValue: {
    color: colors.textBright,
  },
  detailProducts: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    overflow: "hidden",
  },
  detailProductRow: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerSoft,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  detailProductTextGroup: {
    flex: 1,
    minWidth: 0,
    marginRight: 12,
  },
  detailProductName: {
    color: colors.textBright,
  },
  detailProductMeta: {
    color: colors.textMuted,
    marginTop: 4,
  },
  detailProductSubtotal: {
    color: colors.textBright,
  },
  detailTotalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.primaryLineSoft,
    backgroundColor: colors.primarySoft,
    padding: 16,
    marginTop: 16,
  },
  detailTotalLabel: {
    color: colors.textSoft,
  },
  detailTotalValue: {
    color: colors.primaryBright,
  },
});
