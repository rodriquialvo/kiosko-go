import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/theme/src/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import type { ComponentProps } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { FormInput } from "../../../components/form-input/form-input";
import { PrimaryButton } from "../../../components/primary-button/primary-button";
import { ScreenContainer } from "../../../components/screen-container/screen-container";
import Text from "../../../components/Text/Text";
import { useLoginController } from "./login.controller";
import { styles } from "./login.styles";

type FeatureItem = {
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  label: string;
  color: string;
};

const featureItems: FeatureItem[] = [
  { icon: "cart-outline", label: "Ventas", color: colors.primaryBright },
  { icon: "cube-outline", label: "Stock", color: colors.secondaryBright },
  { icon: "cash-register", label: "Caja", color: colors.primaryBright },
  { icon: "chart-bar", label: "Reportes", color: colors.secondaryBright },
];

export default function LoginScreen() {
  const { control, submit, handleSubmit, isLoading } = useLoginController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.brandContainer}>
            <MaterialCommunityIcons name="cup-outline" size={76} color={colors.primaryNeon} />
            <View style={styles.brandRow}>
              <Text size={48} weight={800} style={styles.brandPrimary}>
                Kiosko
              </Text>
              <Text size={48} weight={800} style={styles.brandAccent}>
                Go
              </Text>
            </View>
            <Text size={18} weight={400} style={styles.brandSubtitle}>
              Tu negocio, en control.
            </Text>
          </View>

          <LinearGradient
            colors={[colors.surfaceOverlay, colors.surfaceOverlayStrong]}
            style={styles.card}
          >
            <View style={styles.cardGlow} />
            <View style={styles.cardHeader}>
              <View style={styles.cardIconBox}>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={34}
                  color={colors.primaryBright}
                />
              </View>
              <View style={styles.cardTitleGroup}>
                <Text size={30} weight={700} style={styles.cardTitle}>
                  Iniciar sesión
                </Text>
                <Text size={16} weight={400} style={styles.cardSubtitle}>
                  Entrá con tu usuario para comenzar a vender.
                </Text>
              </View>
            </View>

            <View style={styles.formGroup}>
              <FormInput
                size="lg"
                control={control}
                name="email"
                placeholder="usuario@kiosko.com"
                leftIcon="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                errorText="Email inválido"
                iconColor={colors.primaryBright}
                placeholderTextColor={colors.textMutedStrong}
                containerStyle={styles.inputContainer}
                inputWrapperStyle={styles.inputWrapper}
                inputStyle={styles.inputText}
              />
              <FormInput
                size="lg"
                control={control}
                name="password"
                placeholder="Ingresá tu contraseña"
                leftIcon="lock"
                errorText="Contraseña inválida"
                secure
                iconColor={colors.primaryBright}
                placeholderTextColor={colors.textMutedStrong}
                containerStyle={styles.inputContainer}
                inputWrapperStyle={styles.inputWrapper}
                inputStyle={styles.inputText}
              />
            </View>

            <Link href="/root/(auth)/forgot-password" asChild>
              <TouchableOpacity style={styles.forgotButton}>
                <Text size={14} weight={500} style={styles.forgotPassword}>
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>
            </Link>

            <PrimaryButton
              title="Entrar al sistema"
              accessibilityLabel="Entrar al sistema"
              disabled={isLoading}
              onPress={handleSubmit(submit)}
            />
          </LinearGradient>

          <View style={styles.featureContainer}>
            <View style={styles.featureIconsRow}>
              {featureItems.map((item, index) => (
                <View key={item.label} style={styles.featureIconGroup}>
                  <MaterialCommunityIcons name={item.icon} size={29} color={item.color} />
                  {index < featureItems.length - 1 ? <View style={styles.featureDivider} /> : null}
                </View>
              ))}
            </View>
            <View style={styles.featureLabelsRow}>
              {featureItems.map((item, index) => (
                <View key={item.label} style={styles.featureLabelGroup}>
                  <Text size={14} weight={400} style={styles.featureLabel}>
                    {item.label}
                  </Text>
                  {index < featureItems.length - 1 ? <View style={styles.featureDot} /> : null}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}
