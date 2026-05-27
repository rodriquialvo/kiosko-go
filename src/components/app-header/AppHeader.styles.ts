import { StyleSheet } from "react-native";
import { Theme } from "@/constants/theme";
import { colors } from "@/theme/src/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  content: {
    paddingBottom: 20,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minWidth: 0,
  },
  centerContent: {
    marginLeft: 12,
    justifyContent: "center",
    flex: 1,
    minWidth: 0,
  },
  centerContentWithoutLeft: {
    marginLeft: 0,
  },
  rightSection: {
    marginLeft: 12,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    color: colors.textBright,
  },
  subtitle: {
    color: colors.textMuted,
    marginTop: 2,
  },
  childrenContainer: {
    marginTop: 16,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: Theme.borderRadius.xl,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    alignItems: "center",
    justifyContent: "center",
  },
});
