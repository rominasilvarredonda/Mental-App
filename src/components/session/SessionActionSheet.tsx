import React from "react";
import { Modal, Pressable, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { tokens } from "../../theme/tokens";
import { AppText } from "../ui/AppText";

type Props = {
  visible: boolean;
  onClose: () => void;
  onCancelSession: () => void;
  onChangeDate: () => void;
};

export function SessionActionSheet({
  visible,
  onClose,
  onCancelSession,
  onChangeDate,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      {/* Overlay */}
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.28)",
          justifyContent: "flex-end",
        }}
      >
        {/* Sheet */}
        <Pressable
          onPress={() => {}}
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            padding: 14,
            paddingBottom: 18,
          }}
        >
          {/* Handle */}
          <View
            style={{
              alignSelf: "center",
              width: 44,
              height: 5,
              borderRadius: 999,
              backgroundColor: "rgba(0,0,0,0.12)",
              marginBottom: 12,
            }}
          />

          <AppText style={{ fontSize: 14, fontWeight: "800", marginBottom: 10 }}>
            Opciones de sesión
          </AppText>

          {/* Cancelar sesión */}
          <TouchableOpacity
            onPress={() => {
              onClose();
              onCancelSession();
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              paddingVertical: 14,
              paddingHorizontal: 12,
              borderRadius: 16,
              backgroundColor: "rgba(0,0,0,0.03)",
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.06)",
            }}
            activeOpacity={0.85}
          >
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 14,
                backgroundColor: "rgba(220,38,38,0.10)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="x-circle" size={18} color="#DC2626" />
            </View>

            <View style={{ flex: 1 }}>
              <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>
                Cancelar la sesión
              </AppText>
              <AppText style={{ color: tokens.colors.mutedText, marginTop: 2 }}>
                Se liberará el horario y te avisaremos.
              </AppText>
            </View>
          </TouchableOpacity>

          {/* Cambiar fecha */}
          <TouchableOpacity
            onPress={() => {
              onClose();
              onChangeDate();
            }}
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              paddingVertical: 14,
              paddingHorizontal: 12,
              borderRadius: 16,
              backgroundColor: "rgba(0,0,0,0.03)",
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.06)",
            }}
            activeOpacity={0.85}
          >
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 14,
                backgroundColor: "rgba(45,147,108,0.12)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="calendar" size={18} color={tokens.colors.primary} />
            </View>

            <View style={{ flex: 1 }}>
              <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>
                Cambiar fecha
              </AppText>
              <AppText style={{ color: tokens.colors.mutedText, marginTop: 2 }}>
                Elegí otro día y horario disponible.
              </AppText>
            </View>
          </TouchableOpacity>

          {/* Cerrar */}
          <TouchableOpacity
            onPress={onClose}
            style={{
              marginTop: 12,
              height: 52,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.10)",
            }}
            activeOpacity={0.9}
          >
            <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>
              Cerrar
            </AppText>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
