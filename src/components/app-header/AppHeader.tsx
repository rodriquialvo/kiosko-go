import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import type { ReactNode } from "react";
import { Pressable, View, type StyleProp, type TextStyle, type ViewStyle } from "react-native";
import { colors } from "@/theme/src/theme";
import Text from "../Text/Text";
import { styles } from "./AppHeader.styles";

type Props = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  paddedBottom?: number;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
};

export const AppHeader = ({
  title,
  subtitle,
  showBack = false,
  onBack = () => router.back(),
  leftComponent,
  rightComponent,
  children,
  containerStyle,
  contentStyle,
  backgroundColor = colors.transparent,
  paddedBottom = 20,
  subtitleStyle,
  titleStyle,
}: Props) => {
  const renderLeft = (): ReactNode => {
    if (leftComponent) return leftComponent;

    if (showBack) {
      return (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Volver"
          onPress={onBack}
          style={styles.iconButton}
        >
          <MaterialCommunityIcons name="chevron-left" size={30} color={colors.textBright} />
        </Pressable>
      );
    }

    return null;
  };
  const leftElement = renderLeft();

  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]}>
      <View style={[styles.content, { paddingBottom: paddedBottom }, contentStyle]}>
        <View style={styles.topBar}>
          <View style={styles.leftSection}>
            {leftElement}

            <View style={[styles.centerContent, !leftElement && styles.centerContentWithoutLeft]}>
              <Text weight={800} size={24} numberOfLines={1} style={[styles.title, titleStyle]}>
                {title}
              </Text>

              {!!subtitle && (
                <Text
                  numberOfLines={1}
                  weight={500}
                  size={14}
                  style={[styles.subtitle, subtitleStyle]}
                >
                  {subtitle}
                </Text>
              )}
            </View>
          </View>

          {!!rightComponent && <View style={styles.rightSection}>{rightComponent}</View>}
        </View>

        {!!children && <View style={styles.childrenContainer}>{children}</View>}
      </View>
    </View>
  );
};
