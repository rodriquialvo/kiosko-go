import { router, useLocalSearchParams } from "expo-router";

type SaleSuccessParams = {
  total?: string;
  payment?: string;
  change?: string;
};

export function useSaleSuccessController() {
  const params = useLocalSearchParams<SaleSuccessParams>();

  const saleNumber = "#000125";
  const total = params.total ?? "$0";
  const payment = params.payment ?? "Efectivo";
  const change = params.change ?? "$0";

  const handleViewTicket = () => {};

  const handleNewSale = () => {
    router.replace("/(tabs)/sales");
  };

  const handleGoHome = () => {
    router.replace("/(tabs)/home");
  };

  return {
    saleNumber,
    total,
    payment,
    change,
    handleViewTicket,
    handleNewSale,
    handleGoHome,
  };
}
