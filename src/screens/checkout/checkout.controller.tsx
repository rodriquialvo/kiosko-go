import { useMemo, useState } from "react";
import { router } from "expo-router";
import { useCart } from "@/features/cart/cart.context";

export type PaymentMethodId = "cash" | "card" | "transfer" | "more";

export type PaymentMethod = {
  id: PaymentMethodId;
  label: string;
  icon: "cash-register" | "credit-card-outline" | "cellphone" | "dots-horizontal";
};

const paymentMethods: PaymentMethod[] = [
  { id: "cash", label: "Efectivo", icon: "cash-register" },
  { id: "card", label: "Tarjeta", icon: "credit-card-outline" },
  { id: "transfer", label: "Transferencia", icon: "cellphone" },
  { id: "more", label: "Más métodos", icon: "dots-horizontal" },
];

function formatPrice(value: number): string {
  return `$${value.toLocaleString("es-AR")}`;
}

export function useCheckoutController() {
  const { summary, clearCart } = useCart();
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState<PaymentMethodId>("cash");
  const [cashReceived, setCashReceived] = useState("10000");

  const selectedPaymentMethod = paymentMethods.find((item) => item.id === selectedPaymentMethodId) ?? paymentMethods[0];
  const receivedAmount = Number(cashReceived.replace(/\D/g, ""));
  const changeAmount = Math.max(receivedAmount - summary.totalAmount, 0);
  const isCashPayment = selectedPaymentMethodId === "cash";
  const canConfirmSale = summary.quantity > 0 && (!isCashPayment || receivedAmount >= summary.totalAmount);

  const receivedAmountLabel = useMemo(() => formatPrice(receivedAmount), [receivedAmount]);
  const changeLabel = useMemo(() => formatPrice(changeAmount), [changeAmount]);

  const handleGoBack = () => {
    router.back();
  };

  const handleConfirmSale = () => {
    if (!canConfirmSale) {
      return;
    }

    clearCart();
    router.replace({
      pathname: "/sale-success",
      params: {
        total: summary.total,
        payment: selectedPaymentMethod.label,
        change: changeLabel,
      },
    });
  };

  return {
    paymentMethods,
    selectedPaymentMethodId,
    totalLabel: summary.total,
    receivedAmountLabel,
    changeLabel,
    isCashPayment,
    canConfirmSale,
    setSelectedPaymentMethodId,
    setCashReceived,
    handleGoBack,
    handleConfirmSale,
  };
}
