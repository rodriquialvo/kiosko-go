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
  searchBar: {
    marginBottom: 14,
  },
  filters: {
    flexGrow: 0,
    height: 46,
    marginBottom: 14,
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
  sectionTitle: {
    color: colors.textBright,
    marginBottom: 10,
  },
  summaryGrid: {
    gap: 12,
    marginBottom: 20,
  },
  summaryCard: {
    minHeight: 86,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: spacing.md,
  },
  summaryIconBox: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    marginRight: 14,
  },
  summaryIconIncoming: {
    backgroundColor: colors.primarySoft,
  },
  summaryIconOutgoing: {
    backgroundColor: colors.dangerSoft,
  },
  summaryIconAdjustment: {
    backgroundColor: colors.secondarySoft,
  },
  summaryTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  summaryTitle: {
    color: colors.textMuted,
  },
  summaryValue: {
    color: colors.textBright,
    marginTop: 6,
  },
  listContent: {
    paddingBottom: 132,
  },
  movementList: {
    gap: 12,
  },
  movementCard: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 14,
  },
  movementHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  movementTitleGroup: {
    flex: 1,
    minWidth: 0,
    marginRight: 12,
  },
  movementType: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 8,
  },
  movementTypeIncoming: {
    borderColor: colors.primaryBright,
    backgroundColor: colors.primarySoft,
  },
  movementTypeSale: {
    borderColor: colors.warningBright,
    backgroundColor: colors.warningSoft,
  },
  movementTypeAdjustment: {
    borderColor: colors.secondaryBright,
    backgroundColor: colors.secondarySoft,
  },
  movementTypeProductCreated: {
    borderColor: colors.info,
    backgroundColor: colors.infoSoft,
  },
  movementTypeManualOut: {
    borderColor: colors.dangerBright,
    backgroundColor: colors.dangerSoft,
  },
  movementTypeCorrection: {
    borderColor: colors.warningBright,
    backgroundColor: colors.warningSoft,
  },
  movementTypeText: {
    color: colors.textBright,
  },
  movementProduct: {
    color: colors.textBright,
  },
  movementQuantity: {
    color: colors.textBright,
    textAlign: "right",
  },
  movementQuantityPositive: {
    color: colors.primaryBright,
  },
  movementQuantityNegative: {
    color: colors.dangerBright,
  },
  stockChangeRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlassStrong,
    padding: 12,
    marginBottom: 12,
  },
  stockChangeLabel: {
    color: colors.textMuted,
    marginRight: 10,
  },
  stockChangeValue: {
    color: colors.textBright,
  },
  movementMeta: {
    color: colors.textSoft,
  },
  movementReason: {
    color: colors.textMuted,
    marginTop: 6,
  },
});
