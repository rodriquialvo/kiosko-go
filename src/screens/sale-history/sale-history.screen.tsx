import { ScrollView, View } from "react-native";
import { AppHeader } from "@/components/app-header/AppHeader";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import {
  DateButton,
  DateOptionMenu,
  FilterChip,
  SaleCard,
  SaleDetailModal,
  SummaryCard,
} from "./components";
import { useSaleHistoryController } from "./sale-history.controller";
import { styles } from "./sale-history.styles";

export default function SaleHistoryScreen() {
  const {
    dateOptions,
    filteredHistory,
    filters,
    isDatePickerOpen,
    selectedDateOption,
    selectedFilterId,
    selectedSale,
    totalAmount,
    totalTickets,
    handleCloseSale,
    setSelectedFilterId,
    handleGoBack,
    handleOpenSale,
    handleSelectDateOption,
    handleToggleDatePicker,
  } = useSaleHistoryController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <AppHeader
          title="Historial"
          subtitle="Ventas realizadas"
          showBack
          onBack={handleGoBack}
          containerStyle={styles.header}
          paddedBottom={22}
          rightComponent={
            <DateButton label={selectedDateOption.label} onPress={handleToggleDatePicker} />
          }
        />

        {isDatePickerOpen && (
          <DateOptionMenu
            options={dateOptions}
            selectedOptionId={selectedDateOption.id}
            onSelect={handleSelectDateOption}
          />
        )}

        <View style={styles.summaryGrid}>
          <SummaryCard icon="cash-register" label="Vendido" value={totalAmount} />
          <SummaryCard icon="receipt-text-outline" label="Tickets" value={String(totalTickets)} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filters}
          contentContainerStyle={styles.filtersContent}
        >
          {filters.map((item) => (
            <FilterChip
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
          {filteredHistory.map((item) => (
            <SaleCard key={item.id} item={item} onPress={handleOpenSale} />
          ))}
        </ScrollView>
      </View>

      <SaleDetailModal item={selectedSale} onClose={handleCloseSale} />
    </ScreenContainer>
  );
}
