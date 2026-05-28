import { useMemo, useState } from "react";
import { router } from "expo-router";

export type StockHistoryDateFilterId = "today" | "yesterday" | "week" | "custom";
export type StockHistoryTypeFilterId = "all" | "incoming" | "sale" | "adjustment" | "manual_out";
export type StockHistoryMovementType =
  | "incoming"
  | "sale"
  | "adjustment"
  | "product_created"
  | "manual_out"
  | "correction";

export type StockHistoryDateFilter = {
  id: StockHistoryDateFilterId;
  label: string;
};

export type StockHistoryTypeFilter = {
  id: StockHistoryTypeFilterId;
  label: string;
};

export type StockHistorySummary = {
  id: string;
  title: string;
  value: string;
  variant: "incoming" | "outgoing" | "adjustment";
};

export type StockHistoryMovement = {
  id: string;
  type: StockHistoryMovementType;
  typeLabel: string;
  productName: string;
  productCode: string;
  quantityLabel: string;
  previousStock: number;
  newStock: number;
  dateFilterId: Exclude<StockHistoryDateFilterId, "custom">;
  dateTimeLabel: string;
  actorLabel: string;
  reasonLabel: string;
};

const dateFilters: StockHistoryDateFilter[] = [
  { id: "today", label: "Hoy" },
  { id: "yesterday", label: "Ayer" },
  { id: "week", label: "7 días" },
  { id: "custom", label: "Fecha" },
];

const typeFilters: StockHistoryTypeFilter[] = [
  { id: "all", label: "Todos" },
  { id: "incoming", label: "Ingresos" },
  { id: "sale", label: "Ventas" },
  { id: "adjustment", label: "Ajustes" },
  { id: "manual_out", label: "Egresos" },
];

const summary: StockHistorySummary[] = [
  { id: "incoming", title: "Ingresos", value: "+120 unidades", variant: "incoming" },
  { id: "outgoing", title: "Egresos por ventas", value: "-86 unidades", variant: "outgoing" },
  { id: "adjustments", title: "Ajustes manuales", value: "4 movimientos", variant: "adjustment" },
];

const movements: StockHistoryMovement[] = [
  {
    id: "movement-001",
    type: "incoming",
    typeLabel: "Ingreso de mercadería",
    productName: "Coca Cola 500ml",
    productCode: "7790895001017",
    quantityLabel: "+12 unidades",
    previousStock: 32,
    newStock: 44,
    dateFilterId: "today",
    dateTimeLabel: "Hoy, 10:15",
    actorLabel: "Juan Pérez",
    reasonLabel: "Compra #000128",
  },
  {
    id: "movement-002",
    type: "sale",
    typeLabel: "Venta realizada",
    productName: "Fernet Branca 750ml",
    productCode: "7790290001102",
    quantityLabel: "-1 unidad",
    previousStock: 8,
    newStock: 7,
    dateFilterId: "today",
    dateTimeLabel: "Hoy, 11:02",
    actorLabel: "Venta #000125",
    reasonLabel: "Venta asociada a caja abierta",
  },
  {
    id: "movement-003",
    type: "adjustment",
    typeLabel: "Ajuste manual",
    productName: "Papas Lay's Clásicas",
    productCode: "7790310002210",
    quantityLabel: "+5 unidades",
    previousStock: 6,
    newStock: 11,
    dateFilterId: "today",
    dateTimeLabel: "Hoy, 12:30",
    actorLabel: "Juan Pérez",
    reasonLabel: "Corrección de stock",
  },
  {
    id: "movement-004",
    type: "manual_out",
    typeLabel: "Egreso manual",
    productName: "Agua Mineral 500ml",
    productCode: "7798062541150",
    quantityLabel: "-3 unidades",
    previousStock: 40,
    newStock: 37,
    dateFilterId: "today",
    dateTimeLabel: "Hoy, 14:10",
    actorLabel: "Juan Pérez",
    reasonLabel: "Producto dañado",
  },
  {
    id: "movement-005",
    type: "product_created",
    typeLabel: "Producto creado",
    productName: "Jugo Baggio 200ml",
    productCode: "7790036002005",
    quantityLabel: "+18 unidades",
    previousStock: 0,
    newStock: 18,
    dateFilterId: "yesterday",
    dateTimeLabel: "Ayer, 09:40",
    actorLabel: "María Gómez",
    reasonLabel: "Alta de producto",
  },
  {
    id: "movement-006",
    type: "correction",
    typeLabel: "Corrección",
    productName: "Cerveza Quilmes 473ml",
    productCode: "7792798004731",
    quantityLabel: "-2 unidades",
    previousStock: 17,
    newStock: 15,
    dateFilterId: "yesterday",
    dateTimeLabel: "Ayer, 17:20",
    actorLabel: "Juan Pérez",
    reasonLabel: "Diferencia detectada en conteo",
  },
];

function matchesTypeFilter(
  movement: StockHistoryMovement,
  selectedTypeFilterId: StockHistoryTypeFilterId,
): boolean {
  if (selectedTypeFilterId === "all") return true;
  if (selectedTypeFilterId === "adjustment") {
    return movement.type === "adjustment" || movement.type === "correction";
  }

  return movement.type === selectedTypeFilterId;
}

export function useStockHistoryController() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedDateFilterId, setSelectedDateFilterId] =
    useState<StockHistoryDateFilterId>("today");
  const [selectedTypeFilterId, setSelectedTypeFilterId] =
    useState<StockHistoryTypeFilterId>("all");

  const filteredMovements = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    return movements.filter((movement) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        movement.productName.toLowerCase().includes(normalizedSearch) ||
        movement.productCode.includes(normalizedSearch) ||
        movement.reasonLabel.toLowerCase().includes(normalizedSearch);
      const matchesDate =
        selectedDateFilterId === "week" ||
        selectedDateFilterId === "custom" ||
        movement.dateFilterId === selectedDateFilterId;

      return matchesSearch && matchesDate && matchesTypeFilter(movement, selectedTypeFilterId);
    });
  }, [searchValue, selectedDateFilterId, selectedTypeFilterId]);

  const handleGoBack = () => {
    router.back();
  };

  return {
    dateFilters,
    filteredMovements,
    searchValue,
    selectedDateFilterId,
    selectedTypeFilterId,
    summary,
    typeFilters,
    setSearchValue,
    setSelectedDateFilterId,
    setSelectedTypeFilterId,
    handleGoBack,
  };
}
