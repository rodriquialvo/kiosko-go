import { Colors, Theme } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  content: {
    paddingTop: 18,
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
  },
  centerContent: {
    marginLeft: 12,
    justifyContent: "center",
    flexShrink: 1,
  },
  rightSection: {
    marginLeft: 12,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    color: Colors.white,
  },
  subtitle: {
    color: Colors.white,
    marginTop: 2,
  },
  childrenContainer: {
    marginTop: 16,
  },
  iconButton: {
    width: 56,
    height: 56,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Colors.backgroundButtonsHeader,
    alignItems: "center",
    justifyContent: "center",
  },
});
