import { StyleSheet } from "react-native";
import { spacing, Theme } from "@/constants/theme";
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
  headerActions: {
    flexDirection: "row",
    gap: 10,
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorderStrong,
    backgroundColor: colors.surfaceGlass,
    padding: spacing.sm,
  },
  headerButtonText: {
    color: colors.textBright,
    marginLeft: 6,
  },
  cartBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    minWidth: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Theme.borderRadius.full,
    backgroundColor: colors.primaryBright,
  },
  cartBadgeText: {
    color: colors.white,
  },
  searchBar: {
    marginBottom: 18,
  },

  categories: {
    flexGrow: 0,
    height: 44,
    marginBottom: 18,
  },
  categoriesContent: {
    alignItems: "center",
    gap: 10,
  },
  categoryChip: {
    minHeight: 36,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: Theme.borderRadius.xxl,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    paddingHorizontal: 16,
  },
  categoryChipSelected: {
    borderColor: colors.primaryBright,
    backgroundColor: colors.primarySurfaceStrong,
  },
  categoryChipText: {
    color: colors.textSoft,
  },
  categoryChipTextSelected: {
    color: colors.white,
  },
  productList: {
    paddingBottom: 124,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  productCard: {
    width: "48%",
    minHeight: 292,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.cardBorder,
    backgroundColor: colors.surfaceGlass,
    padding: 12,
    justifyContent: "space-between",
  },
  productImageBox: {
    height: 104,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: colors.surfaceIcon,
    marginBottom: 12,
    overflow: "hidden",
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: Theme.borderRadius.xxl
  },
  productEmoji: {
    textAlign: "center",
  },
  productInfo: {
    minWidth: 0,
    alignItems: "center",
  },
  productName: {
    color: colors.textBright,
    minHeight: 40,
    textAlign: "center",
  },
  productStock: {
    color: colors.textMuted,
    marginTop: 4,
  },
  productPrice: {
    color: colors.textBright,
    marginTop: 6,
  },
  quantitySelector: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.primaryLineSoft,
    backgroundColor: colors.surfaceGlassStrong,
    overflow: "hidden",
    padding: 3,
    marginTop: 12,
  },
  quantityButton: {
    width: 36,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    backgroundColor: colors.primarySurfaceStrong,
  },
  quantityButtonDisabled: {
    opacity: 0.38,
  },
  quantityValue: {
    flex: 1,
    color: colors.white,
    textAlign: "center",
  },
  addToCartButton: {
    minHeight: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    backgroundColor: colors.primaryBright,
    marginTop: 10,
  },
  addToCartButtonDisabled: {
    backgroundColor: colors.surfaceStrong,
    opacity: 0.72,
  },
  addToCartButtonText: {
    color: colors.textInverse,
  },
  addToCartButtonTextDisabled: {
    color: colors.textMuted,
  },
  cartSummaryWrapper: {
    position: "absolute",
    right: 20,
    bottom: 18,
    left: 20,
  },
  cartSummary: {
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: colors.primarySurface,
    paddingHorizontal: 16,
  },
  cartIconBox: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: colors.primarySoft,
    marginRight: 14,
  },
  cartIconBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    minWidth: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.primaryBright,
  },
  cartIconBadgeText: {
    color: colors.white,
  },
  cartSummaryText: {
    flex: 1,
  },
  cartQuantity: {
    color: colors.textBright,
  },
  cartAction: {
    color: colors.textSoft,
    marginTop: 2,
  },
  cartTotalBox: {
    alignItems: "flex-end",
    marginRight: 8,
  },
  cartTotalLabel: {
    color: colors.textBright,
  },
  cartTotal: {
    color: colors.primaryBright,
  },
});
