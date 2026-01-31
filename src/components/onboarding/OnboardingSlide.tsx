// src/components/onboarding/OnboardingSlide.tsx
import { Image, ImageSourcePropType, View } from "react-native";
import { tokens } from "../../theme/tokens";
import { AppText } from "../ui/AppText";
import { AppButton } from "../ui/AppButton";
import { OnboardingDots } from "./OnboardingDots";

type TitleParts = {
  left: string;
  highlight: string;
  right: string;
};

export type OnboardingSlideData = {
  id: string;
  image: ImageSourcePropType;
  title: TitleParts;
  description: string;
  primaryLabel: string;
  secondaryLabel?: string;
};

type Props = {
  data: OnboardingSlideData;
  index: number;
  total: number;
  onPrimary: () => void;
  onSecondary?: () => void;
};

export function OnboardingSlide({ data, index, total, onPrimary, onSecondary }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: tokens.colors.bg, paddingHorizontal: 24, paddingTop: 24 }}>
      {/* Imagen */}
      <View style={{ alignItems: "center", marginTop: 45 }}>
        <Image
          source={data.image}
          style={{ width: "100%", height: 450 }}
          resizeMode="contain"
        />
      </View>

      {/* Texto */}
      <View style={{ marginTop: -50, alignItems: "center" }}>
        <AppText variant="title" style={{ textAlign: "center", color: "#536895" }}>
          {data.title.left}
          <AppText
            variant="title"
            style={{ color: tokens.colors.primary }}
          >
            {data.title.highlight}
          </AppText>
          <AppText variant="title" style={{ textAlign: "center", color: "#536895" }}>
            {data.title.right}
          </AppText>
        </AppText>

        <AppText
          variant="body"
          style={{
            marginTop: 14,
            textAlign: "center",
            maxWidth: 320,
          }}
        >
          {data.description}
        </AppText>
      </View>

      {/* Dots */}
      <View style={{ marginTop: 26 }}>
        <OnboardingDots total={total} activeIndex={index} />
      </View>

      {/* Botones abajo */}
      <View style={{ marginTop: 28, gap: 14 }}>
        <AppButton label={data.primaryLabel} onPress={onPrimary} variant="primary" />
        {!!data.secondaryLabel && (
          <AppButton label={data.secondaryLabel} onPress={onSecondary} variant="secondary" />
        )}
      </View>
    </View>
  );
}
