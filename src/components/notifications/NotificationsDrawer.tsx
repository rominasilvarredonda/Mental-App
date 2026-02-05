// src/components/notifications/NotificationsDrawer.tsx
import { useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { tokens } from "../../theme/tokens";
import { AppText } from "../ui/AppText";

type NotificationItem = {
  id: string;
  title: string;
  subtitle?: string;
  icon: keyof typeof Feather.glyphMap;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  items?: NotificationItem[];
};

const DEFAULT_ITEMS: NotificationItem[] = [
  {
    id: "mood",
    title: "Recordá registrar tu estado de ánimo",
    subtitle: "Te toma 30 segundos y ayuda a tu seguimiento.",
    icon: "smile",
  },
  {
    id: "reading",
    title: "Recordá hacer tu lectura diaria",
    subtitle: "5 minutos de psicoeducación para tu día.",
    icon: "book-open",
  },
];

export function NotificationsDrawer({ visible, onClose, items }: Props) {
  const insets = useSafeAreaInsets();

  const data = items ?? DEFAULT_ITEMS;

  const screenW = Dimensions.get("window").width;
  const drawerW = Math.min(360, Math.round(screenW * 0.86));

  const slide = useRef(new Animated.Value(drawerW)).current; // empieza fuera
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fade, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.timing(slide, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // reset para la próxima apertura
      slide.setValue(drawerW);
      fade.setValue(0);
    }
  }, [visible, drawerW, fade, slide]);

  const closeWithAnim = () => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 0,
        duration: 160,
        useNativeDriver: true,
      }),
      Animated.timing(slide, {
        toValue: drawerW,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) onClose();
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={closeWithAnim}
    >
      {/* Overlay */}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.35)",
          opacity: fade,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={closeWithAnim}
        />
      </Animated.View>

      {/* Drawer */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: drawerW,
          transform: [{ translateX: slide }],
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderTopLeftRadius: 22,
            borderBottomLeftRadius: 22,
            paddingTop: insets.top + 12,
            paddingBottom: insets.bottom + 10,
            paddingHorizontal: 16,
            borderLeftWidth: 1,
            borderLeftColor: "rgba(0,0,0,0.06)",
          }}
        >
          {/* Header */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppText style={{ fontSize: 18, fontWeight: "900", flex: 1 }}>
              Notificaciones
            </AppText>

            <TouchableOpacity
              onPress={closeWithAnim}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.04)",
              }}
              activeOpacity={0.9}
            >
              <Feather name="x" size={18} color={tokens.colors.text} />
            </TouchableOpacity>
          </View>

          <AppText style={{ marginTop: 6, color: tokens.colors.mutedText }}>
            Tus recordatorios y novedades.
          </AppText>

          {/* List */}
          <View style={{ marginTop: 14, gap: 10 }}>
            {data.map((n) => (
              <View
                key={n.id}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: "rgba(0,0,0,0.06)",
                  shadowColor: "#000",
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  shadowOffset: { width: 0, height: 4 },
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "center",
                }}
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
                  <Feather
                    name={n.icon}
                    size={18}
                    color={tokens.colors.primary}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <AppText style={{ fontWeight: "900" }}>{n.title}</AppText>
                  {n.subtitle ? (
                    <AppText
                      style={{
                        marginTop: 2,
                        color: tokens.colors.mutedText,
                        lineHeight: 18,
                      }}
                    >
                      {n.subtitle}
                    </AppText>
                  ) : null}
                </View>
              </View>
            ))}
          </View>

          {/* Footer */}
          <View style={{ marginTop: "auto", paddingTop: 12 }}>
            <TouchableOpacity
              onPress={closeWithAnim}
              style={{
                height: 50,
                borderRadius: 16,
                backgroundColor: "rgba(0,0,0,0.04)",
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOpacity={0.9}
            >
              <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>
                Cerrar
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
}
