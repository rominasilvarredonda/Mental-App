// src/screens/home/DailyReadingScreen.tsx
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import type { HomeFlowsStackParamList } from "../../navigation/HomeFlowsStack";

type Props = NativeStackScreenProps<HomeFlowsStackParamList, "DailyReading">;

export function DailyReadingScreen({ navigation }: Props) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: tokens.colors.bg }}
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 12,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(174,197,235,0.16)",
          }}
          activeOpacity={0.9}
        >
          <Feather name="chevron-left" size={20} color={tokens.colors.text} />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <AppText style={{ fontSize: 18, fontWeight: "900" }}>
            Lectura del día
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 2,
            }}
          >
            <Feather name="clock" size={14} color={tokens.colors.mutedText} />
            <AppText style={{ color: tokens.colors.mutedText }}>
              5 minutos · Psicoeducación
            </AppText>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 28,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(83,104,149,0.14)",
          }}
        >
          <AppText style={{ fontSize: 22, fontWeight: "900", lineHeight: 28 }}>
            Entendiendo tus emociones y pensamientos
          </AppText>

          <AppText
            style={{
              marginTop: 10,
              color: tokens.colors.mutedText,
              lineHeight: 20,
            }}
          >
            Una idea clave: no elegimos sentir, pero sí podemos aprender a
            responder mejor. Y una de las maneras más efectivas es trabajar con
            nuestros pensamientos.
          </AppText>

          <AppText style={{ marginTop: 14, fontWeight: "900", fontSize: 16 }}>
            1) Emoción ≠ problema
          </AppText>
          <AppText
            style={{ marginTop: 8, lineHeight: 20, color: tokens.colors.text }}
          >
            Las emociones son señales. Aparecen para informarte de algo: una
            necesidad, un límite, un peligro, una pérdida o incluso una alegría.
            El problema no es sentir; el problema suele ser lo que hacemos
            después de sentir, cuando reaccionamos en automático.
          </AppText>

          <AppText style={{ marginTop: 14, fontWeight: "900", fontSize: 16 }}>
            2) El circuito: situación → pensamiento → emoción → acción
          </AppText>
          <AppText
            style={{ marginTop: 8, lineHeight: 20, color: tokens.colors.text }}
          >
            Muchas veces creemos que la emoción viene directo de la situación,
            pero entre medio suele haber una interpretación (un pensamiento).
            Por ejemplo:
          </AppText>

          <View
            style={{
              marginTop: 10,
              backgroundColor: "rgba(174,197,235,0.16)",
              padding: 12,
              borderRadius: 14,
            }}
          >
            <AppText style={{ lineHeight: 20 }}>
              <AppText style={{ fontWeight: "900" }}>Situación:</AppText> me
              clavan el visto.{"\n"}
              <AppText style={{ fontWeight: "900" }}>Pensamiento:</AppText> “no
              le importo”.{"\n"}
              <AppText style={{ fontWeight: "900" }}>Emoción:</AppText>{" "}
              tristeza/ansiedad.{"\n"}
              <AppText style={{ fontWeight: "900" }}>Acción:</AppText> mando 5
              mensajes, me enojo o me cierro.
            </AppText>
          </View>

          <AppText
            style={{ marginTop: 14, lineHeight: 20, color: tokens.colors.text }}
          >
            Si cambia el pensamiento, muchas veces cambia la intensidad de la
            emoción. No porque “te mientas”, sino porque ampliás alternativas
            más realistas.
          </AppText>

          <AppText style={{ marginTop: 14, fontWeight: "900", fontSize: 16 }}>
            3) Controlar emociones no es “apagarlas”
          </AppText>
          <AppText
            style={{ marginTop: 8, lineHeight: 20, color: tokens.colors.text }}
          >
            Regular emociones significa: reconocer lo que sentís, validar que
            tiene sentido, y elegir una respuesta que te cuide. Tu meta no es
            dejar de sentir, sino evitar que la emoción maneje el volante.
          </AppText>

          <AppText style={{ marginTop: 14, fontWeight: "900", fontSize: 16 }}>
            4) Mini práctica (2 minutos): “Pausar y reencuadrar”
          </AppText>
          <AppText
            style={{ marginTop: 8, lineHeight: 20, color: tokens.colors.text }}
          >
            La próxima vez que notes una emoción intensa, probá esto:
          </AppText>

          <View style={{ marginTop: 10, gap: 10 }}>
            {[
              "Nombrá la emoción: “Estoy sintiendo ansiedad / enojo / tristeza”.",
              "Identificá el pensamiento automático: “¿Qué me estoy diciendo ahora?”",
              "Preguntate: “¿Tengo evidencia? ¿Hay otra explicación posible?”",
              "Elegí una frase más equilibrada: “Puede ser X, pero también puede ser Y”.",
              "Decidí una acción pequeña que te cuide (respirar, agua, caminar 2 minutos, escribir).",
            ].map((t, idx) => (
              <View key={t} style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 11,
                    backgroundColor: "rgba(5,50,37,0.14)",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  <AppText
                    style={{
                      fontWeight: "900",
                      color: tokens.colors.primary,
                      fontSize: 12,
                    }}
                  >
                    {idx + 1}
                  </AppText>
                </View>
                <AppText
                  style={{
                    flex: 1,
                    color: tokens.colors.text,
                    lineHeight: 20,
                  }}
                >
                  {t}
                </AppText>
              </View>
            ))}
          </View>

          <AppText style={{ marginTop: 14, fontWeight: "900", fontSize: 16 }}>
            5) Idea final
          </AppText>
          <AppText
            style={{ marginTop: 8, lineHeight: 20, color: tokens.colors.text }}
          >
            No podés controlar todo lo que pasa, pero sí podés entrenar tu mente
            para interpretar de forma más útil y responder con más calma. En
            terapia esto se profundiza con herramientas específicas (como TCC),
            pero este primer paso ya cambia mucho: detectar pensamiento → elegir
            respuesta.
          </AppText>
        </View>

        {/* CTA único: Terminar con gradiente */}
        <TouchableOpacity
          onPress={() => {
            console.log("lectura terminada");
            navigation.goBack();
          }}
          activeOpacity={0.92}
          style={{ marginTop: 16 }}
        >
          <LinearGradient
            colors={[tokens.colors.primary, tokens.colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              height: 54,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppText style={{ fontWeight: "900", color: "#fff", fontSize: 16 }}>
              Terminar
            </AppText>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
