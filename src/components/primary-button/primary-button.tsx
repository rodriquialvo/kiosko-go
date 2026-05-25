import { colors } from "@/theme/src/theme/colors";
import type { IconName } from "@/components/app-input/types";
import { Feather } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { Pressable, View, type StyleProp, type ViewStyle } from "react-native";
import Text from "../Text/Text";
import { styles } from "./primary-button.styles";

type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
  type?: "primary" | "secondary" | "dashed";
  leftIcon?: ReactNode | IconName | null;
  rightIcon?: ReactNode | IconName | null;
};

function textStyleKey(type: Props["type"]) {
  if (type === "primary") return "textPrimary" as const;
  if (type === "secondary") return "textSecondary" as const;
  return "textDashed" as const;
}

function featherColor(type: NonNullable<Props["type"]>, disabled?: boolean): string {
  if (disabled) return colors.textDisabled;
  if (type === "primary") return colors.textInverse;
  if (type === "secondary") return colors.primaryBright;
  return colors.textMutedStrong;
}

function resolveIcon(
  type: NonNullable<Props["type"]>,
  icon: Props["leftIcon"],
  disabled?: boolean,
  isRight?: boolean,
): ReactNode | null {
  if (type === "dashed") {
    if (icon === null) return null;

    if (icon === undefined && !isRight) {
      return <Feather name="upload" size={20} color={featherColor(type, disabled)} />;
    }

    if (typeof icon === "string") {
      return <Feather name={icon as IconName} size={20} color={featherColor(type, disabled)} />;
    }

    return icon ?? null;
  }

  if (icon == null) return null;

  if (typeof icon === "string") {
    return <Feather name={icon as IconName} size={20} color={featherColor(type, disabled)} />;
  }

  return icon;
}

export function PrimaryButton({
  title,
  onPress,
  disabled,
  accessibilityLabel,
  style,
  type = "primary",
  leftIcon,
  rightIcon,
}: Props) {
  const leftIconEl = resolveIcon(type, leftIcon, disabled, false);
  const rightIconEl = resolveIcon(type, rightIcon, disabled, true);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        styles[type],
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {leftIconEl && <View style={styles.leftIcon}>{leftIconEl}</View>}

      <Text
        size={18}
        weight={700}
        style={[
          styles.text,
          styles[textStyleKey(type)],
          disabled && styles.textDisabled,
        ]}
      >
        {title}
      </Text>

      {rightIconEl && <View style={styles.rightIcon}>{rightIconEl}</View>}
    </Pressable>
  );
}
