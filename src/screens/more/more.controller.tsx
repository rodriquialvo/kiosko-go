export type MoreOption = {
  id: string;
  title: string;
  description: string;
  icon: MoreIconName;
  variant: "green" | "purple" | "blue" | "yellow" | "pink" | "cyan" | "orange";
  badge?: string;
};

export type MoreSection = {
  id: string;
  title?: string;
  items: MoreOption[];
};

type MoreIconName =
  | "storefront-outline"
  | "account-group-outline"
  | "cube-outline"
  | "tag-outline"
  | "barcode-scan"
  | "chart-line"
  | "chart-pie"
  | "download-outline"
  | "cog-outline"
  | "printer-outline"
  | "cloud-outline"
  | "help-circle-outline"
  | "whatsapp";

const sections: MoreSection[] = [
  {
    id: "business",
    title: "Gestión del negocio",
    items: [
      {
        id: "business-settings",
        title: "Mi negocio",
        description: "Datos y configuración del negocio",
        icon: "storefront-outline",
        variant: "green",
      },
      {
        id: "employees",
        title: "Empleados",
        description: "Gestionar usuarios y permisos",
        icon: "account-group-outline",
        variant: "purple",
      },
      {
        id: "categories",
        title: "Categorías",
        description: "Gestionar categorías de productos",
        icon: "cube-outline",
        variant: "blue",
      },
      {
        id: "products",
        title: "Productos",
        description: "Gestionar productos y precios",
        icon: "tag-outline",
        variant: "yellow",
      },
      {
        id: "scanner",
        title: "Escáner",
        description: "Probar escáner de códigos de barras",
        icon: "barcode-scan",
        variant: "pink",
      },
    ],
  },
  {
    id: "reports",
    title: "Reportes y datos",
    items: [
      {
        id: "reports",
        title: "Reportes",
        description: "Ventas, productos y movimientos",
        icon: "chart-line",
        variant: "green",
      },
      {
        id: "cash-history",
        title: "Historial de cajas",
        description: "Ver cajas cerradas",
        icon: "chart-pie",
        variant: "purple",
      },
      {
        id: "export",
        title: "Exportar datos",
        description: "Descargar información del negocio",
        icon: "download-outline",
        variant: "blue",
      },
    ],
  },
  {
    id: "settings",
    title: "Configuración",
    items: [
      {
        id: "settings",
        title: "Ajustes",
        description: "Preferencias de la aplicación",
        icon: "cog-outline",
        variant: "cyan",
      },
      {
        id: "printing",
        title: "Impresión",
        description: "Configuración de impresoras",
        icon: "printer-outline",
        variant: "orange",
      },
      {
        id: "backup",
        title: "Respaldo",
        description: "Copia de seguridad de datos",
        icon: "cloud-outline",
        variant: "pink",
      },
    ],
  },
  {
    id: "support",
    items: [
      {
        id: "help",
        title: "Centro de ayuda",
        description: "Preguntas frecuentes y ayuda",
        icon: "help-circle-outline",
        variant: "purple",
      },
      {
        id: "whatsapp",
        title: "Contacto y soporte",
        description: "Escribinos por WhatsApp",
        icon: "whatsapp",
        variant: "green",
        badge: "WhatsApp",
      },
    ],
  },
];

export function useMoreController() {
  const handleOpenProfile = () => {};
  const handleOpenOption = (_optionId: string) => {};
  const handleLogout = () => {};

  return {
    sections,
    userName: "Juan Pérez",
    role: "Administrador",
    roleBadge: "Admin",
    handleOpenProfile,
    handleOpenOption,
    handleLogout,
  };
}
