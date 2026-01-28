import React from "react";
import { Image, View } from "react-native";
import { AppText } from "../ui/AppText";

type Props = {
  title: string;
  highlight?: string; // palabra o frase para colorear (verde)
  description: string;
  imageSource: any; // por ahora any para usar require(...)
  index: number; // 0,1,2
  total: number; // 3
  primaryLabel: string; // "Siguiente" / "Comenzar"
  secondaryLabel?: string; // "Saltar" (no existe en la 3)
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
};

export function OnboardingSlide({
  title,
  highlight,
  description,
  imageSource,
  index,
  total,
  primaryLabel,
  secondaryLabel,
  onPrimaryPress,
  onSecondaryPress,
}: Props) {
  return (
    <View className="flex-1 bg-[#FCFEFF] px-6 pt-10 pb-10">
      {/* Imagen */}
      <View className="items-center mt-8">
        <Image
          source={imageSource}
          resizeMode="contain"
          style={{ width: 280, height: 220 }}
        />
      </View>

      {/* Título */}
      <View className="mt-8 items-center">
        <AppText className="text-[26px] font-semibold text-[#171219] text-center">
          {title}{" "}
          {highlight ? (
            <AppText className="text-[26px] font-semibold text-[#2D936C]">
              {highlight}
            </AppText>
          ) : null}
        </AppText>

        {/* Descripción */}
        <AppText className="mt-4 text-[15px] leading-[22px] text-[#171219]/70 text-center">
          {description}
        </AppText>
      </View>

      {/* Dots */}
      <View className="mt-6 flex-row justify-center items-center gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const active = i === index;
          return (
            <View
              key={i}
              className={active ? "h-1 w-10 rounded-full bg-[#2D936C]" : "h-1 w-10 rounded-full bg-[#171219]/20"}
            />
          );
        })}
      </View>

      {/* Botones */}
      <View className="mt-10">
        <View className="rounded-2xl overflow-hidden">
          <View className="bg-[#536895]">
            <View className="bg-[#2D936C] opacity-70" />
          </View>

          {/* Botón primario (simple versión sin Pressable todavía) */}
          <View
            className="rounded-2xl bg-[#536895] py-4 items-center"
            // lo dejamos listo para convertirlo en botón en el próximo paso
          >
            <AppText className="text-white text-[16px] font-semibold">
              {primaryLabel}
            </AppText>
          </View>
        </View>

        {secondaryLabel ? (
          <View className="mt-4 rounded-2xl bg-[#536895]/35 py-4 items-center">
            <AppText className="text-white text-[16px] font-semibold">
              {secondaryLabel}
            </AppText>
          </View>
        ) : null}
      </View>
    </View>
  );
}
