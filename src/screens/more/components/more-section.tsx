import { View } from "react-native";
import Text from "@/components/Text/Text";
import type { MoreSection as MoreSectionType } from "../more.controller";
import { MoreOptionRow } from "./more-option-row";
import { styles } from "../more.styles";

type MoreSectionProps = {
  section: MoreSectionType;
  onOptionPress: (optionId: string) => void;
};

export function MoreSection({ section, onOptionPress }: MoreSectionProps) {
  return (
    <View style={styles.section}>
      {section.title ? (
        <Text size={16} weight={600} style={styles.sectionTitle}>
          {section.title}
        </Text>
      ) : null}
      <View style={styles.sectionCard}>
        {section.items.map((item, index) => (
          <MoreOptionRow
            key={item.id}
            item={item}
            isLast={index === section.items.length - 1}
            onPress={onOptionPress}
          />
        ))}
      </View>
    </View>
  );
}
