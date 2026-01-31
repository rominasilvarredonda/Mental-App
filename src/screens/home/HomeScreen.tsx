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
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


type Mood = {
    id: string;
    label: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
  };
  
  const MOODS: Mood[] = [
    { id: "great", label: "Genial", icon: "emoticon-excited-outline" },
    { id: "good", label: "Bien", icon: "emoticon-happy-outline" },
    { id: "ok", label: "Ok", icon: "emoticon-neutral-outline" },
    { id: "bad", label: "Mal", icon: "emoticon-sad-outline" },
    { id: "awful", label: "Muy mal", icon: "emoticon-cry-outline" },
  ];
  

export function HomeScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [moodSaved, setMoodSaved] = useState(false);
  const progress = 0.75; // 75%

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
            <Feather name="bell" size={18} color={tokens.colors.text} />
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
          {!moodSaved ? (
            <>
              <AppText style={{ fontSize: 18, fontWeight: "800" }}>
                ¿Cómo te sentís hoy?
              </AppText>
              <AppText style={{ color: tokens.colors.mutedText, marginTop: 4 }}>
                Selecciona tu estado de ánimo
              </AppText>

              <View style={{ flexDirection: "row", gap: 10, marginTop: 14 }}>
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
                        backgroundColor: active
                          ? "rgba(45,147,108,0.18)"
                          : "#FFFFFF",
                        borderWidth: 1,
                        borderColor: active
                          ? tokens.colors.primary
                          : "rgba(0,0,0,0.08)",
                      }}
                    >
                      <MaterialCommunityIcons
  name={m.icon}
  size={24}
  color={active ? tokens.colors.primary : tokens.colors.mutedText}
