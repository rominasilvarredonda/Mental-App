import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../../theme/tokens";

type ScreenProps = {
  children: ReactNode;
  style?: ViewStyle;
  centered?: boolean;
};

export function Screen({ children, style, centered = false }: ScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tokens.colors.bg }}>
      <View
        style={[
          {
            flex: 1,
            paddingHorizontal: tokens.spacing.xl,
            paddingTop: tokens.spacing.xl,
            justifyContent: centered ? "center" : "flex-start",
            alignItems: centered ? "center" : "flex-start",
          },
          style,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
