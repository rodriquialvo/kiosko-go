import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import {
  AlertRow,
  BottomNavigationItem,
  QuickAccessCard,
  SectionHeader,
  SummaryCardView,
  TopProductRow,
} from "./components";
import { useHomeController } from "./home.controller";
import { styles } from "./home.styles";

export default function HomeScreen() {
  const {
    userName,
    currentDateLabel,
    currentCash,
    summaryCards,
    quickAccessItems,
    alerts,
    topProducts,
    tabItems,
    handleViewAllQuickAccess,
    handleViewAllAlerts,
    handleViewReports,
  } = useHomeController();

  return (
    <ScreenContainer paddingTop={0} contentStyle={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text size={24} weight={800} style={styles.greeting}>
              Hola, {userName} 👋
            </Text>
            <Text size={18} weight={500} style={styles.dateText}>
              {currentDateLabel}
            </Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Notificaciones"
            style={styles.notificationButton}
          >
            <View style={styles.notificationDot} />
            <MaterialCommunityIcons name="bell-outline" size={42} color={colors.white} />
          </Pressable>
        </View>

        <View style={styles.cashCard}>
          <View style={styles.cashIconBox}>
            <MaterialCommunityIcons name="cash-register" size={54} color={colors.primaryBright} />
          </View>
          <View style={styles.cashTextGroup}>
            <Text size={18} weight={600} style={styles.mutedText}>
              Caja actual
            </Text>
            <Text size={24} weight={600} style={styles.cashAmount}>
              {currentCash.amount}
            </Text>
            <Text size={18} weight={500} style={styles.mutedText}>
              {currentCash.label}
            </Text>
          </View>
          <View style={styles.cashActions}>
            <View style={styles.statusPill}>
              <View style={styles.statusDot} />
              <Text size={16} weight={700} style={styles.statusText}>
                {currentCash.status}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryGrid}>
          {summaryCards.map((item) => (
            <SummaryCardView key={item.title} item={item} />
          ))}
        </View>

        <SectionHeader
          title="Accesos rápidos"
          actionLabel="Ver todos"
          onActionPress={handleViewAllQuickAccess}
        />
        <View style={styles.quickAccessGrid}>
          {quickAccessItems.map((item) => (
            <QuickAccessCard key={item.title} item={item} />
          ))}
        </View>

        <SectionHeader title="Alertas" actionLabel="Ver todo" onActionPress={handleViewAllAlerts} />
        <View style={styles.panel}>
          {alerts.map((item, index) => (
            <AlertRow key={item.title} item={item} isLast={index === alerts.length - 1} />
          ))}
        </View>

        <SectionHeader
          title="Más vendidos hoy"
          actionLabel="Ver reportes"
          onActionPress={handleViewReports}
        />
        <View style={styles.panel}>
          {topProducts.map((item, index) => (
            <TopProductRow key={item.rank} item={item} isLast={index === topProducts.length - 1} />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
