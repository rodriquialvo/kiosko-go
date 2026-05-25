import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native";

import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import Text from "../Text/Text";
import { styles } from "./AppHeader.styles";

type Props = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  children?: React.ReactNode;
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
  backgroundColor = "transparent",
  paddedBottom = 20,
  subtitleStyle,
  titleStyle,
}: Props) => {
  const renderLeft = () => {
    if (leftComponent) return leftComponent;

    if (showBack) {
      return (
        <Pressable onPress={onBack} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={22} color={Colors.white} />
        </Pressable>
      );
    }

    return null;
  };

  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]}>
      <View style={[styles.content, { paddingBottom: paddedBottom }, contentStyle]}>
        <View style={styles.topBar}>
          <View style={styles.leftSection}>
            {renderLeft()}

            <View style={styles.centerContent}>
              <Text weight={600} size={24} numberOfLines={1} style={[styles.title, titleStyle]}>
                {title}
              </Text>

              {!!subtitle && (
                <Text
                  numberOfLines={1}
                  weight={400}
                  size={16}
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
