import { spacing, Theme } from "@/constants/theme";
import { theme } from "@/theme/src/theme";
import { colors } from "@/theme/src/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 54,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  greeting: {
    color: colors.textBright,
  },
  dateText: {
    color: colors.textMuted,
  },
  notificationButton: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.surfaceGlass,
  },
  notificationDot: {
    position: "absolute",
    top: 16,
    right: 20,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primaryBright,
  },
  cashCard: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 156,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.primaryLine,
    backgroundColor: colors.primarySoft,
    padding: spacing.sm,
    marginBottom: 16,
    justifyContent:"space-between"
  },
  cashIconBox: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 41,
    backgroundColor: colors.primarySurface,
    padding: spacing.sm
  },
  cashTextGroup: {
    // flex: 1,
    gap: spacing.sm
  },
  cashAmount: {
    color: colors.textBright,
  },
  cashActions: {
    alignItems: "flex-end",
    gap: 30,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.primaryLine,
    backgroundColor: colors.primarySoft,
    padding: spacing.sm

  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primaryBright,
    marginRight: 8,
  },
  statusText: {
    color: colors.primaryBright,
  },
  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.primaryLine,
    padding: spacing.sm
  },
  detailsButtonText: {
    color: colors.primaryBright,
  },
  summaryGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
  summaryCard: {
    flex: 1,
    minHeight: 150,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 18,
  },
  summaryIconBox: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    marginBottom: 12,
  },
  summaryTextGroup: {
    gap: 8,
  },
  summaryArrow: {
    position: "absolute",
    right: 16,
    bottom: 18,
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: colors.primarySoft,
  },
  mutedText: {
    color: colors.textMuted,
  },
  amountText: {
    color: colors.textBright,
  },
  positiveText: {
    color: colors.primaryBright,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    color: colors.textBright,
  },
  sectionAction: {
    color: colors.primaryBright,
  },
  quickAccessGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 30,
  },
  quickAccessCard: {
    flex: 1,
    minHeight: 166,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 10,
  },
  quickAccessTitle: {
    color: colors.white,
    textAlign: "center",
    marginTop: 18,
  },
  quickAccessSubtitle: {
    color: colors.textSoft,
    textAlign: "center",
    marginTop: 2,
  },
  panel: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    paddingHorizontal: 24,
    marginBottom: 28,
  },
  alertRow: {
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
  },
  alertIconBox: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Theme.borderRadius.full,
    marginRight: 18,
    padding: spacing.sm
  },
  alertTextGroup: {
    flex: 1,
    gap: 4,
  },
  listTitle: {
    color: colors.textBright,
  },
  dividedRow: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerSoft,
  },
  productRow: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
  },
  rankBadge: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.primarySurface,
    marginRight: 22,
  },
  rankText: {
    color: colors.primaryBright,
  },
  productName: {
    flex: 1,
    color: colors.textBright,
  },
  productUnits: {
    color: colors.textMuted,
  },
  bottomNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 22,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlassStrong,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 16,
  },
  bottomNavigationItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  activeTabDot: {
    position: "absolute",
    top: -8,
    alignSelf: "center",
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.primaryBright,
  },
  bottomNavigationLabel: {
    textAlign: "center",
  },
});
