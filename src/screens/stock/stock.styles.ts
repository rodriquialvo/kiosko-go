import { StyleSheet } from "react-native";
import { colors } from "@/theme/src/theme";
import { spacing } from "@/constants/theme";

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
  historyButton: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.surfaceGlass,
    paddingHorizontal: 14,
  },
  historyButtonText: {
    color: colors.textBright,
    marginLeft: 8,
  },
  searchBar: {
    marginBottom: 14,
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
    paddingBottom: 124,
  },
  warningCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.warning,
    backgroundColor: colors.warningSoft,
    padding: spacing.sm,
    marginBottom: 14,
  },
  warningIconBox: {
    width: 66,
    height: 66,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.warning,
    backgroundColor: colors.warningSurface,
    marginRight: 16,
  },
  warningTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  warningTitle: {
    color: colors.warningBright,
  },
  warningDescription: {
    color: colors.textSoft,
    marginTop: 6,
  },
  actionsGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },
  actionCard: {
    flex: 1,
    minHeight: 138,
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    justifyContent: "space-between",
  },
  actionCardPrimary: {
    borderColor: colors.primaryLineSoft,
    backgroundColor: colors.primarySoft,
  },
  actionCardSecondary: {
    borderColor: colors.secondaryGlow,
    backgroundColor: colors.secondarySoft,
  },
  actionIconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  actionIconBox: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  actionIconBoxPrimary: {
    backgroundColor: colors.primarySoft,
  },
  actionIconBoxSecondary: {
    backgroundColor: colors.secondarySoft,
  },
  actionTextGroup: {
    minWidth: 0,
  },
  actionTitle: {
    color: colors.textBright,
  },
  actionDescription: {
    color: colors.textMuted,
    marginTop: 6,
  },
  productsCard: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    overflow: "hidden",
  },
  productRow: {
    minHeight: 92,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerSoft,
    paddingHorizontal: 12,
  },
  productImageBox: {
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: colors.surfaceIcon,
    marginRight: 14,
    overflow: "hidden",
    padding: 6,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productEmoji: {
    textAlign: "center",
  },
  productTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  productName: {
    color: colors.textBright,
  },
  productCategory: {
    color: colors.textMuted,
    marginTop: 6,
  },
  stockGroup: {
    width: 52,
    alignItems: "flex-start",
    marginLeft: 10,
  },
  stockLabel: {
    color: colors.textMuted,
  },
  stockValueOk: {
    color: colors.textBright,
  },
  stockValueLow: {
    color: colors.warningBright,
  },
  stockValueOut: {
    color: colors.dangerBright,
  },
  statusBadge: {
    minWidth: 66,
    minHeight: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 8,
    paddingHorizontal: 10,
  },
  statusOk: {
    borderColor: colors.primaryBright,
    backgroundColor: colors.primarySoft,
  },
  statusLow: {
    borderColor: colors.warningBright,
    backgroundColor: colors.warningSoft,
  },
  statusOut: {
    borderColor: colors.dangerBright,
    backgroundColor: colors.dangerSoft,
  },
  statusTextOk: {
    color: colors.primaryBright,
  },
  statusTextLow: {
    color: colors.warningBright,
  },
  statusTextOut: {
    color: colors.dangerBright,
  },
});
