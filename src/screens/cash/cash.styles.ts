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
  scrollContent: {
    paddingBottom: 132,
  },
  currentCashCard: {
    minHeight: 158,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.primaryLine,
    backgroundColor: colors.primarySoft,
    padding: 18,
    marginBottom: 18,
  },
  currentCashIconBox: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.primaryBright,
    backgroundColor: colors.primarySoft,
    marginRight: 18,
    padding: spacing.sm
  },
  currentCashTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  currentCashLabel: {
    color: colors.primaryBright,
  },
  currentCashAmount: {
    color: colors.textBright,
    marginTop: 8,
  },
  openedAtRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  openedAtText: {
    color: colors.textSoft,
    marginLeft: 6,
  },
  statusPill: {
    minWidth: 88,
    minHeight: 38,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.primaryBright,
    backgroundColor: colors.primarySoft,
    marginLeft: 12,
  },
  statusPillText: {
    color: colors.primaryBright,
  },
  metricsGrid: {
    // flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    marginBottom: 22,
  },
  metricCard: {
    // width: "48%",
    minHeight: 102,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.primaryLineSoft,
    backgroundColor: colors.primarySoft,
    padding: 14,
  },
  metricCardSecondary: {
    borderColor: colors.secondaryGlow,
    backgroundColor: colors.secondarySoft,
  },
  metricCardTransfer: {
    width: "100%",
    borderColor: colors.info,
    backgroundColor: colors.infoSoft,
  },
  metricIconBox: {
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.primaryLine,
    backgroundColor: colors.primarySoft,
    marginRight: 14,
  },
  metricIconBoxSecondary: {
    borderColor: colors.secondaryGlow,
    backgroundColor: colors.secondarySoft,
  },
  metricIconBoxTransfer: {
    borderColor: colors.info,
    backgroundColor: colors.infoSoft,
  },
  metricTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  metricTitle: {
    color: colors.textBright,
  },
  metricAmount: {
    color: colors.textBright,
    marginTop: 8,
  },
  sectionTitle: {
    color: colors.textBright,
    marginBottom: 10,
  },
  movementsCard: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    overflow: "hidden",
    marginBottom: 24,
  },
  movementRow: {
    minHeight: 78,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  movementRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerSoft,
  },
  movementIconBox: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: colors.primarySoft,
    marginRight: 14,
  },
  movementIconBoxExpense: {
    backgroundColor: colors.dangerSoft,
  },
  movementTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  movementTitle: {
    color: colors.textBright,
  },
  movementDescription: {
    color: colors.textMuted,
    marginTop: 3,
  },
  movementAmount: {
    color: colors.primaryBright,
    marginHorizontal: 10,
  },
  movementAmountExpense: {
    color: colors.dangerBright,
  },
  summaryCard: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    overflow: "hidden",
    marginBottom: 24,
  },
  summaryRow: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerSoft,
    paddingHorizontal: 18,
  },
  summaryLabel: {
    color: colors.textBright,
  },
  summaryValue: {
    color: colors.textBright,
  },
  summaryValueIncome: {
    color: colors.primaryBright,
  },
  summaryValueExpense: {
    color: colors.dangerBright,
  },
  expectedCashRow: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.primaryLine,
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 18,
    margin: 0,
  },
  expectedCashLabel: {
    flex: 1,
    color: colors.primaryBright,
    marginRight: 10,
  },
  expectedCashValue: {
    color: colors.primaryBright,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 14,
  },
  registerButton: {
    flex: 1,
    minHeight: 64,
    borderColor: colors.secondaryBright,
  },
  closeButton: {
    flex: 1,
    minHeight: 64,
  },
});
