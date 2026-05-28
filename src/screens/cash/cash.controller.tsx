import { useState } from "react";

export type CashStatus = "open" | "closed";

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

export type LastClosedCash = {
  openedAt: string;
  closedAt: string;
  employee: string;
  totalSales: string;
  cashSales: string;
  expectedCash: string;
  countedCash: string;
  difference: string;
};

export type OpenCashForm = {
  initialFund: string;
  responsible: string;
  observation: string;
};

export type OpenCashFormField = keyof OpenCashForm;

export type CloseCashForm = {
  countedCash: string;
  responsible: string;
  observation: string;
};

export type CloseCashFormField = keyof CloseCashForm;

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

const lastClosedCash: LastClosedCash = {
  openedAt: "08:00 hs",
  closedAt: "Hoy 14:30 hs",
  employee: "Juan Pérez",
  totalSales: "$170.680",
  cashSales: "$85.700",
  expectedCash: "$135.200",
  countedCash: "$134.700",
  difference: "-$500",
};

const defaultOpenCashForm: OpenCashForm = {
  initialFund: "$50.000",
  responsible: "Juan Pérez",
  observation: "",
};

const defaultCloseCashForm: CloseCashForm = {
  countedCash: "$201.680",
  responsible: "Juan Pérez",
  observation: "",
};

export function useCashController() {
  const [cashStatus, setCashStatus] = useState<CashStatus>("closed");
  const [isOpenCashModalVisible, setIsOpenCashModalVisible] = useState(false);
  const [isCloseCashModalVisible, setIsCloseCashModalVisible] = useState(false);
  const [lastClosedCashState, setLastClosedCashState] = useState<LastClosedCash>(lastClosedCash);
  const [openCashForm, setOpenCashForm] = useState<OpenCashForm>(defaultOpenCashForm);
  const [closeCashForm, setCloseCashForm] = useState<CloseCashForm>(defaultCloseCashForm);

  const handleOpenHistory = () => {};
  const handleOpenMetric = (_metricId: string) => {};
  const handleOpenMovement = (_movementId: string) => {};
  const handleRegisterMovement = () => {};
  const handleCloseCash = () => {
    setIsCloseCashModalVisible(true);
  };
  const handleOpenCashModal = () => {
    setIsOpenCashModalVisible(true);
  };
  const handleCloseOpenCashModal = () => {
    setIsOpenCashModalVisible(false);
  };
  const handleChangeOpenCashField = (field: OpenCashFormField, value: string) => {
    setOpenCashForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };
  const handleCloseCloseCashModal = () => {
    setIsCloseCashModalVisible(false);
  };
  const handleChangeCloseCashField = (field: CloseCashFormField, value: string) => {
    setCloseCashForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };
  const handleConfirmOpenCash = () => {
    setCashStatus("open");
    setIsOpenCashModalVisible(false);
  };
  const handleConfirmCloseCash = () => {
    setLastClosedCashState({
      openedAt: "08:00 hs",
      closedAt: "Hoy 15:10 hs",
      employee: closeCashForm.responsible,
      totalSales: "$152.380",
      cashSales: "$85.700",
      expectedCash: "$202.180",
      countedCash: closeCashForm.countedCash,
      difference: "-$500",
    });
    setCashStatus("closed");
    setIsCloseCashModalVisible(false);
  };

  return {
    cashStatus,
    closeCashForm,
    currentCash: "$152.680",
    expectedCash: "$202.180",
    isCashOpen: cashStatus === "open",
    isCloseCashModalVisible,
    isOpenCashModalVisible,
    lastClosedCash: lastClosedCashState,
    openedAt: "Abierta hoy 08:00 hs",
    openCashForm,
    metrics,
    movements,
    summaryRows,
    handleChangeCloseCashField,
    handleChangeOpenCashField,
    handleCloseCloseCashModal,
    handleCloseOpenCashModal,
    handleConfirmCloseCash,
    handleConfirmOpenCash,
    handleOpenHistory,
    handleOpenCashModal,
    handleOpenMetric,
    handleOpenMovement,
    handleRegisterMovement,
    handleCloseCash,
  };
}
