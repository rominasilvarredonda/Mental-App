import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { AppButton } from "../../components/ui/AppButton";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeFlowsStackParamList = {
  Home: undefined;
  SessionDetails: {
    psychologist: string;
    dateLabel: string; // ej: "Mañana" o "16 Jun 2026"
    startTime: string; // ej: "14:00"
    zoomCode: string;  // ej: "123 456 7890"
  };
};

type Props = NativeStackScreenProps<HomeFlowsStackParamList, "SessionDetails">;

export function SessionDetailsScreen({ route, navigation }: Props) {
  const { psychologist, dateLabel, startTime, zoomCode } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tokens.colors.bg }} edges={["top"]}>
      {/* Header */}
      <View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 10, flexDirection: "row", alignItems: "center", gap: 12 }}>
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
        >
          <Feather name="chevron-left" size={20} color={tokens.colors.text} />
        </TouchableOpacity>

        <AppText style={{ fontSize: 18, fontWeight: "800" }}>
          Detalles de la sesión
        </AppText>
      </View>

      {/* Card principal */}
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <LinearGradient
          colors={[tokens.colors.primary, tokens.colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 18, padding: 16 }}
        >
          <AppText style={{ color: "rgba(255,255,255,0.85)", fontSize: 12 }}>
            Sesión por videollamada
          </AppText>

          <AppText style={{ color: "#fff", fontSize: 20, marginTop: 10, fontWeight: "900" }}>
            {psychologist}
          </AppText>

          <View style={{ marginTop: 14, gap: 10 }}>
            <InfoRow icon="calendar" label="Fecha" value={dateLabel} />
            <InfoRow icon="clock" label="Hora de inicio" value={startTime} />
            <InfoRow icon="key" label="Código Zoom" value={zoomCode} />
          </View>
        </LinearGradient>

        <View style={{ marginTop: 16, gap: 10 }}>
          <AppButton
            label="Abrir Zoom"
            onPress={() => {
              // más adelante: Linking.openURL(`zoommtg://...`) o https://zoom.us/j/...
              console.log("Abrir Zoom");
            }}
          />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ alignSelf: "center", paddingVertical: 10 }}
          >
            <AppText style={{ color: tokens.colors.mutedText, fontWeight: "700" }}>
              Volver
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <View
        style={{
          width: 34,
          height: 34,
          borderRadius: 12,
          backgroundColor: "rgba(255,255,255,0.18)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name={icon} size={16} color="#fff" />
      </View>

      <View style={{ flex: 1 }}>
        <AppText style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>
          {label}
        </AppText>
        <AppText style={{ color: "#fff", fontSize: 16, fontWeight: "800" }}>
          {value}
        </AppText>
      </View>
    </View>
  );
}
