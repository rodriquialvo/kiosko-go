import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View, type StyleProp, type ViewStyle } from "react-native";
import { colors } from "@/theme/src/theme";
import { styles } from "./search-bar.styles";

type SearchBarProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
};

export function SearchBar({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  accessibilityLabel,
}: SearchBarProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons name="magnify" size={26} color={colors.textMuted} />
      <TextInput
        accessibilityLabel={accessibilityLabel ?? placeholder}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        style={styles.input}
      />
    </View>
  );
}
