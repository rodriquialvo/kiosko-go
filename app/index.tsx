import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { SplashScreen } from "@/components/splash-screen/splash-screen";

const SPLASH_DURATION = 3500; // ms que dura la presentación

export default function Index() {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplashDone(true), SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  // Mostrar splash mientras no haya pasado el tiempo mínimo O todavía está cargando sesión
  if (!splashDone) {
    return <SplashScreen />;
  }

    return <Redirect href="/(auth)/login" />;
  

  // return <Redirect href="/root/ecosystem" />;
  return <Redirect href="/root/(hub)/home" />;
}
