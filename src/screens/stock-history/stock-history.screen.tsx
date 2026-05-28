import { ScrollView, View } from "react-native";
import { AppHeader } from "@/components/app-header/AppHeader";
import { SearchBar } from "@/components/search-bar";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import Text from "@/components/Text/Text";
import {
  StockHistoryFilterChip,
  StockHistoryMovementCard,
  StockHistorySummaryCard,
} from "./components";
import { useStockHistoryController } from "./stock-history.controller";
import { styles } from "./stock-history.styles";

export default function StockHistoryScreen() {
  const {
    dateFilters,
    filteredMovements,
    searchValue,
    selectedDateFilterId,
    selectedTypeFilterId,
    summary,
    typeFilters,
    setSearchValue,
    setSelectedDateFilterId,
    setSelectedTypeFilterId,
    handleGoBack,
  } = useStockHistoryController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <AppHeader
          title="Historial de stock"
          subtitle="Movimientos de inventario"
          showBack
          onBack={handleGoBack}
          containerStyle={styles.header}
          paddedBottom={22}
        />

        <SearchBar
          placeholder="Buscar producto o código..."
          value={searchValue}
          onChangeText={setSearchValue}
          containerStyle={styles.searchBar}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filters}
          contentContainerStyle={styles.filtersContent}
        >
          {dateFilters.map((item) => (
            <StockHistoryFilterChip
              key={item.id}
              id={item.id}
              label={item.label}
              isSelected={item.id === selectedDateFilterId}
              onPress={setSelectedDateFilterId}
            />
          ))}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filters}
          contentContainerStyle={styles.filtersContent}
        >
          {typeFilters.map((item) => (
            <StockHistoryFilterChip
              key={item.id}
              id={item.id}
              label={item.label}
              isSelected={item.id === selectedTypeFilterId}
              onPress={setSelectedTypeFilterId}
            />
          ))}
        </ScrollView>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        >
          <Text size={18} weight={800} style={styles.sectionTitle}>
            Resumen
          </Text>
          <View style={styles.summaryGrid}>
            {summary.map((item) => (
              <StockHistorySummaryCard key={item.id} item={item} />
            ))}
          </View>

          <Text size={18} weight={800} style={styles.sectionTitle}>
            Movimientos
          </Text>
          <View style={styles.movementList}>
            {filteredMovements.map((item) => (
              <StockHistoryMovementCard key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
