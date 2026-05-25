import { AppTabBar } from "@/components/navigation/app-tab-bar";
import { Tabs } from "expo-router";


export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      />

      <Tabs.Screen
        name="sales"
        options={{
          title: "Ventas",
        }}
      />

      <Tabs.Screen
        name="stock"
        options={{
          title: "Stock",
        }}
      />

      <Tabs.Screen
        name="cash"
        options={{
          title: "Caja",
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "Más",
        }}
      />
    </Tabs>
  );
}