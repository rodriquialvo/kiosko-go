import { RFValue } from "react-native-responsive-fontsize";
import { standardHeight } from "utils/scaling";

const fontSize = {
  xll_small_8: RFValue(8, standardHeight),
  xl_small_10: RFValue(10, standardHeight),
  x_small_12: RFValue(12, standardHeight),
  small_14: RFValue(14, standardHeight),
  regular_16: RFValue(16, standardHeight),
  x_regular_18: RFValue(18, standardHeight),
  xl_regular_20: RFValue(20, standardHeight),
  large_24: RFValue(24, standardHeight),
  extraLarge_28: RFValue(28, standardHeight),
  extraLarge_30: RFValue(30, standardHeight),
  extra_extra_large_32: RFValue(32, standardHeight),
  extraExtraLarge_40: RFValue(40, standardHeight),
  extraExtraLarge_48: RFValue(48, standardHeight),
  extraExtraLarge_54: RFValue(54, standardHeight),
};

/** Nombres registrados por @expo-google-fonts/montserrat (useFonts) */
const fontFamily = {
  Montserrat_400: "Montserrat_400Regular",
  Montserrat_500: "Montserrat_500Medium",
  Montserrat_600: "Montserrat_600SemiBold",
  Montserrat_700: "Montserrat_700Bold",
  Montserrat_800: "Montserrat_800ExtraBold",
};

export default {
  fontSize,
  fontFamily,
};
