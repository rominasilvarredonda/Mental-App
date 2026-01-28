// src/components/onboarding/OnboardingDots.tsx
import { View } from "react-native";
import { tokens } from "../../theme/tokens";

export function OnboardingDots({ total, activeIndex }: { total: number; activeIndex: number }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
      {Array.from({ length: total }).map((_, i) => {
        const active = i === activeIndex;
        return (
          <View
            key={i}
            style={{
              width: active ? 36 : 36,
              height: 4,
              borderRadius: 999,
              backgroundColor: active ? tokens.colors.primary : "rgba(23,18,25,0.25)",
            }}
          />
        );
      })}
    </View>
  );
}
