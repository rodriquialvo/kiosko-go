export const MAIN_TABS = [
  { name: "index", title: "Inicio", icon: "home" },
  { name: "benefits", title: "Beneficios", icon: "local-offer" },
  { name: "scanner", title: "", icon: "qr-code-scanner" },
  { name: "news", title: "Noticias", icon: "newspaper" },
  { name: "profile", title: "Perfil", icon: "person" },
] as const;

export type TabName = (typeof MAIN_TABS)[number]["name"];
