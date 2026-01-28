// src/screens/onboarding/OnboardingScreen.tsx
import { useState } from "react";
import { View } from "react-native";
import { onboardingSlides } from "./onboarding.data";
import { OnboardingSlide } from "../../components/onboarding/OnboardingSlide";

export function OnboardingScreen() {
  const [index, setIndex] = useState(0);
  const total = onboardingSlides.length;
  const data = onboardingSlides[index];

  const goNext = () => {
    if (index < total - 1) setIndex(index + 1);
    else {
      // acá después navegamos a Register/Login
      // por ahora: no hacemos nada
    }
  };

  const skip = () => setIndex(total - 1);

  return (
    <View style={{ flex: 1 }}>
      <OnboardingSlide
        data={data}
        index={index}
        total={total}
        onPrimary={goNext}
        onSecondary={data.secondaryLabel ? skip : undefined}
      />
    </View>
  );
}
