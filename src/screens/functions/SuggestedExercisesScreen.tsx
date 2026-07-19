import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";

export function SuggestedExercisesScreen() {
  const items = [
    { title: "Respiraciones", subtitle: "Recomendadas por Silvia" },
    { title: "Escribir emociones", subtitle: "Recomendado por IA" },
    { title: "Meditación", subtitle: "Recomendado por Jose" },
    { title: "Grounding 5-4-3-2-1", subtitle: "Para ansiedad" },
    { title: "Reencuadre cognitivo", subtitle: "Práctica breve" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tokens.colors.bg }} edges={["top"]}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 28 }}>
        <AppText style={{ fontSize: 20, fontWeight: "900" }}>
          Ejercicios sugeridos
        </AppText>

        <AppText style={{ marginTop: 6, color: tokens.colors.mutedText }}>
          Recomendaciones para tu seguimiento entre sesiones.
        </AppText>

        <View style={{ marginTop: 14 }}>
          {items.map((it) => (
            <TouchableOpacity
              key={it.title}
              onPress={() => console.log("abrir ejercicio", it.title)}
              style={{
                backgroundColor: "#fff",
                borderRadius: 14,
                padding: 14,
                borderWidth: 1,
                borderColor: "rgba(83,104,149,0.14)",
                marginBottom: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <View
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    backgroundColor: "rgba(5,50,37,0.12)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="activity" size={18} color={tokens.colors.primary} />
                </View>

                <View>
                  <AppText style={{ fontWeight: "900" }}>{it.title}</AppText>
                  <AppText style={{ color: tokens.colors.mutedText, marginTop: 2 }}>
                    {it.subtitle}
                  </AppText>
                </View>
              </View>

              <Feather name="chevron-right" size={18} color={tokens.colors.mutedText} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
