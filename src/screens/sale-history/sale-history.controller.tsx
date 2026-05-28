import { useMemo, useState } from "react";
import { router } from "expo-router";

type SaleHistoryStatus = "paid" | "cancelled";
type SaleDateOptionId = "all" | "today" | "yesterday" | "week";

export type SaleHistoryFilter = {
  id: "all" | SaleHistoryStatus;
  label: string;
};

export type SaleHistoryDateOption = {
  id: SaleDateOptionId;
  label: string;
};

export type SaleHistoryProduct = {
  id: string;
  name: string;
  quantity: number;
  unitPrice: string;
  subtotal: string;
};

export type SaleHistoryItem = {
  id: string;
  ticketNumber: string;
  dateOptionId: Exclude<SaleDateOptionId, "all" | "week">;
  dateLabel: string;
  timeLabel: string;
  itemCount: number;
  amount: number;
  total: string;
  paymentMethod: string;
  status: SaleHistoryStatus;
  products: SaleHistoryProduct[];
};

const filters: SaleHistoryFilter[] = [
  { id: "all", label: "Todos" },
  { id: "paid", label: "Cobradas" },
  { id: "cancelled", label: "Anuladas" },
];

const dateOptions: SaleHistoryDateOption[] = [
  { id: "all", label: "Todas las fechas" },
  { id: "today", label: "Hoy" },
  { id: "yesterday", label: "Ayer" },
  { id: "week", label: "Últimos 7 días" },
];

const salesHistory: SaleHistoryItem[] = [
  {
    id: "sale-001",
    ticketNumber: "#000124",
    dateOptionId: "today",
    dateLabel: "Hoy",
    timeLabel: "10:42",
    itemCount: 3,
    amount: 4600,
    total: "$4.600",
    paymentMethod: "Efectivo",
    status: "paid",
    products: [
      { id: "coca-cola-500", name: "Coca Cola 500ml", quantity: 2, unitPrice: "$900", subtotal: "$1.800" },
      { id: "lays-clasicas", name: "Papas Lay's Clásicas", quantity: 1, unitPrice: "$1.200", subtotal: "$1.200" },
      { id: "snickers-50", name: "Snickers 50g", quantity: 2, unitPrice: "$800", subtotal: "$1.600" },
    ],
  },
  {
    id: "sale-002",
    ticketNumber: "#000123",
    dateOptionId: "today",
    dateLabel: "Hoy",
    timeLabel: "09:18",
    itemCount: 2,
    amount: 9000,
    total: "$9.000",
    paymentMethod: "Transferencia",
    status: "paid",
    products: [
      { id: "fernet-750", name: "Fernet Branca 750ml", quantity: 1, unitPrice: "$7.500", subtotal: "$7.500" },
      { id: "agua-500", name: "Agua Mineral 500ml", quantity: 2, unitPrice: "$600", subtotal: "$1.200" },
    ],
  },
  {
    id: "sale-003",
    ticketNumber: "#000122",
    dateOptionId: "yesterday",
    dateLabel: "Ayer",
    timeLabel: "18:33",
    itemCount: 4,
    amount: 5000,
    total: "$5.000",
    paymentMethod: "Débito",
    status: "paid",
    products: [
      { id: "quilmes-473", name: "Cerveza Quilmes 473ml", quantity: 2, unitPrice: "$1.500", subtotal: "$3.000" },
      { id: "baggio-200", name: "Jugo Baggio 200ml", quantity: 1, unitPrice: "$700", subtotal: "$700" },
      { id: "lays-clasicas", name: "Papas Lay's Clásicas", quantity: 1, unitPrice: "$1.200", subtotal: "$1.200" },
    ],
  },
  {
    id: "sale-004",
    ticketNumber: "#000121",
    dateOptionId: "yesterday",
    dateLabel: "Ayer",
    timeLabel: "16:05",
    itemCount: 1,
    amount: 2800,
    total: "$2.800",
    paymentMethod: "Efectivo",
    status: "cancelled",
    products: [
      { id: "marlboro-box-20", name: "Marlboro Box 20", quantity: 1, unitPrice: "$2.800", subtotal: "$2.800" },
    ],
  },
];

function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString("es-AR")}`;
}

export function useSaleHistoryController() {
  const [selectedFilterId, setSelectedFilterId] = useState<SaleHistoryFilter["id"]>("all");
  const [selectedDateOptionId, setSelectedDateOptionId] = useState<SaleDateOptionId>("all");
  const [selectedSaleId, setSelectedSaleId] = useState<string | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const filteredHistory = useMemo(() => {
    return salesHistory.filter((sale) => {
      const matchesStatus = selectedFilterId === "all" || sale.status === selectedFilterId;
      const matchesDate =
        selectedDateOptionId === "all" ||
        selectedDateOptionId === "week" ||
        sale.dateOptionId === selectedDateOptionId;

      return matchesStatus && matchesDate;
    });
  }, [selectedDateOptionId, selectedFilterId]);

  const paidHistory = useMemo(() => {
    return filteredHistory.filter((sale) => sale.status === "paid");
  }, [filteredHistory]);

  const selectedDateOption = dateOptions.find((item) => item.id === selectedDateOptionId) ?? dateOptions[0];
  const selectedSale = salesHistory.find((sale) => sale.id === selectedSaleId) ?? null;

  const totalTickets = paidHistory.length;
  const totalAmount = formatCurrency(
    paidHistory.reduce((currentTotal, sale) => currentTotal + sale.amount, 0),
  );

  const handleGoBack = () => {
    router.back();
  };

  const handleToggleDatePicker = () => {
    setIsDatePickerOpen((currentValue) => !currentValue);
  };

  const handleSelectDateOption = (dateOptionId: SaleDateOptionId) => {
    setSelectedDateOptionId(dateOptionId);
    setIsDatePickerOpen(false);
  };

  const handleOpenSale = (saleId: string) => {
    setSelectedSaleId(saleId);
  };

  const handleCloseSale = () => {
    setSelectedSaleId(null);
  };

  return {
    dateOptions,
    filteredHistory,
    filters,
    isDatePickerOpen,
    selectedDateOption,
    selectedFilterId,
    selectedSale,
    totalAmount,
    totalTickets,
    handleCloseSale,
    setSelectedFilterId,
    handleGoBack,
    handleOpenSale,
    handleSelectDateOption,
    handleToggleDatePicker,
  };
}