/>

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
                  onPress={() => {
                    console.log("save mood", { selectedMood, note });
                    setMoodSaved(true);
                  }}
                  disabled={!canSave}
                />
              </View>
            </>
          ) : (
            <>
              {/* Card "Completado" como tu imagen */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1 }}>
                  <AppText
                    style={{
                      color: tokens.colors.mutedText,
                      letterSpacing: 1,
                      fontSize: 12,
                    }}
                  >
                    REGISTRO EMOCIONAL
                  </AppText>

                  <AppText
                    style={{
                      fontSize: 30,
                      lineHeight: 35,
                      marginTop: 20,
                      color: tokens.colors.text,
                    }}
                  >
                    Completado
                  </AppText>
                </View>

                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 27,
                    backgroundColor: tokens.colors.primary,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="check" size={20} color="#fff" />
                </View>
              </View>

              {/* Barra de progreso + % */}
              <View
                style={{
                  marginTop: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: "rgba(0,0,0,0.06)",
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      width: `${Math.round(progress * 100)}%`,
                      height: "100%",
                      borderRadius: 999,
                      backgroundColor: tokens.colors.secondary,
                    }}
                  />
                </View>

                <AppText
                  style={{
                    fontSize: 18,
                    fontWeight: "900",
                    color: tokens.colors.secondary,
                  }}
                >
                  {Math.round(progress * 100)}%
                </AppText>
              </View>

              {/* (Opcional) botón para volver a editar */}
              <TouchableOpacity
                onPress={() => setMoodSaved(false)}
                style={{ marginTop: 14, alignSelf: "flex-start" }}
              >
                <AppText
                  style={{ color: tokens.colors.primary, fontWeight: "800" }}
                >
                  Editar
                </AppText>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Próxima sesión */}
        <LinearGradient
          colors={[tokens.colors.primary, tokens.colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            marginTop: 16,
            borderRadius: 18,
            padding: 16,
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
              <AppText
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontFamily: "OpenSans_700Bold",
                }}
              >
                Ps. Silvia Cardozo
              </AppText>
              <AppText
                style={{ color: "rgba(255,255,255,0.85)", marginTop: 2 }}
              >
                Psicóloga TCC
              </AppText>

              <View style={{ flexDirection: "row", gap: 12, marginTop: 10 }}>
                <View style={{ flexDirection: "row", gap: 12, marginTop: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Feather
                      name="calendar"
                      size={14}
                      color="rgba(255,255,255,0.9)"
                    />
                    <AppText style={{ color: "rgba(255,255,255,0.9)" }}>
                      Mañana, 2:00 PM
                    </AppText>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Feather
                      name="video"
                      size={14}
                      color="rgba(255,255,255,0.9)"
                    />
                    <AppText style={{ color: "rgba(255,255,255,0.9)" }}>
                      Zoom
                    </AppText>
                  </View>
                </View>
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
              <AppText
                style={{ color: tokens.colors.primary, fontWeight: "800" }}
              >
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
              <Feather name="more-horizontal" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Accesos rápidos */}
        <View style={{ marginTop: 16, flexDirection: "row", gap: 12 }}>
          {[
            { label: "Nueva sesión", icon: "calendar" as const },
            { label: "AI de apoyo", icon: "message-circle" as const },
            { label: "Seminarios", icon: "users" as const },
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
                <Feather
                  name={item.icon}
                  size={16}
                  color={tokens.colors.primary}
                />
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
            <AppText style={{ fontSize: 16, fontFamily: "OpenSans_700Bold" }}>
              Ejercicios sugeridos
            </AppText>
            <TouchableOpacity onPress={() => console.log("ver todas")}>
              <AppText style={{ color: tokens.colors.primary }}>
                Ver todas
              </AppText>
            </TouchableOpacity>
          </View>

          {[
            {
              title: "Respiraciones",
              subtitle: "Recomendadas por Silvia",
              icon: "wind" as const,
            },
            {
              title: "Escribir emociones",
              subtitle: "Recomendado por IA",
              icon: "edit-3" as const,
            },
            {
              title: "Meditación",
              subtitle: "Recomendado por Jose",
              icon: "moon" as const,
            },
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
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
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
<Feather name={it.icon} size={18} color={tokens.colors.primary} />
</View>
                <View>
                  <AppText style={{ fontWeight: "800" }}>{it.title}</AppText>
                  <AppText
                    style={{ color: tokens.colors.mutedText, marginTop: 2 }}
                  >
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
<Feather name="play" size={16} color={tokens.colors.primary} />
</TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Lectura del día */}
        <View style={{ marginTop: 8 }}>
          <AppText
            style={{
              fontSize: 16,
              fontFamily: "OpenSans_700Bold",
              marginBottom: 10,
            }}
          >
            Lectura del día
          </AppText>

          <LinearGradient
            colors={[tokens.colors.primary, tokens.colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 18,
              padding: 16,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
  <Feather name="clock" size={14} color="rgba(255,255,255,0.85)" />
  <AppText style={{ color: "rgba(255,255,255,0.85)" }}>
    5 minutos
  </AppText>
</View>

            <AppText
              style={{
                color: "#fff",
                fontSize: 20,
                fontFamily: "OpenSans_700Bold",
                marginTop: 22,
              }}
            >
              Entendiendo tus emociones y pensamientos
            </AppText>

            <AppText
              style={{
                color: "rgba(255,255,255,0.85)",
                marginTop: 8,
              }}
            >
              Aprende a entender el origen de tus emociones y a manejarlas de
              forma sana.
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
                <AppText
                  style={{ color: tokens.colors.primary, fontWeight: "800" }}
                >
                  Leer ahora
                </AppText>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Seminario */}
        <View
          style={{
            marginTop: 16,
            backgroundColor: "#fff",
            borderRadius: 22,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.06)",
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 8 },
          }}
        >
          {/* Top row: icon + meta */}
          <View style={{ flexDirection: "row", gap: 12 }}>
            {/* Icon square */}
            <View
              style={{
                width: 62,
                height: 62,
                borderRadius: 16,
                backgroundColor: tokens.colors.secondary,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOpacity: 0.18,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 6 },
              }}
            >
<Feather name="users" size={20} color="#fff" />
</View>

            <View style={{ flex: 1 }}>
              {/* Chip + day */}
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <View
                  style={{
                    paddingHorizontal: 12,
                    height: 26,
                    borderRadius: 13,
                    backgroundColor: "rgba(90,110,150,0.18)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AppText
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: tokens.colors.secondary,
                    }}
                  >
                    Semanal
                  </AppText>
                </View>

                <AppText
                  style={{ color: tokens.colors.mutedText, fontSize: 12 }}
                >
                  Todos los Martes
                </AppText>
              </View>

              {/* Title */}
              <AppText
                style={{
                  marginTop: 16,
                  fontSize: 21,
                  lineHeight: 24,
                  fontFamily: "OpenSans_700Bold",
                  color: tokens.colors.text,
                }}
              >
                Seminario de{"\n"}Psicoeducación
              </AppText>

              {/* Description */}
              <AppText
                style={{
                  marginTop: 10,
                  color: tokens.colors.mutedText,
                  lineHeight: 20,
                }}
              >
                Sumate a las clases de psicoeducación guiadas por profesionales,
                con un espacio final para dudas y preguntas.
              </AppText>
            </View>
          </View>

          {/* Grey info box */}
          <View
            style={{
              marginTop: 16,
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: 16,
              paddingVertical: 14,
              paddingHorizontal: 14,
            }}
          >
            {/* Row 1 */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 26, alignItems: "center" }}>
              <Feather name="calendar" size={16} color={tokens.colors.mutedText} />
              </View>
              <AppText
                style={{
                  color: tokens.colors.mutedText,
                  marginLeft: 8,
                  flex: 1,
                  fontWeight: "700",
                }}
              >
                Proxima sesión
              </AppText>
              <AppText style={{ fontWeight: "800", color: tokens.colors.text }}>
                Junio 16, 2026
              </AppText>
            </View>

            {/* Row 2 */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View style={{ width: 26, alignItems: "center" }}>
              <Feather name="clock" size={16} color={tokens.colors.mutedText} />
              </View>
              <AppText
                style={{
                  color: tokens.colors.mutedText,
                  marginLeft: 8,
                  flex: 1,
                  fontWeight: "700",
                }}
              >
                Hora
              </AppText>
              <AppText style={{ fontWeight: "800", color: tokens.colors.text }}>
                6:00 PM - 7:30 PM
              </AppText>
            </View>
          </View>

          {/* Members row */}
          <View
            style={{
              marginTop: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Avatars stack */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "rgba(45,147,108,0.35)",
                  borderWidth: 2,
                  borderColor: "#fff",
                }}
              />
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "rgba(90,110,150,0.35)",
                  marginLeft: -10,
                  borderWidth: 2,
                  borderColor: "#fff",
                }}
              />
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "rgba(90,110,150,0.55)",
                  marginLeft: -10,
                  borderWidth: 2,
                  borderColor: "#fff",
                }}
              />
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: tokens.colors.secondary,
                  marginLeft: -10,
                  borderWidth: 2,
                  borderColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText
                  style={{ color: "#fff", fontSize: 12, fontWeight: "800" }}
                >
                  +12
                </AppText>
              </View>
            </View>

            <AppText
              style={{
                marginLeft: 10,
                color: tokens.colors.mutedText,
                fontWeight: "600",
              }}
            >
              15 miembros inscriptos
            </AppText>
          </View>

          {/* CTA button */}
          <TouchableOpacity
            onPress={() => console.log("inscribirme ahora")}
            style={{
              marginTop: 14,
              height: 54,
              borderRadius: 16,
              backgroundColor: tokens.colors.secondary,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOpacity: 0.18,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 8 },
              flexDirection: "row",
              gap: 10,
            }}
          >
            <AppText style={{ color: "#fff", fontWeight: "900", fontSize: 16 }}>
              Inscribirme ahora
            </AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
