import typography from "@/constants/typography";
import { FC, useMemo } from "react";
import { Text as RNText } from "react-native";
import styles from "./Text.styles";
import { TextProps } from "./interfaces";

export const fontFamilyMap: { [key: number]: string } = {
  400: typography.fontFamily.Montserrat_400,
  500: typography.fontFamily.Montserrat_500,
  600: typography.fontFamily.Montserrat_600,
  700: typography.fontFamily.Montserrat_700,
  800: typography.fontFamily.Montserrat_800,
};

const fontSizeMap: { [key: number]: number } = {
  8: typography.fontSize.xll_small_8,
  10: typography.fontSize.xl_small_10,
  12: typography.fontSize.x_small_12,
  14: typography.fontSize.small_14,
  16: typography.fontSize.regular_16,
  18: typography.fontSize.x_regular_18,
  20: typography.fontSize.xl_regular_20,
  24: typography.fontSize.large_24,
  28: typography.fontSize.extraLarge_28,
  30: typography.fontSize.extraLarge_30,
  32: typography.fontSize.extra_extra_large_32,
  40: typography.fontSize.extraExtraLarge_40,
  48: typography.fontSize.extraExtraLarge_48,
  54: typography.fontSize.extraExtraLarge_54,
};

export const lineHeightMap: { [key: number]: number } = {
  8: 10,
  10: 14,
  12: 14,
  14: 20,
  16: 24,
  18: 24,
  20: 28,
  24: 32,
  28: 36,
  30: 40,
  32: 44,
  40: 48,
  48: 52,
  54: 56,
};

const DEFAULT_SIZE = 16;
const DEFAULT_WEIGHT = 400;
/** Reduce el tamaño de fuente un 10 % respecto a la escala tipográfica. */
const FONT_SIZE_SCALE = 0.9;

const Text: FC<TextProps> = ({ size, weight, style, ...props }) => {
  const dynamicStyle = useMemo(() => {
    const selectedFontFamily = fontFamilyMap[weight] || fontFamilyMap[DEFAULT_WEIGHT];
    const selectedFontSize = fontSizeMap[size] || fontSizeMap[DEFAULT_SIZE];
    const selectedLineHeight = lineHeightMap[size] || lineHeightMap[DEFAULT_SIZE];

    return {
      fontFamily: selectedFontFamily,
      fontSize: selectedFontSize * FONT_SIZE_SCALE,
      lineHeight: selectedLineHeight,
    };
  }, [size, weight]);

  const accessibilityLabel = useMemo(() => {
    return props.children && typeof props.children === "string"
      ? `Text '${props.children}'`
      : undefined;
  }, [props.children]);

  return (
    <RNText
      {...props}
      style={[styles.textDefault, dynamicStyle, style]}
      accessibilityLabel={accessibilityLabel}
    >
      {props.children}
    </RNText>
  );
};

export default Text;
