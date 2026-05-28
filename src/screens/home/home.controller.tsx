import type { ComponentProps } from "react";
import type { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/src/theme";
import { router } from "expo-router";

export type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

export type SummaryCard = {
  title: string;
  amount: string;
  trend: string;
  icon: IconName;
  accentColor: string;
  iconBackgroundColor: string;
};

export type QuickAccessItem = {
  title: string;
  subtitle: string;
  icon: IconName;
  backgroundColor: string;
  borderColor: string;
  onPress?: () => void;
};

export type AlertItem = {
  title: string;
  description: string;
  icon: IconName;
  iconBackgroundColor: string;
};

export type TopProduct = {
  rank: number;
  name: string;
  units: string;
};

export type TabItem = {
  label: string;
  icon: IconName;
  isActive: boolean;
};

export function useHomeController() {
  const currentCash = {
    amount: "$ 152.680",
    label: "Efectivo en caja",
    status: "Abierta",
  };

  const summaryCards: SummaryCard[] = [
    {
      title: "Ventas hoy",
      amount: "$ 245.680",
      trend: "12% vs ayer",
      icon: "chart-line-variant",
      accentColor: colors.primaryBright,
      iconBackgroundColor: colors.primarySurface,
    },
    {
      title: "Ganancia hoy",
      amount: "$ 82.430",
      trend: "8% vs ayer",
      icon: "currency-usd",
      accentColor: colors.secondaryBright,
      iconBackgroundColor: colors.secondarySurface,
    },
  ];

  const quickAccessItems: QuickAccessItem[] = [
    {
      title: "Vender",
      subtitle: "Nueva venta",
      icon: "cart-outline",
      backgroundColor: colors.primarySurfaceStrong,
      borderColor: colors.primaryBright,
      onPress: () => router.push("/(tabs)/sales")
    },

    {
      title: "Stock",
      subtitle: "Controlar faltantes",
      icon: "warehouse",
      backgroundColor: colors.warningSurfaceStrong,
      borderColor: colors.warning,
      onPress: () => router.push("/(tabs)/stock")
    },
    {
      title: "Caja",
      subtitle: "Ver movimientos",
      icon: "cash-register",
      backgroundColor: colors.infoSurfaceStrong,
      borderColor: colors.info,
      onPress: () => router.push("/(tabs)/cash")
    },
  ];

  const alerts: AlertItem[] = [
    {
      title: "6 productos con bajo stock",
      description: "Revisá el inventario para evitar faltantes.",
      icon: "alert-outline",
      iconBackgroundColor: colors.warningBright,
    },
    {
      title: "3 productos sin stock",
      description: "Estos productos no se pueden vender.",
      icon: "close",
      iconBackgroundColor: colors.dangerBright,
    },
  ];

  const topProducts: TopProduct[] = [
    { rank: 1, name: "Fernet Branca", units: "23 uds" },
    { rank: 2, name: "Coca Cola 500ml", units: "21 uds" },
    { rank: 3, name: "Cerveza Quilmes", units: "18 uds" },
  ];

  const handleViewCashDetails = () => {};
  const handleViewAllQuickAccess = () => {};
  const handleViewAllAlerts = () => {};
  const handleViewReports = () => {};

  return {
    userName: "Cacho",
    currentDateLabel: "Domingo 12 de Mayo",
    currentCash,
    summaryCards,
    quickAccessItems,
    alerts,
    topProducts,
    handleViewCashDetails,
    handleViewAllQuickAccess,
    handleViewAllAlerts,
    handleViewReports,
  };
}
