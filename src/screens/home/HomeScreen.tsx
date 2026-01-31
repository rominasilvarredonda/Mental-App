import { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { AppButton } from "../../components/ui/AppButton";
import { SafeAreaView } from "react-native-safe-area-context";

type Mood = { id: string; label: string; emoji: string };

const MOODS: Mood[] = [
  { id: "great", label: "Genial", emoji: "😄" },
  { id: "good", label: "Bien", emoji: "🙂" },
  { id: "ok", label: "Ok", emoji: "😐" },
  { id: "bad", label: "Mal", emoji: "🙁" },
  { id: "awful", label: "Muy mal", emoji: "😣" },
];

export function HomeScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const canSave = useMemo(() => Boolean(selectedMood), [selectedMood]);

  return (
<SafeAreaView
  style={{ flex: 1, backgroundColor: tokens.colors.bg }}
  edges={["top"]}
>
<ScrollView
      contentContainerStyle={{
        padding: 20,
        paddingTop: 16,   
        paddingBottom: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                backgroundColor: "rgba(0,0,0,0.08)",
              }}
            />
            <View>
              <AppText style={{ color: tokens.colors.mutedText, fontSize: 12 }}>
                Buenas,
              </AppText>
              <AppText style={{ fontSize: 16, fontWeight: "700" }}>
                Jose Pedro
              </AppText>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => console.log("notificaciones")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.04)",
            }}
          >
            <AppText style={{ fontSize: 18 }}>🔔</AppText>
          </TouchableOpacity>
        </View>

        {/* Mood card */}
        <View
          style={{
            backgroundColor: "#EAF2F0",
            borderRadius: 18,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.06)",
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 6 },
          }}
        >
          <AppText style={{ fontSize: 18, fontWeight: "800" }}>
            ¿Cómo te sentís hoy?
          </AppText>
          <AppText style={{ color: tokens.colors.mutedText, marginTop: 4 }}>
            Selecciona tu estado de ánimo
          </AppText>

          <View style={{ flexDirection: "row", gap: 1, marginTop: 14 }}>
            {MOODS.map((m) => {
              const active = selectedMood === m.id;
              return (
                <TouchableOpacity
                  key={m.id}
                  onPress={() => setSelectedMood(m.id)}
                  style={{
                    flex: 1,
                    height: 44,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: active ? "rgba(45,147,108,0.18)" : "#FFFFFF",
                    borderWidth: 1,
                    borderColor: active
                      ? tokens.colors.primary
                      : "rgba(0,0,0,0.08)",
                  }}
                >
                  <AppText style={{ fontSize: 17 }}>{m.emoji}</AppText>
                </TouchableOpacity>
              );
            })}
          </View>

          <AppText style={{ marginTop: 14, fontWeight: "700" }}>
            Agrega una nota (opcional)
          </AppText>

          <View
            style={{
              marginTop: 10,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.10)",
              backgroundColor: "#fff",
              paddingHorizontal: 12,
              paddingVertical: 10,
            }}
          >
            <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="¿Qué pasa por tu mente hoy?"
              placeholderTextColor={tokens.colors.mutedText}
              style={{
                minHeight: 56,
                color: tokens.colors.text,
              }}
              multiline
            />
          </View>

          <View style={{ marginTop: 14 }}>
            <AppButton
              label="Guardar estado de ánimo"
              onPress={() => console.log("save mood", { selectedMood, note })}
              disabled={!canSave}
            />
          </View>
        </View>

        {/* Próxima sesión */}
        <View
          style={{
            marginTop: 16,
            borderRadius: 18,
            padding: 16,
            backgroundColor: "#2D936C",
          }}
        >
          <AppText style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>
            Próxima sesión
          </AppText>

          <View
            style={{
              marginTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View style={{ flex: 1 }}>
              <AppText style={{ color: "#fff", fontSize: 16, fontWeight: "800" }}>
                Ps. Silvia Cardozo
              </AppText>
              <AppText style={{ color: "rgba(255,255,255,0.85)", marginTop: 2 }}>
                Psicóloga TCC
              </AppText>

              <View style={{ flexDirection: "row", gap: 12, marginTop: 10 }}>
                <AppText style={{ color: "rgba(255,255,255,0.9)" }}>
                  📅 Mañana, 2:00 PM
                </AppText>
                <AppText style={{ color: "rgba(255,255,255,0.9)" }}>
                  🎥 Zoom
                </AppText>
              </View>
            </View>

            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                backgroundColor: "rgba(255,255,255,0.25)",
              }}
            />
          </View>

          <View style={{ marginTop: 14, flexDirection: "row", gap: 10 }}>
            <TouchableOpacity
              onPress={() => console.log("comenzar sesión")}
              style={{
                flex: 1,
                height: 44,
                borderRadius: 12,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText style={{ color: tokens.colors.primary, fontWeight: "800" }}>
                Comenzar sesión
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("más opciones")}
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: "rgba(255,255,255,0.20)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText style={{ color: "#fff", fontSize: 18 }}>⋯</AppText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Accesos rápidos */}
        <View style={{ marginTop: 16, flexDirection: "row", gap: 12 }}>
          {[
            { label: "Nueva sesión", icon: "📅" },
            { label: "AI de apoyo", icon: "🤖" },
            { label: "Seminarios", icon: "👥" },
          ].map((item) => (
            <TouchableOpacity
              key={item.label}
              onPress={() => console.log(item.label)}
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 16,
                paddingVertical: 14,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.06)",
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 4 },
              }}
            >
              <View
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  backgroundColor: "rgba(45,147,108,0.12)",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <AppText style={{ fontSize: 16 }}>{item.icon}</AppText>
              </View>
              <AppText style={{ fontWeight: "700" }}>{item.label}</AppText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Ejercicios sugeridos */}
        <View style={{ marginTop: 18 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 10,
            }}
          >
            <AppText style={{ fontSize: 16, fontWeight: "800" }}>
              Ejercicios sugeridos
            </AppText>
            <TouchableOpacity onPress={() => console.log("ver todas")}>
              <AppText style={{ color: tokens.colors.primary }}>Ver todas</AppText>
            </TouchableOpacity>
          </View>

          {[
            { title: "Respiraciones", subtitle: "Recomendadas por Silvia", icon: "🫁" },
            { title: "Escribir emociones", subtitle: "Recomendado por IA", icon: "✍️" },
            { title: "Meditación", subtitle: "Recomendado por Jose", icon: "🧘" },
          ].map((it) => (
            <View
              key={it.title}
              style={{
                backgroundColor: "#fff",
                borderRadius: 14,
                padding: 14,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.06)",
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
                    backgroundColor: "rgba(45,147,108,0.12)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AppText style={{ fontSize: 18 }}>{it.icon}</AppText>
                </View>
                <View>
                  <AppText style={{ fontWeight: "800" }}>{it.title}</AppText>
                  <AppText style={{ color: tokens.colors.mutedText, marginTop: 2 }}>
                    {it.subtitle}
                  </AppText>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => console.log("play", it.title)}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  backgroundColor: "rgba(45,147,108,0.12)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText>▶️</AppText>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Lectura del día */}
        <View style={{ marginTop: 8 }}>
          <AppText style={{ fontSize: 16, fontWeight: "800", marginBottom: 10 }}>
            Lectura del día
          </AppText>

          <View
            style={{
              borderRadius: 18,
              padding: 16,
              backgroundColor: "#2D936C",
            }}
          >
            <AppText style={{ color: "rgba(255,255,255,0.85)" }}>⏱ 5 minutos</AppText>
            <AppText style={{ color: "#fff", fontSize: 18, fontWeight: "900", marginTop: 8 }}>
              Entendiendo tus emociones y pensamientos
            </AppText>
            <AppText style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>
              Aprende a entender el origen de tus emociones y a manejarlas de forma sana.
            </AppText>

            <View style={{ marginTop: 14, alignItems: "flex-start" }}>
              <TouchableOpacity
                onPress={() => console.log("leer ahora")}
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 14,
                  height: 40,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText style={{ color: tokens.colors.primary, fontWeight: "800" }}>
                  Leer ahora
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Seminario */}
        <View
          style={{
            marginTop: 16,
            backgroundColor: "#fff",
            borderRadius: 18,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.06)",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                backgroundColor: "rgba(45,147,108,0.12)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText style={{ fontSize: 18 }}>👥</AppText>
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                <View
                  style={{
                    paddingHorizontal: 10,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "rgba(0,0,0,0.06)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AppText style={{ fontSize: 12, fontWeight: "700" }}>Semanal</AppText>
                </View>
                <AppText style={{ color: tokens.colors.mutedText, fontSize: 12 }}>
                  Todos los martes
                </AppText>
              </View>

              <AppText style={{ fontWeight: "900", marginTop: 8 }}>
                Seminario de Psicoeducación
              </AppText>
              <AppText style={{ color: tokens.colors.mutedText, marginTop: 4 }}>
                Sumate a las clases de psicoeducación guiadas por profesionales, con espacio final para dudas y preguntas.
              </AppText>
            </View>
          </View>

          <View style={{ marginTop: 14 }}>
            <TouchableOpacity
              onPress={() => console.log("inscribirme")}
              style={{
                height: 44,
                borderRadius: 12,
                backgroundColor: tokens.colors.secondary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText style={{ color: "#fff", fontWeight: "900" }}>
                Inscribirme ahora
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
