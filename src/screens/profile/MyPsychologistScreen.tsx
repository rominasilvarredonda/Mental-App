import { useState } from "react";
import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import type { ProfileStackParamList } from "../../navigation/ProfileStack";

type Props = NativeStackScreenProps<ProfileStackParamList, "MyPsychologist">;

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  value: string;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10, marginTop: 12 }}>
      <View
        style={{
          width: 38,
          height: 38,
          borderRadius: 14,
          backgroundColor: "rgba(5,50,37,0.12)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name={icon} size={18} color={tokens.colors.primary} />
      </View>

      <View style={{ flex: 1 }}>
        <AppText style={{ fontSize: 12, color: tokens.colors.mutedText, fontWeight: "800" }}>
          {label.toUpperCase()}
        </AppText>
        <AppText style={{ marginTop: 4, fontWeight: "900", lineHeight: 20 }}>
          {value}
        </AppText>
      </View>
    </View>
  );
}

export function MyPsychologistScreen({ navigation }: Props) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  // Mock data (dsp viene de backend)
  const psychologist = {
    name: "Ps. Silvia Cardozo",
    approach: "TCC (Terapia Cognitivo Conductual)",
    specialty: "Ansiedad, estrés y hábitos",
    experience: "8 años de experiencia",
    languages: "Español",
    modality: "Zoom",
    bio:
      "Te acompaño con herramientas prácticas para que puedas entender lo que sentís y transformar tus patrones de pensamiento con ejercicios simples y sostenibles.",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tokens.colors.bg }} edges={["top"]}>
      {/* Header */}
      <View style={{ paddingHorizontal: 20, paddingTop: 12, flexDirection: "row", alignItems: "center", gap: 12 }}>
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
          <AppText style={{ fontSize: 18, fontWeight: "900" }}>Mi psicólogo</AppText>
          <AppText style={{ marginTop: 2, color: tokens.colors.mutedText }}>
            Conocé a tu profesional asignado.
          </AppText>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 28 }}>
        {/* Card principal */}
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(83,104,149,0.14)",
            shadowColor: tokens.colors.primary,
            shadowOpacity: 0.06,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 6 },
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            {/* Avatar */}
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                backgroundColor: "rgba(90,110,150,0.18)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="user" size={22} color={tokens.colors.secondary} />
            </View>

            <View style={{ flex: 1 }}>
              <AppText style={{ fontSize: 18, fontWeight: "900" }}>{psychologist.name}</AppText>
              <AppText style={{ marginTop: 4, color: tokens.colors.mutedText }}>
                {psychologist.approach}
              </AppText>
            </View>
          </View>

          <View
            style={{
              marginTop: 14,
              backgroundColor: "rgba(174,197,235,0.16)",
              borderRadius: 16,
              padding: 14,
            }}
          >
            <AppText style={{ fontWeight: "900", marginBottom: 6 }}>Sobre mí</AppText>
            <AppText style={{ color: tokens.colors.mutedText, lineHeight: 20 }}>
              {psychologist.bio}
            </AppText>
          </View>

          <InfoRow icon="target" label="Especialidad" value={psychologist.specialty} />
          <InfoRow icon="award" label="Experiencia" value={psychologist.experience} />
          <InfoRow icon="message-circle" label="Idiomas" value={psychologist.languages} />
          <InfoRow icon="video" label="Modalidad" value={psychologist.modality} />

          {requestSent ? (
            <View
              style={{
                marginTop: 16,
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 12,
                backgroundColor: "rgba(5,50,37,0.10)",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Feather name="check-circle" size={18} color={tokens.colors.primary} />
              <AppText style={{ color: tokens.colors.primary, fontWeight: "900" }}>
                Solicitud de cambio enviada
              </AppText>
            </View>
          ) : null}
        </View>

        {/* CTA cambiar psicólogo */}
        <TouchableOpacity
          onPress={() => setConfirmOpen(true)}
          activeOpacity={0.9}
          style={{
            marginTop: 14,
            height: 54,
            borderRadius: 16,
            backgroundColor: tokens.colors.secondary,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Feather name="repeat" size={18} color="#fff" />
          <AppText style={{ color: "#fff", fontWeight: "900", fontSize: 16 }}>
            Solicitar cambio de psicólogo
          </AppText>
        </TouchableOpacity>

        <AppText style={{ marginTop: 10, color: tokens.colors.mutedText, fontSize: 12, lineHeight: 16 }}>
          *El cambio puede demorar 24-48 hs y está sujeto a disponibilidad.
        </AppText>
      </ScrollView>

      {/* Modal confirmación */}
      <Modal visible={confirmOpen} transparent animationType="fade" onRequestClose={() => setConfirmOpen(false)}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.35)", padding: 20, justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 18,
              padding: 16,
              borderWidth: 1,
              borderColor: "rgba(83,104,149,0.14)",
            }}
          >
            <AppText style={{ fontSize: 16, fontWeight: "900" }}>
              ¿Solicitar cambio de psicólogo?
            </AppText>

            <AppText style={{ marginTop: 8, color: tokens.colors.mutedText, lineHeight: 20 }}>
              Vamos a enviar tu solicitud. Un miembro del equipo te contactará si necesitamos más información.
            </AppText>

            <View style={{ marginTop: 14, flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={() => setConfirmOpen(false)}
                activeOpacity={0.9}
                style={{
                  flex: 1,
                  height: 50,
                  borderRadius: 16,
                  backgroundColor: "rgba(174,197,235,0.16)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>
                  Cancelar
                </AppText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setConfirmOpen(false);
                  setRequestSent(true);
                  console.log("Solicitar cambio psicólogo");
                }}
                activeOpacity={0.9}
                style={{
                  flex: 1,
                  height: 50,
                  borderRadius: 16,
                  backgroundColor: tokens.colors.primary,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText style={{ fontWeight: "900", color: "#fff" }}>
                  Confirmar
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
