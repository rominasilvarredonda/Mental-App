import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ProfileStackParamList } from "../../navigation/ProfileStack";

type Row = {
  key: string;
  label: string;
  icon: keyof typeof Feather.glyphMap;
  tone?: "default" | "danger";
  onPress: () => void;
};

function SectionCard({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <View style={{ marginTop: 16 }}>
      <AppText
        style={{
          color: tokens.colors.mutedText,
          fontSize: 12,
          letterSpacing: 1,
          fontWeight: "800",
        }}
      >
        {title.toUpperCase()}
      </AppText>

      <View
        style={{
          marginTop: 10,
          backgroundColor: "#fff",
          borderRadius: 18,
          borderWidth: 1,
          borderColor: "rgba(83,104,149,0.14)",
          shadowColor: tokens.colors.primary,
          shadowOpacity: 0.06,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 6 },
          overflow: "hidden",
        }}
      >
        {rows.map((r, idx) => {
          const isLast = idx === rows.length - 1;
          const danger = r.tone === "danger";

          return (
            <TouchableOpacity
              key={r.key}
              onPress={r.onPress}
              activeOpacity={0.9}
              style={{
                paddingHorizontal: 14,
                paddingVertical: 14,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                borderBottomWidth: isLast ? 0 : 1,
                borderBottomColor: "rgba(83,104,149,0.14)",
              }}
            >
              <View
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 14,
                  backgroundColor: danger
                    ? "rgba(220,38,38,0.10)"
                    : "rgba(5,50,37,0.12)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name={r.icon}
                  size={18}
                  color={danger ? "#DC2626" : tokens.colors.primary}
                />
              </View>

              <AppText
                style={{
                  flex: 1,
                  fontWeight: "900",
                  color: danger ? "#DC2626" : tokens.colors.text,
                }}
              >
                {r.label}
              </AppText>

              <Feather
                name="chevron-right"
                size={18}
                color={tokens.colors.mutedText}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export function ProfileScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();
  const profileRows: Row[] = [
    {
      key: "personal_info",
      label: "Información personal",
      icon: "user",
      onPress: () => navigation.navigate("PersonalInfo"),
    },
    {
      key: "my_psychologist",
      label: "Mi psicólogo",
      icon: "heart",
      onPress: () => navigation.navigate("MyPsychologist"),
    },
  ];

  const activityRows: Row[] = [
    {
      key: "subscription",
      label: "Suscripción",
      icon: "credit-card",
      onPress: () => navigation.navigate("Subscription"),
    },
    {
      key: "payment_methods",
      label: "Medios de pago",
      icon: "dollar-sign",
      onPress: () => navigation.navigate("PaymentMethods"),
    },
  ];

  const settingsRows: Row[] = [
    {
      key: "notifications",
      label: "Notificaciones",
      icon: "bell",
      onPress: () => console.log("Ir a Notificaciones"),
    },
    {
      key: "legal_info",
      label: "Información legal",
      icon: "file-text",
      onPress: () => console.log("Ir a Información legal"),
    },
    {
      key: "apply_psychologist",
      label: "Quiero postularme como psicólogo",
      icon: "briefcase",
      onPress: () => console.log("Ir a Postulación psicólogo"),
    },
  ];

  const supportRows: Row[] = [
    {
      key: "need_help",
      label: "Necesito ayuda",
      icon: "help-circle",
      onPress: () => console.log("Ir a Necesito ayuda"),
    },
    {
      key: "terms",
      label: "Términos y condiciones",
      icon: "book",
      onPress: () => console.log("Ir a Términos y condiciones"),
    },
    {
      key: "privacy",
      label: "Política de privacidad",
      icon: "shield",
      onPress: () => console.log("Ir a Política de privacidad"),
    },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: tokens.colors.bg }}
      edges={["top"]}
    >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 28,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <AppText style={{ fontSize: 21, fontWeight: "900" }}>
              Perfil
            </AppText>
          </View>

          {/* Avatar placeholder */}
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: "rgba(83,104,149,0.14)",
            }}
          />
        </View>

        {/* Sections */}
        <SectionCard title="Perfil" rows={profileRows} />
        <SectionCard title="Actividad" rows={activityRows} />
        <SectionCard title="Configuración" rows={settingsRows} />
        <SectionCard title="Asistencia" rows={supportRows} />

        {/* Logout + Delete (separado) */}
        <View style={{ marginTop: 18 }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "rgba(83,104,149,0.14)",
              shadowColor: tokens.colors.primary,
              shadowOpacity: 0.06,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 6 },
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              onPress={() => console.log("Cerrar sesión")}
              activeOpacity={0.9}
              style={{
                paddingHorizontal: 14,
                paddingVertical: 14,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(83,104,149,0.14)",
              }}
            >
              <View
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 14,
                  backgroundColor: "rgba(83,104,149,0.08)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="log-out" size={18} color={tokens.colors.text} />
              </View>

              <AppText style={{ flex: 1, fontWeight: "900" }}>
                Cerrar sesión
              </AppText>
              <Feather
                name="chevron-right"
                size={18}
                color={tokens.colors.mutedText}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Eliminar cuenta")}
              activeOpacity={0.9}
              style={{
                paddingHorizontal: 14,
                paddingVertical: 14,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
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
                <Feather name="trash-2" size={18} color="#DC2626" />
              </View>

              <AppText style={{ flex: 1, fontWeight: "900", color: "#DC2626" }}>
                Eliminar cuenta
              </AppText>
              <Feather
                name="chevron-right"
                size={18}
                color={tokens.colors.mutedText}
              />
            </TouchableOpacity>
          </View>

          <AppText
            style={{
              marginTop: 10,
              color: tokens.colors.mutedText,
              fontSize: 12,
              lineHeight: 16,
            }}
          >
            *Eliminar cuenta es irreversible. Luego lo conectamos con
            confirmación modal.
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
