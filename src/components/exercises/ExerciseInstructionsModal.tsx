import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { tokens } from "../../theme/tokens";
import { AppText } from "../ui/AppText";

export type ExerciseModalData = {
  title: string;
  suggestedBy: string;
  preparation: string;
  steps: string[];
};

type Props = {
  visible: boolean;
  data: ExerciseModalData | null;
  onClose: () => void;
  onComplete: () => void;
};

export function ExerciseInstructionsModal({
  visible,
  data,
  onClose,
  onComplete,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      {/* Overlay */}
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.35)",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.06)",
          }}
        >
          {/* Header */}
          <View style={{ padding: 16, flexDirection: "row", alignItems: "center", gap: 10 }}>
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
              <Feather name="activity" size={18} color={tokens.colors.primary} />
            </View>

            <View style={{ flex: 1 }}>
              <AppText style={{ fontSize: 16, fontWeight: "900" }}>
                {data?.title ?? "Ejercicio"}
              </AppText>
              <AppText style={{ color: tokens.colors.mutedText, marginTop: 2 }}>
                Sugerido por: {data?.suggestedBy ?? "-"}
              </AppText>
            </View>

            <TouchableOpacity
              onPress={onClose}
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.04)",
              }}
            >
              <Feather name="x" size={18} color={tokens.colors.text} />
            </TouchableOpacity>
          </View>

          {/* Body */}
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 14 }}
            showsVerticalScrollIndicator={false}
          >
            <Section title="Preparación">
              <AppText style={{ color: tokens.colors.text, lineHeight: 20 }}>
                {data?.preparation ?? "-"}
              </AppText>
            </Section>

            <Section title="Instrucción paso a paso">
              {(data?.steps ?? []).map((s, idx) => (
                <View key={`${idx}-${s}`} style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
                  <View
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 11,
                      backgroundColor: "rgba(45,147,108,0.14)",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 1,
                    }}
                  >
                    <AppText style={{ fontWeight: "900", color: tokens.colors.primary, fontSize: 12 }}>
                      {idx + 1}
                    </AppText>
                  </View>
                  <AppText style={{ flex: 1, color: tokens.colors.text, lineHeight: 20 }}>
                    {s}
                  </AppText>
                </View>
              ))}
            </Section>
          </ScrollView>

          {/* Footer buttons */}
          <View style={{ padding: 16, flexDirection: "row", gap: 10, borderTopWidth: 1, borderTopColor: "rgba(0,0,0,0.06)" }}>
            <TouchableOpacity
              onPress={onClose}
              style={{
                flex: 1,
                height: 48,
                borderRadius: 14,
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.10)",
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOpacity={0.9}
            >
              <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>
                Cancelar
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onComplete}
              style={{
                flex: 1,
                height: 48,
                borderRadius: 14,
                backgroundColor: tokens.colors.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOpacity={0.9}
            >
              <AppText style={{ fontWeight: "900", color: "#fff" }}>
                Marcar como completado
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={{ marginTop: 14 }}>
      <AppText style={{ fontWeight: "900", marginBottom: 8, color: tokens.colors.text }}>
        {title}
      </AppText>
      {children}
    </View>
  );
}
