// src/screens/onboarding/OnboardingScreen.tsx
import { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { onboardingSlides } from "../../components/onboarding/onboarding.data";
import { OnboardingSlide } from "../../components/onboarding/OnboardingSlide";

export function OnboardingScreen() {
  const [index, setIndex] = useState(0);

  const total = onboardingSlides.length;
  const data = onboardingSlides[index];
  const navigation = useNavigation<any>();
  if (!data) return null;

  const goNext = () => {
    if (index < total - 1) {
      setIndex(index + 1);
    } else {
      navigation.navigate("WelcomeAuth");
    }
  };

  const skip = () => {
    setIndex(total - 1);
  };

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
