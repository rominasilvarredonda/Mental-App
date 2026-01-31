import { Modal, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { tokens } from "../../theme/tokens";
import { AppText } from "../ui/AppText";

type Props = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  iconName?: keyof typeof Feather.glyphMap;
};

export function ComingSoonModal({
  visible,
  onClose,
  title = "Próximamente",
  description = "Esta función todavía no está disponible, pero lo estará muy pronto.",
  iconName = "info",
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
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
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              backgroundColor: "rgba(45,147,108,0.12)",
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
            {description}
          </AppText>

          <TouchableOpacity
            onPress={onClose}
            style={{
              marginTop: 18,
              height: 46,
              paddingHorizontal: 24,
              borderRadius: 14,
              backgroundColor: tokens.colors.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppText style={{ color: "#fff", fontWeight: "900" }}>
              Entendido
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
