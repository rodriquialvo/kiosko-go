import { colors } from "@/theme/src/theme/colors";
import { StyleSheet } from "react-native";
import { verticalModerateScale } from "utils/scaling";

const shadowElevated = {
  shadowColor: colors.primaryBright,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.35,
  shadowRadius: 18,
  elevation: 4,
};

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 0,
  },
  primary: {
    minHeight: verticalModerateScale(64),
    borderRadius: 14,
    backgroundColor: colors.primaryBright,
    ...shadowElevated,
  },
  secondary: {
    minHeight: verticalModerateScale(64),
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.inputOverlay,
  },
  dashed: {
    minHeight: verticalModerateScale(56),
    paddingVertical: verticalModerateScale(14),
    paddingHorizontal: 20,
    borderRadius: 14,
    backgroundColor: colors.inputOverlay,
    borderWidth: 1.5,
    borderColor: colors.cardBorderStrong,
    borderStyle: "dashed",
  },
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    opacity: 0.62,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  text: {
    textAlign: "center",
  },
  textPrimary: {
    color: colors.textInverse,
  },
  textSecondary: {
    color: colors.primaryBright,
  },
  textDashed: {
    color: colors.textMutedStrong,
  },
  textDisabled: {
    color: colors.textDisabled,
  },
});
