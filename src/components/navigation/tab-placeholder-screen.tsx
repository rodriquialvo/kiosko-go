import { View } from "react-native";
import { ScreenContainer } from "@/components/screen-container/screen-container";
import Text from "@/components/Text/Text";
import { styles } from "./tab-placeholder-screen.styles";

type TabPlaceholderScreenProps = {
  title: string;
};

export function TabPlaceholderScreen({ title }: TabPlaceholderScreenProps) {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text size={24} weight={700} style={styles.title}>
          {title}
        </Text>
      </View>
    </ScreenContainer>
  );
}
