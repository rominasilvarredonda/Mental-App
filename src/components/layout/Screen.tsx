import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: ReactNode;
  style?: ViewStyle;
  centered?: boolean;
};

export function Screen({ children, style, centered = false }: ScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={[
          {
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: 24,
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
