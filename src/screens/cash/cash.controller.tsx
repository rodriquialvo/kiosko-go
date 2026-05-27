export type CashMetric = {
  id: string;
  title: string;
  amount: string;
  icon: "cash" | "credit-card-outline" | "swap-horizontal";
  variant: "cash" | "card" | "transfer";
};

export type CashMovement = {
  id: string;
  title: string;
  description: string;
  amount: string;
  type: "income" | "expense";
  icon: "arrow-up-circle-outline" | "plus-circle-outline" | "arrow-down-circle-outline" | "archive-arrow-down-outline";
};

export type CashSummaryRow = {
  id: string;
  label: string;
  value: string;
  variant: "neutral" | "income" | "expense";
};

const metrics: CashMetric[] = [
  {
    id: "cash-sales",
    title: "Ventas en efectivo",
    amount: "$85.700",
    icon: "cash",
    variant: "cash",
  },
  {
    id: "card-sales",
    title: "Ventas con tarjeta",
    amount: "$42.210",
    icon: "credit-card-outline",
    variant: "card",
  },
  {
    id: "transfers",
    title: "Transferencias",
    amount: "$24.470",
    icon: "swap-horizontal",
    variant: "transfer",
  },
];

const movements: CashMovement[] = [
  {
    id: "initial",
    title: "Fondo inicial",
    description: "Hoy, 08:00",
    amount: "$50.000",
    type: "income",
    icon: "arrow-up-circle-outline",
  },
  {
    id: "manual-income",
    title: "Ingreso manual",
    description: "Hoy, 11:15 - Ingreso de efectivo",
    amount: "$8.000",
    type: "income",
    icon: "plus-circle-outline",
  },
  {
    id: "expense",
    title: "Egreso",
    description: "Hoy, 12:40 - Compra de insumos",
    amount: "-$2.500",
    type: "expense",
    icon: "arrow-down-circle-outline",
  },
  {
    id: "provider",
    title: "Pago proveedor",
    description: "Hoy, 14:30 - Proveedor ABC",
    amount: "-$6.000",
    type: "expense",
    icon: "archive-arrow-down-outline",
  },
];

const summaryRows: CashSummaryRow[] = [
  { id: "sales", label: "Total ventas", value: "$152.380", variant: "neutral" },
  { id: "income", label: "Ingresos", value: "$58.000", variant: "income" },
  { id: "expenses", label: "Egresos", value: "-$8.500", variant: "expense" },
];

export function useCashController() {
  const handleOpenHistory = () => {};
  const handleOpenMetric = (_metricId: string) => {};
  const handleOpenMovement = (_movementId: string) => {};
  const handleRegisterMovement = () => {};
  const handleCloseCash = () => {};

  return {
    currentCash: "$152.680",
    expectedCash: "$202.180",
    openedAt: "Abierta hoy 08:00 hs",
    metrics,
    movements,
    summaryRows,
    handleOpenHistory,
    handleOpenMetric,
    handleOpenMovement,
    handleRegisterMovement,
    handleCloseCash,
  };
}
