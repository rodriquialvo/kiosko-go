import { colors } from "@/theme/src/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
    backgroundColor: colors.appBackgroundStart,
    overflow: "hidden",
    paddingHorizontal: 18,
    paddingBottom: 200

  },
  greenGlow: {
    position: "absolute",
    left: -120,
    bottom: 48,
    width: 330,
    height: 150,
    borderRadius: 180,
    backgroundColor: colors.primaryGlow,
    transform: [{ rotate: "16deg" }],
  },
  purpleGlow: {
    position: "absolute",
    right: -140,
    bottom: 150,
    width: 260,
    height: 180,
    borderRadius: 180,
    backgroundColor: colors.secondaryGlow,
    transform: [{ rotate: "-26deg" }],
  },
  topLineOne: {
    position: "absolute",
    top: 142,
    right: -42,
    width: 188,
    height: 122,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 86,
    borderColor: colors.primaryLine,
    transform: [{ rotate: "-22deg" }],
  },
  topLineTwo: {
    position: "absolute",
    top: 174,
    right: -52,
    width: 158,
    height: 100,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 76,
    borderColor: colors.primaryLineSoft,
    transform: [{ rotate: "-22deg" }],
  },
  bottomDotField: {
    position: "absolute",
    right: 0,
    bottom: 28,
    left: 0,
    height: 160,
  },
  bottomDot: {
    position: "absolute",
    width: 2,
    height: 2,
    borderRadius: 1,
  },
  bottomDotGreen: {
    backgroundColor: colors.primaryDot,
  },
  bottomDotPurple: {
    backgroundColor: colors.secondaryDot,
  },
});
