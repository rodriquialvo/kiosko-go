import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { ComponentProps } from "react";
import { Pressable, Text, View } from "react-native";
import { colors } from "@/theme/src/theme";

import { styles } from "./app-tab-bar.styles";

type AppTabBarProps = Parameters<
  NonNullable<ComponentProps<typeof Tabs>["tabBar"]>
>[0];

type TabConfig = {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  activeIcon: keyof typeof MaterialIcons.glyphMap;
};

const TAB_CONFIG: Record<string, TabConfig> = {
  home: {
    label: "Inicio",
    icon: "home",
    activeIcon: "home",
  },
  sales: {
    label: "Ventas",
    icon: "shopping-cart",
    activeIcon: "shopping-cart",
  },
  stock: {
    label: "Stock",
    icon: "inventory-2",
    activeIcon: "inventory-2",
  },
  cash: {
    label: "Caja",
    icon: "point-of-sale",
    activeIcon: "point-of-sale",
  },
  more: {
    label: "Más",
    icon: "menu",
    activeIcon: "menu",
  },
};

const TAB_ORDER = ["home", "sales", "stock", "cash", "more"] as const;

export function AppTabBar({ state, descriptors, navigation }: AppTabBarProps) {
  const orderedRoutes = TAB_ORDER.map((routeName) =>
    state.routes.find((route) => route.name === routeName),
  ).filter((route) => route !== undefined);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {orderedRoutes.map((route) => {
          const config = TAB_CONFIG[route.name];

          if (!config) {
            return null;
          }

          const isFocused = state.routes[state.index]?.name === route.name;
          const { options } = descriptors[route.key];

          const handlePress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const handleLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={handlePress}
              onLongPress={handleLongPress}
              style={({ pressed }) => [
                styles.item,
                pressed && styles.itemPressed,
              ]}
            >
              <View style={[styles.iconBox, isFocused && styles.iconBoxActive]}>
                <MaterialIcons
                  name={isFocused ? config.activeIcon : config.icon}
                  size={28}
                  color={isFocused ? colors.primary : colors.textMuted}
                />

                {isFocused ? <View style={styles.activeDot} /> : null}
              </View>

              <Text style={[styles.label, isFocused && styles.labelActive]}>
                {config.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
