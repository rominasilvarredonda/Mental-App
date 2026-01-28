import React from "react";
import { View } from "react-native";
import { OnboardingSlide } from "../../components/onboarding/OnboardingSlide";
import { onboardingSlides } from "./onboarding.data";

export function OnboardingScreen() {
  const slide = onboardingSlides[0]; // por ahora mostramos la primera

  return (
    <View style={{ flex: 1 }}>
      <OnboardingSlide
        title={slide.title}
        highlight={slide.highlight}
        description={slide.description}
        imageSource={slide.image}
        index={0}
        total={3}
        primaryLabel={slide.primaryLabel}
        secondaryLabel={slide.secondaryLabel}
      />
    </View>
  );
}
