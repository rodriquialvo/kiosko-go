import { colors } from "@/theme/src/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingTop: 76,
    paddingBottom: 38,
  },
  brandContainer: {
    alignItems: "center",
    marginBottom: 52,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 8,
  },
  brandPrimary: {
    color: colors.textBright,
    letterSpacing: 0,
  },
  brandAccent: {
    color: colors.primaryNeon,
    letterSpacing: 0,
  },
  brandSubtitle: {
    marginTop: -2,
    color: colors.textSoftBright,
    textAlign: "center",
  },
  card: {
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 24,
    padding: 26,
    overflow: "hidden",
  },
  cardGlow: {
    position: "absolute",
    top: -16,
    left: 92,
    right: 92,
    height: 32,
    borderRadius: 40,
    backgroundColor: colors.primaryGlowStrong,
    opacity: 0.58,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginBottom: 30,
  },
  cardIconBox: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: colors.surfaceIcon,
  },
  cardTitleGroup: {
    flex: 1,
    gap: 2,
  },
  cardTitle: {
    color: colors.textBright,
  },
  cardSubtitle: {
    color: colors.textSoftBright,
  },
  formGroup: {
    gap: 18,
  },
  inputContainer: {
    width: "100%",
  },
  inputWrapper: {
    height: 58,
    borderRadius: 14,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.inputOverlay,
    paddingHorizontal: 22,
  },
  inputText: {
    color: colors.inputText,
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 24,
  },
  forgotPassword: {
    color: colors.primaryBright,
  },
  featureContainer: {
    alignItems: "center",
    marginTop: 50,
    gap: 18,
  },
  featureIconsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  featureDivider: {
    width: 1,
    height: 32,
    marginHorizontal: 24,
    backgroundColor: colors.dividerSoft,
  },
  featureLabelsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  featureLabelGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  featureLabel: {
    color: colors.textMutedStrong,
  },
  featureDot: {
    width: 4,
    height: 4,
    marginHorizontal: 12,
    borderRadius: 2,
    backgroundColor: colors.primaryBright,
  },
});
