import { StyleSheet } from "react-native";
import { spacing, Theme } from "@/constants/theme";
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
    marginBottom: 24,
  },
  clearButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
  },
  clearButtonDisabled: {
    opacity: 0.42,
  },
  listContent: {
    paddingBottom: 140,
    gap: 14,
  },
  itemCard: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 14,
  },
  itemImageBox: {
    width: 66,
    height: 86,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: colors.surfaceIcon,
    marginRight: 14,
  },
  itemEmoji: {
    textAlign: "center",
  },
  itemContent: {
    flex: 1,
    minWidth: 0,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  itemTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  itemName: {
    color: colors.textBright,
  },
  itemMeta: {
    color: colors.textMuted,
    marginTop: 4,
  },
  removeButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: colors.dangerSoft,
    marginLeft: 8,
  },
  itemFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  quantitySelector: {
    width: 126,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.primaryLineSoft,
    backgroundColor: colors.surfaceGlassStrong,
    padding: 3,
  },
  quantityButton: {
    width: 32,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    backgroundColor: colors.primarySurfaceStrong,
  },
  quantityButtonDisabled: {
    opacity: 0.38,
  },
  quantityValue: {
    flex: 1,
    color: colors.white,
    textAlign: "center",
  },
  itemSubtotal: {
    color: colors.textBright,
    marginLeft: spacing.md,
  },
  summaryCard: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.primaryLineSoft,
    backgroundColor: colors.primarySoft,
    padding: 18,
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryLabel: {
    color: colors.textSoft,
  },
  summaryValue: {
    color: colors.textBright,
  },
  summaryDivider: {
    height: 1,
    backgroundColor: colors.dividerSoft,
    marginVertical: 14,
  },
  summaryTotalLabel: {
    color: colors.textBright,
  },
  summaryTotal: {
    color: colors.primaryBright,
  },
  emptyCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 22,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 28,
    marginBottom: 140,
  },
  emptyIconBox: {
    width: 88,
    height: 88,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Theme.borderRadius.full,
    backgroundColor: colors.primarySoft,
    marginBottom: 18,
  },
  emptyTitle: {
    color: colors.textBright,
    textAlign: "center",
  },
  emptyDescription: {
    color: colors.textMuted,
    textAlign: "center",
    marginTop: 8,
  },
  checkoutWrapper: {
    position: "absolute",
    right: 20,
    bottom: 28,
    left: 20,
  },
});
