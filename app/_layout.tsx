// app/_layout.tsx
import { MaterialIcons } from "@expo/vector-icons";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { router, Stack } from "expo-router";
import { ExtendedStackNavigationOptions } from "expo-router/build/layouts/StackClient";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { CartProvider } from "@/features/cart/cart.context";
import { images } from "../src/constants/images";
import { Colors, headerTheme } from "../src/constants/theme";

SplashScreen.preventAutoHideAsync();

const defaultHeaderScreenOptions = {
  headerShown: false as const,
  title: 'NEW_CONNECT_TITLE',
  headerStyle: headerTheme,
  headerLeft: ({ canGoBack }: { canGoBack: boolean }) => (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, paddingLeft: 8 }}>
      {canGoBack && (
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <MaterialIcons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
      )}
      {/* <Image source={images.logoId} style={{ height: 27, width: 32 }} /> */}
    </View>
  ),
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    color: Colors.white,
  },
};

export const optionsHeaderDefault: ExtendedStackNavigationOptions = defaultHeaderScreenOptions;

export const optionsTabHeaderDefault: BottomTabNavigationOptions = defaultHeaderScreenOptions;

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={optionsHeaderDefault} />
        <Stack.Screen name="cart" options={{ headerShown: false }} />
        <Stack.Screen name="checkout" options={{ headerShown: false }} />
        <Stack.Screen name="sale-history" options={{ headerShown: false }} />
        <Stack.Screen name="sale-success" options={{ headerShown: false }} />
        <Stack.Screen name="stock-history" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
}
