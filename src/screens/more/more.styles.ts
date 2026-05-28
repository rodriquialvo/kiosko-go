import { StyleSheet } from "react-native";
import { colors } from "@/theme/src/theme";

export const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  header: {
    marginBottom: 0,
  },
  scrollContent: {
    paddingBottom: 132,
  },
  profileCard: {
    minHeight: 112,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 18,
    marginBottom: 24,
  },
  avatarBox: {
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 38,
    backgroundColor: colors.secondaryLight,
    marginRight: 18,
  },
  profileTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  profileName: {
    color: colors.textBright,
  },
  profileRoleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  profileRole: {
    color: colors.textSoft,
  },
  roleBadge: {
    minHeight: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.secondarySoft,
    paddingHorizontal: 8,
    marginLeft: 10,
  },
  roleBadgeText: {
    color: colors.secondaryBright,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: colors.textBright,
    marginBottom: 10,
  },
  sectionCard: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    overflow: "hidden",
  },
  optionRow: {
    minHeight: 78,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  optionRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dividerSoft,
  },
  optionIconBox: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginRight: 16,
  },
  iconBoxGreen: {
    backgroundColor: colors.primarySoft,
  },
  iconBoxPurple: {
    backgroundColor: colors.secondarySoft,
  },
  iconBoxBlue: {
    backgroundColor: colors.infoSoft,
  },
  iconBoxYellow: {
    backgroundColor: colors.warningSoft,
  },
  iconBoxPink: {
    backgroundColor: colors.dangerSoft,
  },
  iconBoxCyan: {
    backgroundColor: colors.infoSoft,
  },
  iconBoxOrange: {
    backgroundColor: colors.warningSoft,
  },
  optionTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  optionTitle: {
    color: colors.textBright,
  },
  optionDescription: {
    color: colors.textMuted,
    marginTop: 4,
  },
  optionBadge: {
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  optionBadgeText: {
    color: colors.primaryBright,
    marginLeft: 5,
  },
  logoutButton: {
    minHeight: 74,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.secondaryBright,
    backgroundColor: colors.surfaceGlass,
    marginTop: 2,
  },
  logoutText: {
    color: colors.secondaryBright,
    marginLeft: 12,
  },
});
