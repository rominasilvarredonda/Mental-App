import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { AppButton } from "../../components/ui/AppButton";
import { useState } from "react";
import { ComingSoonModal } from "../../components/common/ComingSoonModal";
import { ConfirmModal } from "../../components/common/ConfirmModal";

export function SeminarsScreen() {
  const userAttendedLast = true;
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [registerConfirmOpen, setRegisterConfirmOpen] = useState(false);
  const [userIsRegisteredForNext, setUserIsRegisteredForNext] = useState(false);
  const nextSeminar = {
    topic: "Psicoeducación emocional",
    date: "22 de Febrero",
    time: "18:00 hs",
    professional: "Ps. Silvia Cardozo",
  };
  const [comingSoonType, setComingSoonType] = useState<
    "material" | "recording" | "nextMaterial"
  >("material");

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: tokens.colors.bg }}
      edges={["top"]}
    >
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 32 }}>
        {/* ===== Seminario anterior ===== */}
        <View
          style={{
            backgroundColor: "rgba(174,197,235,0.16)",
            borderRadius: 18,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(83,104,149,0.14)",
            marginBottom: 20,
          }}
        >
          <AppText
            style={{
              fontSize: 12,
              fontWeight: "800",
              letterSpacing: 1,
              color: tokens.colors.mutedText,
            }}
          >
            SEMINARIO ANTERIOR · COMPLETADO
          </AppText>

          <AppText
            style={{
              marginTop: 12,
              fontSize: 18,
              fontWeight: "900",
              color: tokens.colors.text,
            }}
          >
            Cómo manejar la ansiedad cotidiana
          </AppText>

          <AppText style={{ marginTop: 6, color: tokens.colors.mutedText }}>
            Ps. Laura Méndez · 10 de Enero · 18:00 hs
          </AppText>

          <AppText
            style={{
              marginTop: 10,
              color: tokens.colors.mutedText,
              lineHeight: 20,
            }}
          >
            Técnicas prácticas para identificar, entender y regular la ansiedad
            en el día a día.
          </AppText>

          {userAttendedLast && (
            <View style={{ marginTop: 14, flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={() => setComingSoonOpen(true)}
                style={{
                  height: 40,
                  paddingHorizontal: 14,
                  borderRadius: 12,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "rgba(83,104,149,0.16)",
                }}
              >
                <AppText style={{ fontWeight: "800" }}>Ver grabación</AppText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setComingSoonOpen(true)}
                style={{
                  height: 40,
                  paddingHorizontal: 14,
                  borderRadius: 12,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "rgba(83,104,149,0.16)",
                }}
              >
                <AppText style={{ fontWeight: "800" }}>Material</AppText>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* ===== Próximo seminario ===== */}
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 18,
            borderWidth: 1,
            borderColor: "rgba(83,104,149,0.14)",
            shadowColor: tokens.colors.primary,
            shadowOpacity: 0.08,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
          }}
        >
          <AppText
            style={{
              fontSize: 12,
              fontWeight: "800",
              letterSpacing: 1,
              color: tokens.colors.primary,
            }}
          >
            PRÓXIMO SEMINARIO
          </AppText>

          <AppText
            style={{
              marginTop: 12,
              fontSize: 22,
              fontWeight: "900",
              color: tokens.colors.text,
            }}
          >
            Psicoeducación emocional
          </AppText>

          <AppText style={{ marginTop: 6, color: tokens.colors.mutedText }}>
            Ps. Silvia Cardozo · 22 de Febrero · 18:00 hs
          </AppText>

          <AppText
            style={{
              marginTop: 12,
              color: tokens.colors.text,
              lineHeight: 22,
            }}
          >
            Un espacio para comprender cómo funcionan nuestras emociones,
            aprender a interpretarlas y desarrollar recursos para manejarlas
            mejor en la vida cotidiana.
          </AppText>

          <View
            style={{
              marginTop: 14,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Feather
              name={userIsRegisteredForNext ? "check-circle" : "info"}
              size={16}
              color={
                userIsRegisteredForNext
                  ? tokens.colors.primary
                  : tokens.colors.mutedText
              }
            />
            <AppText style={{ fontWeight: "700" }}>
              {userIsRegisteredForNext
                ? "Ya estás inscripto"
                : "Todavía no estás inscripto"}
            </AppText>
          </View>

          <View style={{ marginTop: 18 }}>
            {userIsRegisteredForNext ? (
              <AppButton
                label="Acceder al material"
                onPress={() => {
                  setComingSoonType("material");
                  setComingSoonOpen(true);
                }}
              />
            ) : (
              <AppButton
                label="Inscribirme al seminario"
                onPress={() => setRegisterConfirmOpen(true)}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <ComingSoonModal
        visible={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
      />
      <ConfirmModal
        visible={registerConfirmOpen}
        title="Confirmar inscripción"
        message={`¿Estás seguro que deseás inscribirte al seminario "${nextSeminar.topic}" el ${nextSeminar.date} a las ${nextSeminar.time} con ${nextSeminar.professional}?`}
        confirmLabel="Confirmar"
        cancelLabel="Cancelar"
        iconName="user-check"
        onCancel={() => setRegisterConfirmOpen(false)}
        onConfirm={() => {
          setRegisterConfirmOpen(false);
          setUserIsRegisteredForNext(true);
          console.log("Usuario inscripto al seminario");
        }}
      />
    </SafeAreaView>
  );
}
