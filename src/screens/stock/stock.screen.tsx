import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, View } from "react-native";
import { AppHeader } from "@/components/app-header/AppHeader";
import { SearchBar } from "@/components/search-bar";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import Text from "@/components/Text/Text";
import { colors } from "@/theme/src/theme";
import {
  StockActionCard,
  StockFilterChip,
  StockProductRow,
  StockWarningCard,
} from "./components";
import { useStockController } from "./stock.controller";
import { styles } from "./stock.styles";

export default function StockScreen() {
  const {
    actions,
    filters,
    filteredProducts,
    lowStockCount,
    searchValue,
    selectedFilterId,
    setSearchValue,
    setSelectedFilterId,
    handleOpenHistory,
    handleOpenLowStock,
    handleOpenAction,
    handleOpenProduct,
  } = useStockController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <AppHeader
          title="Stock"
          subtitle="Control de inventario"
          containerStyle={styles.header}
          paddedBottom={26}
          rightComponent={
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Ver historial de stock"
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

        <SearchBar
          placeholder="Buscar producto..."
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
          {filters.map((item) => (
            <StockFilterChip
              key={item.id}
              item={item}
              isSelected={item.id === selectedFilterId}
              onPress={setSelectedFilterId}
            />
          ))}
        </ScrollView>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        >
          <StockWarningCard count={lowStockCount} onPress={handleOpenLowStock} />

          <View style={styles.actionsGrid}>
            {actions.map((item) => (
              <StockActionCard key={item.id} item={item} onPress={handleOpenAction} />
            ))}
          </View>

          <View style={styles.productsCard}>
            {filteredProducts.map((item) => (
              <StockProductRow key={item.id} item={item} onPress={handleOpenProduct} />
            ))}
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
