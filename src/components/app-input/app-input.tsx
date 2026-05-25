import { inputTheme } from "@/constants/theme";
import typography from "@/constants/typography";
import { Feather } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  Pressable,
  Text as RNText,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Text from "../Text/Text";
import { AppInputProps } from "./types";

export default function AppInput({
  label,
  helperText,
  errorText,
  leftIcon,
  rightIcon,
  secure = false,
  clearable = false,
  variant = "outline",
  size = "lg",
  fullWidth = true,
  disabled = false,
  editable,
  multiline = false,
  numberOfLines = 1,
  value,
  containerStyle,
  inputWrapperStyle,
  inputStyle,
  iconColor: customIconColor,
  onRightIconPress,
  onClear,
  placeholder,
  ...props
}: AppInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const themeSize = inputTheme.sizes[size];
  const hasError = !!errorText;
  const isDisabled = disabled || editable === false;
  const hasValue = typeof value === "string" && value.length > 0;

  const secureTextEntry = secure && !showPassword;

  const wrapperStyle = useMemo<ViewStyle>(() => {
    const base: ViewStyle = {
      minHeight: multiline ? 120 : themeSize.height,
      borderRadius: themeSize.radius,
      paddingHorizontal: themeSize.px,
      borderWidth: 1,
      flexDirection: "row",
      alignItems: multiline ? "flex-start" : "center",
      backgroundColor: inputTheme.colors.background,
      borderColor: inputTheme.colors.border,
      opacity: isDisabled ? 0.7 : 1,
      paddingTop: multiline ? 16 : 0,
    };

    if (variant === "outline") {
      base.backgroundColor = inputTheme.colors.background;
      base.borderColor = hasError
        ? inputTheme.colors.error
        : isFocused
          ? inputTheme.colors.borderFocus
          : inputTheme.colors.border;
    }

    if (variant === "filled") {
      base.backgroundColor = isDisabled
        ? inputTheme.colors.disabledBg
        : inputTheme.colors.backgroundFilled;
      base.borderColor = hasError
        ? inputTheme.colors.error
        : isFocused
          ? inputTheme.colors.borderFocus
          : "transparent";
    }

    if (variant === "ghost") {
      base.backgroundColor = "transparent";
      base.borderColor = hasError
        ? inputTheme.colors.error
        : isFocused
          ? inputTheme.colors.borderFocus
          : "#E5E7EB";
    }

    if (isDisabled) {
      base.backgroundColor = inputTheme.colors.disabledBg;
    }

    return base;
  }, [themeSize, multiline, variant, hasError, isFocused, isDisabled]);

  const textStyle = useMemo<TextStyle>(
    () => ({
      flex: 1,
      backgroundColor: "transparent",
      fontFamily: typography.fontFamily.Montserrat_400,
      fontSize: themeSize.fontSize,
      color: isDisabled ? inputTheme.colors.disabledText : inputTheme.colors.text,
      textAlignVertical: multiline ? "top" : "center",
      paddingVertical: 0,
    }),
    [themeSize, isDisabled, multiline],
  );

  const useCustomPlaceholder =
    typeof placeholder === "string" && placeholder.length > 0 && !hasValue && !isFocused;

  const placeholderTextColor =
    typeof props.placeholderTextColor === "string"
      ? props.placeholderTextColor
      : inputTheme.colors.placeholder;

  const placeholderOverlayStyle = useMemo<TextStyle>(
    () => ({
      fontFamily: typography.fontFamily.Montserrat_400,
      fontSize: themeSize.placeholderFontSize,
      color: placeholderTextColor,
    }),
    [themeSize, placeholderTextColor],
  );

  const iconColor = hasError ? inputTheme.colors.error : customIconColor ?? inputTheme.colors.icon;

  const renderRight = () => {
    if (secure) {
      return (
        <Pressable
          onPress={() => setShowPassword((prev) => !prev)}
          hitSlop={10}
          style={styles.rightSlot}
        >
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={themeSize.iconSize}
            color={iconColor}
          />
        </Pressable>
      );
    }

    if (clearable && hasValue && !isDisabled) {
      return (
        <Pressable onPress={onClear} hitSlop={10} style={styles.rightSlot}>
          <Feather name="x-circle" size={themeSize.iconSize} color={iconColor} />
        </Pressable>
      );
    }

    if (rightIcon) {
      return (
        <Pressable
          onPress={onRightIconPress}
          disabled={!onRightIconPress}
          hitSlop={10}
          style={styles.rightSlot}
        >
          <Feather name={rightIcon} size={themeSize.iconSize} color={iconColor} />
        </Pressable>
      );
    }

    return null;
  };

  return (
    <View style={[styles.container, fullWidth && styles.fullWidth, containerStyle]}>
      {!!label && (
        <Text
          size={14}
          weight={600}
          style={[
            styles.label,
            { fontSize: themeSize.labelSize, color: inputTheme.colors.label },
            hasError && { color: inputTheme.colors.error },
            isDisabled && { color: inputTheme.colors.disabledText },
          ]}
        >
          {label}
        </Text>
      )}

      <View style={[wrapperStyle, inputWrapperStyle]}>
        {leftIcon ? (
          <View style={[styles.leftSlot, { marginRight: themeSize.gap }]}>
            <Feather name={leftIcon} size={themeSize.iconSize} color={iconColor} />
          </View>
        ) : null}

        <View style={styles.inputSlot}>
          {useCustomPlaceholder ? (
            <View
              style={[
                styles.placeholderLayer,
                multiline ? styles.placeholderLayerMultiline : styles.placeholderLayerSingle,
              ]}
              pointerEvents="none"
            >
              <RNText style={placeholderOverlayStyle}>{placeholder}</RNText>
            </View>
          ) : null}
          <TextInput
            {...props}
            accessibilityLabel={
              props.accessibilityLabel ??
              (typeof placeholder === "string" && placeholder.length > 0 ? placeholder : undefined)
            }
            placeholder={
              typeof placeholder === "string" && placeholder.length > 0 ? "" : placeholder
            }
            value={value}
            editable={!isDisabled}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={placeholderTextColor}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            style={[textStyle, styles.inputOnTop, inputStyle]}
          />
        </View>

        {renderRight()}
      </View>

      {!!errorText ? (
        <Text size={12} weight={500} style={[styles.metaText, { color: inputTheme.colors.error }]}>
          {errorText}
        </Text>
      ) : !!helperText ? (
        <Text size={12} weight={500} style={[styles.metaText, { color: inputTheme.colors.helper }]}>
          {helperText}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 18,
  },
  fullWidth: {
    // width: "100%",
  },
  label: {
    marginBottom: 10,
    // fontWeight: "700",
  },
  leftSlot: {
    justifyContent: "center",
    alignItems: "center",
  },
  rightSlot: {
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  metaText: {
    // marginTop: 8,
    // fontSize: 13,
    fontWeight: "500",
  },
  inputSlot: {
    flex: 1,
    position: "relative",
    minWidth: 0,
  },
  inputOnTop: {
    zIndex: 1,
  },
  placeholderLayer: {
    ...StyleSheet.absoluteFill,
    zIndex: 0,
  },
  placeholderLayerSingle: {
    justifyContent: "center",
  },
  placeholderLayerMultiline: {
    justifyContent: "flex-start",
    paddingTop: 2,
  },
});
