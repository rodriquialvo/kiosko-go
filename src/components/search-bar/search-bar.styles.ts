import { StyleSheet } from "react-native";
import { colors } from "@/theme/src/theme";

export const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    minHeight: 54,
    color: colors.textBright,
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    marginLeft: 12,
    paddingVertical: 0,
  },
});
