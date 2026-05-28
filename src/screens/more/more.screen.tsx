import { ScrollView, View } from "react-native";
import { AppHeader } from "@/components/app-header/AppHeader";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import { LogoutButton, MoreProfileCard, MoreSection } from "./components";
import { useMoreController } from "./more.controller";
import { styles } from "./more.styles";

export default function MoreScreen() {
  const {
    sections,
    userName,
    role,
    roleBadge,
    handleOpenProfile,
    handleOpenOption,
    handleLogout,
  } = useMoreController();

  return (
    <ScreenContainer paddingTop={0} paddingBottom={0} contentStyle={styles.screen}>
      <View style={styles.content}>
        <AppHeader
          title="Más"
          subtitle="Opciones y configuración"
          containerStyle={styles.header}
          paddedBottom={24}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <MoreProfileCard
            name={userName}
            role={role}
            badge={roleBadge}
            onPress={handleOpenProfile}
          />

          {sections.map((section) => (
            <MoreSection
              key={section.id}
              section={section}
              onOptionPress={handleOpenOption}
            />
          ))}

          <LogoutButton onPress={handleLogout} />
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
