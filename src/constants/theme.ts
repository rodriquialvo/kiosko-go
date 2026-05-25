export const Colors = {
  text: "#1F2937",
  textSoft: "#6B7280",
  textMuted: "#9CA3AF",

  border: "#D1D5DB",
  borderStrong: "#9CA3AF",

  background: "#FFFFFF",
  backgroundSoft: "#F3F4F6",
  backgroundMuted: "#F9FAFB",

  primary: "#374151",
  danger: "#DC2626",
  success: "#16A34A",
  warning: "#D97706",

  disabledBg: "#F3F4F6",
  disabledText: "#9CA3AF",
  placeholder: "#9CA3AF",

  //blue
  blue_dark: "#1E3A5F",
  cyan_blue: "#007BFF",
  cyan_blue_dark: "#002347",
  cyan_blue_dark_2: "#364153",
  cyan_blue_dark_3: "#003D82",
  cyan_blue_light: "#EFF6FF",
  cyan_blue_light_2: "#3592FA",
  cyan_blue_light_3: "#D7EAFF",
  cyan_blue_light_4: "#ECFEFF",
  slateBlueDark: "#31506F",
  cyan_blue_2: "#3B82F6",
  cyan_blue_3: "#2C75FF",
  cyan_blue_4: "#DBEAFE",
  cyan_blue_5: "#0092B8",
  cyan_blue_6: "#144579",
  cyan_blue_7: "#338AE7",
  cyan_blue_8: "#BEDBFF",

  //violet
  violet: "#8B5CF6",

  //black
  black: "#101828",
  black_2: "#1E2939",

  //white
  white: "#FFFFFF",

  //gray
  gray: "#4A5565",
  gray_2: "#E5E7EB",
  gray_3: "#99A1AF",
  gray_4: "#C8C8C8",
  gray_5: "#475569",
  gray_6: "#D1D5DC",
  gray_7: "#6A7282",
  gray_8: "#4D657E",

  //orange
  orange: "#F59E0B",
  orange_2: "#FFC521",

  //green
  green: "#00C48C",
  green_2: "#00A076",
  green_3: "#00C48C26",
  green_4: "#84CC16",
  green_5: "#008236",
  green_6: "#DCFCE7",
  green_7: "#F0FDF4",
  green_8: "#00C950",
  green_9: "#00A63E",
  green_10: "#36FF86",

  //yellow
  yellow: "#FEFCE8",
  yellow_2: "#FFF085",
  yellow_3: "#FDC700",
  yellow_4: "#FEFCE8",
  yellow_5: "#FFD700",
  yellow_6: "#E6DB64",

  //brown
  brown: "#894B00",
  brown_2: "#D08700",
  brown_3: "#FFD6A8",

  //red
  red: "#FB2C36",
  red_2: "#BB0000",
  red_3: "#CA3500",

  backgroundButtonsHeader: "rgba(255,255,255,0.18)",
};

export const Theme = {
  colors: Colors,
  fonts: {
    display: "Montserrat",
    body: "Montserrat",
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    full: 9999,
  },
};

export const headerTheme = {
  backgroundColor: Colors.cyan_blue,
  textFont: Theme.fonts.display,
  textSize: 24,
  textWeight: "bold",
  textAlign: "center",
  textTransform: "uppercase",
  textDecoration: "none",
  textShadow: "none",
  titleStyle: {
    paddingLeft: 16,
  },
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const input_typography = {
  labelSm: 14,
  labelMd: 15,
  labelLg: 16,

  inputSm: 15,
  inputMd: 16,
  inputLg: 18,

  /** Placeholder más chico que el texto escrito (Montserrat en app-input) */
  placeholderSm: 12,
  placeholderMd: 14,
  placeholderLg: 15,

  helper: 13,
};

export const inputTheme = {
  colors: {
    text: Colors.text,
    label: Colors.text,
    helper: Colors.textSoft,
    placeholder: Colors.placeholder,
    border: Colors.border,
    borderFocus: Colors.borderStrong,
    background: Colors.background,
    backgroundFilled: Colors.backgroundSoft,
    error: Colors.danger,
    disabledBg: Colors.disabledBg,
    disabledText: Colors.disabledText,
    icon: Colors.textMuted,
  },

  sizes: {
    sm: {
      height: 12,
      radius: Theme.borderRadius.md,
      fontSize: input_typography.inputSm,
      placeholderFontSize: input_typography.placeholderSm,
      labelSize: input_typography.labelSm,
      iconSize: 18,
      px: spacing.lg,
      gap: spacing.md,
    },
    md: {
      height: 32,
      radius: Theme.borderRadius.lg,
      fontSize: input_typography.inputMd,
      placeholderFontSize: input_typography.placeholderMd,
      labelSize: input_typography.labelMd,
      iconSize: 20,
      px: spacing.lg,
      gap: spacing.md,
    },
    lg: {
      height: 48,
      radius: Theme.borderRadius.xl,
      fontSize: input_typography.inputLg,
      placeholderFontSize: input_typography.placeholderMd,
      labelSize: input_typography.labelLg,
      iconSize: 18,
      px: spacing.lg,
      gap: spacing.sm,
    },
  },
};
