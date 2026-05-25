import { colors } from "@/theme/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 24,
  },

  container: {
    minHeight: 82,
    borderRadius: 28,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 12,
  },

  item: {
    flex: 1,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  itemPressed: {
    opacity: 0.75,
  },

  iconBox: {
    width: 42,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },

  iconBoxActive: {
    transform: [{ translateY: -2 }],
  },

  activeDot: {
    position: "absolute",
    top: -3,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  label: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },

  labelActive: {
    color: colors.primary,
    fontWeight: "800",
  },
});
