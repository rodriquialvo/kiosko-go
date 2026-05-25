import { MaterialIcons } from "@expo/vector-icons";

export type Category = "All" | "Gym" | "Pharmacy" | "Sports Gear" | "Nutrition";

export interface Benefit {
  id: string;
  merchantName: string;
  category: Category;
  description: string;
  discount: string;
  image: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  color: string;
  fullDescription?: string;
  terms?: string[];
  code?: string;
}

export const CATEGORIES: {
  id: Category;
  label: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
}[] = [
  { id: "All", label: "Todos" },
  { id: "Gym", label: "Gimnasios", icon: "fitness-center" },
  { id: "Pharmacy", label: "Farmacias", icon: "local-hospital" },
  { id: "Sports Gear", label: "Deportes", icon: "sports-basketball" },
  { id: "Nutrition", label: "Nutrición", icon: "restaurant" },
];

export const BENEFITS: Benefit[] = [
  {
    id: "1",
    merchantName: "Iron Pump Gym",
    category: "Gym",
    description: "Downtown Branch • 1.2km",
    discount: "20% OFF",
    icon: "fitness-center",
    color: "#e0f2fe",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUlmb3kYMXGYHm5002XNO1qivYB0jxTO4BAjzinHh_VAo4XAQMqv82iCB60d2V5IkhnaU_4fBCvMpMlYnVIv4PiuQ7FDpe9QNnX_JDoZI-30XVzIPJiYul5hrcivTEDmAYIbO83hZD1Wwol5Y5HdkAf7CpL8bvz-w0dCdSeQ14lvE_yJ8Mp7DltmGS_LEUQhjxgo4JmaEkud0NNzmsHZ9urXXIGL6bDeD9c5nXLUd4xkigsggeyM-0l8FXsDodcu8cYb3twGb2y5T-",
    fullDescription:
      "Elevate your fitness journey at Iron Pump Gym. We offer state-of-the-art equipment, professional trainers, and a motivating atmosphere to help you crush your goals. As a federated athlete, enjoy an exclusive 20% discount on all monthly memberships and access to our VIP recovery zone.",
    terms: [
      "Valid for new members or renewals.",
      "Must present digital athlete ID at front desk.",
      "Not cumulative with other promotions.",
      "Offer expires on December 31st, 2024.",
    ],
    code: "GYM-2024",
  },
  {
    id: "2",
    merchantName: "Nike Store",
    category: "Sports Gear",
    description: "Indumentaria y Calzado",
    discount: "15% OFF",
    color: "#fce7f3",
    icon: "checkroom",
    image: "",
  },
  {
    id: "3",
    merchantName: "HealthPlus",
    category: "Pharmacy",
    description: "Vitaminas y Suplementos",
    discount: "2x1",
    color: "#dcfce7",
    icon: "local-pharmacy",
    image: "",
  },
  {
    id: "4",
    merchantName: "Fuel Bar",
    category: "Nutrition",
    description: "Batidos y Snacks",
    discount: "Bebida Gratis",
    color: "#ffedd5",
    icon: "local-drink",
    image: "",
  },
  {
    id: "5",
    merchantName: "Metro Fitness",
    category: "Gym",
    description: "Válido nuevos socios",
    discount: "Mes Gratis",
    color: "#f3e8ff",
    icon: "directions-run",
    image: "",
  },
  {
    id: "6",
    merchantName: "ProLift Gear",
    category: "Sports Gear",
    description: "Solo Online",
    discount: "10% OFF",
    color: "#fee2e2",
    icon: "sports-mma",
    image: "",
  },
];
