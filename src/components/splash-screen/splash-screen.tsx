import { Image } from "expo-image";
import { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { images } from "../../constants/images";

const { width: W, height: H } = Dimensions.get("window");

interface BlobConfig {
  size: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  color: string;
}

const BLOBS: BlobConfig[] = [
  // Superior derecha → abajo izquierda
  {
    size: W * 1.1,
    startX: W * 0.3,
    startY: -H * 0.2,
    endX: -W * 0.8,
    endY: H * 0.7,
    duration: 10000,
    delay: 0,
    color: "#1a71ff",
  },
  // Medio izquierda → arriba derecha
  {
    size: W * 0.9,
    startX: -W * 0.4,
    startY: H * 0.2,
    endX: W * 0.7,
    endY: -H * 0.3,
    duration: 12000,
    delay: 200,
    color: "#0f5be6",
  },
  // Abajo derecha → arriba izquierda
  {
    size: W * 1.2,
    startX: W * 0.4,
    startY: H * 0.6,
    endX: -W * 0.9,
    endY: -H * 0.5,
    duration: 14000,
    delay: 400,
    color: "#004ee6",
  },
  // Abajo izquierda → arriba derecha
  {
    size: W * 0.75,
    startX: -W * 0.3,
    startY: H * 0.55,
    endX: W * 0.8,
    endY: -H * 0.2,
    duration: 11000,
    delay: 300,
    color: "#1a71ff",
  },
];

function AnimatedBlob({ config }: { config: BlobConfig }) {
  const translateX = useRef(new Animated.Value(config.startX)).current;
  const translateY = useRef(new Animated.Value(config.startY)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Fade + scale in
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0.85,
        duration: 1200,
        delay: config.delay,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        delay: config.delay,
        useNativeDriver: true,
        friction: 6,
        tension: 40,
      }),
    ]).start();

    // Loop de movimiento (mirror: va y vuelve)
    const moveX = Animated.sequence([
      Animated.timing(translateX, {
        toValue: config.endX,
        duration: config.duration,
        delay: config.delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: config.startX,
        duration: config.duration,
        useNativeDriver: true,
      }),
    ]);

    const moveY = Animated.sequence([
      Animated.timing(translateY, {
        toValue: config.endY,
        duration: config.duration * 1.15,
        delay: config.delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: config.startY,
        duration: config.duration * 1.15,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(moveX).start();
    Animated.loop(moveY).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.blob,
        {
          width: config.size,
          height: config.size,
          borderRadius: config.size / 2,
          backgroundColor: config.color,
          opacity,
          transform: [{ translateX }, { translateY }, { scale }],
        },
      ]}
    />
  );
}

export function SplashScreen() {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 900,
        delay: 800,
        useNativeDriver: true,
      }),
      Animated.spring(logoScale, {
        toValue: 1,
        delay: 800,
        useNativeDriver: true,
        friction: 5,
        tension: 50,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {BLOBS.map((config, i) => (
        <AnimatedBlob key={i} config={config} />
      ))}

      <Animated.View
        style={[styles.logoContainer, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}
      >
        {/* <Image source={images.logo} style={styles.logo} contentFit="contain" /> */}
        <Text style={styles.logoText}>{'NEW_CONNECT_TITLE'}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007BFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  blob: {
    position: "absolute",
  },
  logoContainer: {
    zIndex: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Montserrat_900Black",
    letterSpacing: -0.5,
  },
});
