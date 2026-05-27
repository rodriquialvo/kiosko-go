import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, View } from "react-native";
import { AppHeader } from "@/components/app-header/AppHeader";
import { PrimaryButton } from "@/components/primary-button/primary-button";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import { colors } from "@/theme/src/theme";
import { CartItemCard, EmptyCart, OrderSummary } from "./components";
import { useCartController } from "./cart.controller";
import { styles } from "./cart.styles";

export default function CartScreen() {
  const {
    items,
    summary,
    handleGoBack,
    handleIncreaseProduct,
    handleDecreaseProduct,
    handleRemoveProduct,
    handleClearCart,
    handleCheckout,
  } = useCartController();

  const hasItems = items.length > 0;

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <AppHeader
          title="Carrito"
          subtitle="Revisá los productos antes de cobrar"
          showBack
          onBack={handleGoBack}
          containerStyle={styles.header}
          paddedBottom={24}
          rightComponent={
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Vaciar carrito"
              disabled={!hasItems}
              onPress={handleClearCart}
              style={[styles.clearButton, !hasItems && styles.clearButtonDisabled]}
            >
              <MaterialCommunityIcons name="trash-can-outline" size={22} color={colors.dangerBright} />
            </Pressable>
          }
        />

        {hasItems ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          >
            {items.map((item) => (
              <CartItemCard
                key={item.product.id}
                item={item}
                onIncrease={handleIncreaseProduct}
                onDecrease={handleDecreaseProduct}
                onRemove={handleRemoveProduct}
              />
            ))}

            <OrderSummary quantity={summary.quantity} total={summary.total} />
          </ScrollView>
        ) : (
          <EmptyCart />
        )}
      </View>

      <View style={styles.checkoutWrapper}>
        <PrimaryButton
          title="Continuar al cobro"
          disabled={!hasItems}
          onPress={handleCheckout}
          accessibilityLabel="Continuar al cobro"
          rightIcon="arrow-right"
        />
      </View>
    </ScreenContainer>
  );
}
