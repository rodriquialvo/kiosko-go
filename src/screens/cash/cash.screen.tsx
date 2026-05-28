import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, View } from "react-native";
import { AppHeader } from "@/components/app-header/AppHeader";
import { PrimaryButton } from "@/components/primary-button/primary-button";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import {
  CashClosedStatusCard,
  CashMetricCard,
  CashMovementRow,
  CashSummaryCard,
  CloseCashModal,
  ClosedCashActions,
  ClosedCashCard,
  CurrentCashCard,
  LastClosedCashCard,
  OpenCashModal,
} from "./components";
import { useCashController } from "./cash.controller";
import { styles } from "./cash.styles";

export default function CashScreen() {
  const {
    closeCashForm,
    currentCash,
    expectedCash,
    isCloseCashModalVisible,
    isCashOpen,
    isOpenCashModalVisible,
    lastClosedCash,
    openedAt,
    openCashForm,
    metrics,
    movements,
    summaryRows,
    handleChangeCloseCashField,
    handleChangeOpenCashField,
    handleCloseCloseCashModal,
    handleCloseOpenCashModal,
    handleConfirmCloseCash,
    handleConfirmOpenCash,
    handleOpenHistory,
    handleOpenCashModal,
    handleOpenMetric,
    handleOpenMovement,
    handleRegisterMovement,
    handleCloseCash,
  } = useCashController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <AppHeader
          title="Caja"
          subtitle="Apertura y cierre de caja"
          containerStyle={styles.header}
          paddedBottom={26}
          rightComponent={
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Ver historial de caja"
              onPress={handleOpenHistory}
              style={styles.historyButton}
            >
              <MaterialCommunityIcons name="history" size={24} color={colors.textBright} />
              <Text size={12} weight={800} style={styles.historyButtonText}>
                Historial
              </Text>
            </Pressable>
          }
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {isCashOpen ? (
            <>
              <CurrentCashCard amount={currentCash} openedAt={openedAt} />

              <View style={styles.metricsGrid}>
                {metrics.map((item) => (
                  <CashMetricCard key={item.id} item={item} onPress={handleOpenMetric} />
                ))}
              </View>

              <Text size={18} weight={800} style={styles.sectionTitle}>
                Movimientos
              </Text>
              <View style={styles.movementsCard}>
                {movements.map((item, index) => (
                  <CashMovementRow
                    key={item.id}
                    item={item}
                    isLast={index === movements.length - 1}
                    onPress={handleOpenMovement}
                  />
                ))}
              </View>

              <Text size={18} weight={800} style={styles.sectionTitle}>
                Resumen
              </Text>
              <CashSummaryCard rows={summaryRows} expectedCash={expectedCash} />

              <View style={styles.actionsRow}>
                <PrimaryButton
                  title="Extraer/Agregar"
                  type="secondary"
                  leftIcon="file-plus"
                  onPress={handleRegisterMovement}
                  accessibilityLabel="Registrar movimiento de caja"
                  style={styles.registerButton}
                />
                <PrimaryButton
                  title="Cerrar caja"
                  leftIcon="lock"
                  onPress={handleCloseCash}
                  accessibilityLabel="Cerrar caja"
                  style={styles.closeButton}
                />
              </View>
            </>
          ) : (
            <>
              <ClosedCashCard lastClosedCash={lastClosedCash} />
              <CashClosedStatusCard />
              <LastClosedCashCard item={lastClosedCash} />
              <ClosedCashActions
                onOpenHistory={handleOpenHistory}
                onOpenCash={handleOpenCashModal}
              />
            </>
          )}
        </ScrollView>
      </View>

      <OpenCashModal
        visible={isOpenCashModalVisible}
        form={openCashForm}
        onChangeField={handleChangeOpenCashField}
        onCancel={handleCloseOpenCashModal}
        onConfirm={handleConfirmOpenCash}
      />
      <CloseCashModal
        visible={isCloseCashModalVisible}
        form={closeCashForm}
        expectedCash={expectedCash}
        onChangeField={handleChangeCloseCashField}
        onCancel={handleCloseCloseCashModal}
        onConfirm={handleConfirmCloseCash}
      />
    </ScreenContainer>
  );
}
