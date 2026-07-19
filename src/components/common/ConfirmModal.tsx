import { Modal, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { tokens } from "../../theme/tokens";
import { AppText } from "../ui/AppText";

type Props = {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  iconName?: keyof typeof Feather.glyphMap;
};

export function ConfirmModal({
  visible,
  title,
  message,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
  iconName = "check-circle",
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.35)",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                backgroundColor: "rgba(5,50,37,0.12)",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <Feather name={iconName} size={22} color={tokens.colors.primary} />
            </View>

            <AppText style={{ fontSize: 18, fontWeight: "900", textAlign: "center" }}>
              {title}
            </AppText>

            <AppText
              style={{
                marginTop: 8,
                color: tokens.colors.mutedText,
                textAlign: "center",
                lineHeight: 20,
              }}
            >
              {message}
            </AppText>
          </View>

          <View style={{ marginTop: 18, flexDirection: "row", gap: 10 }}>
            <TouchableOpacity
              onPress={onCancel}
              style={{
                flex: 1,
                height: 46,
                borderRadius: 14,
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "rgba(83,104,149,0.20)",
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOpacity={0.9}
            >
              <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>
                {cancelLabel}
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onConfirm}
              style={{
                flex: 1,
                height: 46,
                borderRadius: 14,
                backgroundColor: tokens.colors.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOpacity={0.9}
            >
              <AppText style={{ fontWeight: "900", color: "#fff" }}>
                {confirmLabel}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
