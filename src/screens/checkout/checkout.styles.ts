import { StyleSheet } from "react-native";
import { spacing } from "@/constants/theme";
import { colors } from "@/theme/src/theme";

export const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  header: {
    marginBottom: 8,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  totalCard: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.surfaceGlass,
    padding: 20,
    marginBottom: 28,
  },
  totalLabel: {
    color: colors.textMuted,
  },
  totalValue: {
    color: colors.textBright,
    marginTop: 12,
  },
  methodsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: colors.textBright,
  },
  methodsList: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    overflow: "hidden",
    marginTop: 14,
  },
  methodRow: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerSoft,
    paddingHorizontal: 18,
  },
  methodRowSelected: {
    borderWidth: 1.5,
    borderColor: colors.secondaryBright,
    backgroundColor: colors.secondarySoft,
  },
  methodIconBox: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: colors.surfaceIcon,
    marginRight: 16,
  },
  methodIconBoxSelected: {
    backgroundColor: colors.secondarySoft,
  },
  methodLabel: {
    color: colors.textSoft,
  },
  methodLabelSelected: {
    color: colors.textBright,
  },
  cashSection: {
    marginBottom: 28,
  },
  cashInputBox: {
    minHeight: 84,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.surfaceGlass,
    paddingHorizontal: 22,
    marginTop: 14,
  },
  cashPrefix: {
    color: colors.textBright,
    marginRight: spacing.md,
  },
  cashInput: {
    flex: 1,
    color: colors.textBright,
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 28,
    minHeight: 70,
  },
  changeSection: {
    marginBottom: 24,
  },
  changeValue: {
    color: colors.primaryBright,
    marginTop: 12,
  },
  confirmWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
});
