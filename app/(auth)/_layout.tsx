// app/root/(auth)/_layout.tsx
import { Stack } from "expo-router";
import { optionsHeaderDefault } from "../_layout";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{...optionsHeaderDefault, headerShown:false}} />
    </Stack>
  );
}
