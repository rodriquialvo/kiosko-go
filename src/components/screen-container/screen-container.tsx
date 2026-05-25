import { colors } from "@/theme/src/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";
import { styles } from "./screen-container.styles";

const DEFAULT_VERTICAL_PADDING = 36;
const BACKGROUND_DOTS = Array.from({ length: 84 }, (_, index) => index);

type ScreenContainerProps = PropsWithChildren<{
  paddingTop?: number;
  paddingBottom?: number;
  contentStyle?: StyleProp<ViewStyle>;
}>;

export function ScreenContainer({
  children,
  paddingTop = DEFAULT_VERTICAL_PADDING,
  paddingBottom = DEFAULT_VERTICAL_PADDING,
  contentStyle,
}: ScreenContainerProps) {
  return (
    <LinearGradient
      colors={[colors.appBackgroundStart, colors.appBackgroundMid, colors.appBackgroundEnd]}
      style={[styles.gradientContainer, { paddingTop, paddingBottom }, contentStyle]}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
    >
      <View style={styles.greenGlow} />
      <View style={styles.purpleGlow} />
      <View style={styles.topLineOne} />
      <View style={styles.topLineTwo} />
      <View style={styles.bottomDotField}>
        {BACKGROUND_DOTS.map((dot) => (
          <View
            key={dot}
            style={[
              styles.bottomDot,
              dot % 3 === 0 ? styles.bottomDotGreen : styles.bottomDotPurple,
              {
                left: `${(dot % 21) * 4.8}%`,
                bottom: 8 + Math.sin(dot / 4) * 18 + Math.floor(dot / 21) * 16,
              },
            ]}
          />
        ))}
      </View>
      {children}
    </LinearGradient>
  );
}
