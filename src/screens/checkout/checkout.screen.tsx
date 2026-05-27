import { ScrollView, View } from "react-native";
import { AppHeader } from "@/components/app-header/AppHeader";
import { PrimaryButton } from "@/components/primary-button/primary-button";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import Text from "@/components/Text/Text";
import {
  CashReceivedField,
  ChangeSummary,
  CheckoutTotalCard,
  PaymentMethodRow,
} from "./components";
import { useCheckoutController } from "./checkout.controller";
import { styles } from "./checkout.styles";

export default function CheckoutScreen() {
  const {
    paymentMethods,
    selectedPaymentMethodId,
    totalLabel,
    receivedAmountLabel,
    changeLabel,
    isCashPayment,
    canConfirmSale,
    setSelectedPaymentMethodId,
    setCashReceived,
    handleGoBack,
    handleConfirmSale,
  } = useCheckoutController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <AppHeader
          title="Cobro"
          subtitle="Elegí cómo vas a cerrar la venta"
          showBack
          onBack={handleGoBack}
          containerStyle={styles.header}
          paddedBottom={24}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <CheckoutTotalCard total={totalLabel} />

          <View style={styles.methodsSection}>
            <Text size={18} weight={800} style={styles.sectionTitle}>
              Método de pago
            </Text>
            <View style={styles.methodsList}>
              {paymentMethods.map((item) => (
                <PaymentMethodRow
                  key={item.id}
                  item={item}
                  isSelected={item.id === selectedPaymentMethodId}
                  onPress={setSelectedPaymentMethodId}
                />
              ))}
            </View>
          </View>

          {isCashPayment ? (
            <>
              <CashReceivedField
                value={receivedAmountLabel.replace("$", "").trim()}
                formattedValue={receivedAmountLabel}
                onChangeText={setCashReceived}
              />
              <ChangeSummary change={changeLabel} />
            </>
          ) : null}
        </ScrollView>
      </View>

      <View style={styles.confirmWrapper}>
        <PrimaryButton
          title="Confirmar venta"
          disabled={!canConfirmSale}
          onPress={handleConfirmSale}
          accessibilityLabel="Confirmar venta"
          rightIcon="arrow-right"
        />
      </View>
    </ScreenContainer>
  );
}
