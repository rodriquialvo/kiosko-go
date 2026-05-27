import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import { SaleSuccessAction, SaleSummaryCard } from "./components";
import { useSaleSuccessController } from "./sale-success.controller";
import { styles } from "./sale-success.styles";

export default function SaleSuccessScreen() {
  const {
    saleNumber,
    total,
    payment,
    change,
    handleViewTicket,
    handleNewSale,
    handleGoHome,
  } = useSaleSuccessController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <View style={styles.statusBlock}>
          <View style={styles.successIconBox}>
            <MaterialCommunityIcons name="check" size={72} color={colors.primaryDark} />
          </View>
          <Text size={28} weight={800} style={styles.title}>
            ¡Venta realizada!
          </Text>
          <Text size={16} weight={600} style={styles.saleNumber}>
            N° de venta: {saleNumber}
          </Text>
        </View>

        <SaleSummaryCard total={total} payment={payment} change={change} />

        <View style={styles.actions}>
          <SaleSuccessAction
            label="Ver ticket"
            icon="receipt-text-outline"
            onPress={handleViewTicket}
          />
          <SaleSuccessAction
            label="Nueva venta"
            icon="cart-outline"
            variant="primary"
            onPress={handleNewSale}
          />
          <SaleSuccessAction
            label="Ir al inicio"
            icon="home-outline"
            onPress={handleGoHome}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
