import { StyleSheet } from "react-native";
import { colors } from "@/theme/src/theme";

export const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 54,
  },
  statusBlock: {
    alignItems: "center",
    marginBottom: 40,
  },
  successIconBox: {
    width: 138,
    height: 138,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 69,
    backgroundColor: colors.successSoft,
    marginBottom: 28,
  },
  title: {
    color: colors.textBright,
    textAlign: "center",
  },
  saleNumber: {
    color: colors.textSoft,
    textAlign: "center",
    marginTop: 12,
  },
  summaryCard: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 22,
    marginBottom: 32,
  },
  summaryRow: {
    minHeight: 42,
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
  actions: {
    gap: 14,
  },
  actionButton: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.surfaceGlass,
  },
  actionButtonPrimary: {
    borderColor: colors.secondaryBright,
    backgroundColor: colors.secondaryLight,
  },
  actionButtonText: {
    color: colors.secondaryBright,
    marginLeft: 12,
  },
  actionButtonTextPrimary: {
    color: colors.white,
  },
});
