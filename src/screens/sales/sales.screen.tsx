import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { CartSummary, CategoryChip, ProductCard } from "./components";
import { useSalesController } from "./sales.controller";
import { styles } from "./sales.styles";

export default function SalesScreen() {
  const {
    categories,
    products,
    productQuantities,
    selectedCategoryId,
    cartSummary,
    setSelectedCategoryId,
    handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    handleAddProductToCart,
    handleOpenCart,
    handleOpenHistory,
  } = useSalesController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text size={24} weight={400} style={styles.title}>
            Nueva venta
          </Text>
          <View style={styles.headerActions}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Ver carrito"
              onPress={handleOpenCart}
              style={styles.headerButton}
            >
              <MaterialCommunityIcons name="cart-outline" size={24} color={colors.secondaryBright} />
              <Text size={12} weight={800} style={styles.headerButtonText}>
                Carrito
              </Text>
              <View style={styles.cartBadge}>
                <Text size={10} weight={800} style={styles.cartBadgeText}>
                  {String(cartSummary.quantity)}
                </Text>
              </View>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Ver historial"
              onPress={handleOpenHistory}
              style={styles.headerButton}
            >
              <MaterialCommunityIcons name="clock-outline" size={22} color={colors.textSoft} />
              <Text size={12} weight={800} style={styles.headerButtonText}>
                Historial
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.searchBox}>
          <MaterialCommunityIcons name="magnify" size={26} color={colors.textMuted} />
          <Text size={14} weight={500} style={styles.searchText}>
            Buscar producto por nombre o código
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((item) => (
            <CategoryChip
              key={item.id}
              item={item}
              isSelected={item.id === selectedCategoryId}
              onPress={setSelectedCategoryId}
            />
          ))}
        </ScrollView>

        <ScrollView
          contentContainerStyle={styles.productList}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.productGrid}>
            {products.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                quantity={productQuantities[item.id] ?? 0}
                onIncrease={handleIncreaseProductQuantity}
                onDecrease={handleDecreaseProductQuantity}
                onAddToCart={handleAddProductToCart}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.cartSummaryWrapper}>
        <CartSummary
          quantity={cartSummary.quantity}
          total={cartSummary.total}
          onPress={handleOpenCart}
        />
      </View>
    </ScreenContainer>
  );
}
