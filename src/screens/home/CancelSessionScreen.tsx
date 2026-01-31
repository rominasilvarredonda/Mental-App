import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { AppButton } from "../../components/ui/AppButton";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeFlowsStackParamList } from "../../navigation/HomeFlowsStack";
import { TouchableOpacity } from "react-native";

type Props = NativeStackScreenProps<HomeFlowsStackParamList, "CancelSession">;

export function CancelSessionScreen({ route, navigation }: Props) {
  const { psychologist, dateLabel, startTime } = route.params;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: tokens.colors.bg }}
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 12,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.04)",
          }}
        >
          <Feather name="chevron-left" size={20} color={tokens.colors.text} />
        </TouchableOpacity>

        <AppText style={{ fontSize: 18, fontWeight: "900" }}>
          Cancelar sesión
        </AppText>
      </View>

      <View style={{ paddingHorizontal: 20, paddingTop: 18 }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.06)",
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 16,
                backgroundColor: "rgba(220,38,38,0.10)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="x-circle" size={20} color="#DC2626" />
            </View>

            <View style={{ flex: 1 }}>
              <AppText style={{ fontSize: 16, fontWeight: "900" }}>
                ¿Querés cancelar esta sesión?
              </AppText>
              <AppText style={{ color: tokens.colors.mutedText, marginTop: 4 }}>
                Podés reprogramar cuando quieras.
              </AppText>
            </View>
          </View>

          <View style={{ marginTop: 14, gap: 8 }}>
            <InfoLine label="Psicólogo/a" value={psychologist} />
            <InfoLine label="Fecha" value={dateLabel} />
            <InfoLine label="Hora" value={startTime} />
          </View>
        </View>

        <View style={{ marginTop: 16, gap: 10 }}>
          <AppButton
            label="Sí, cancelar"
            onPress={() => {
              navigation.navigate("Home", {
                cancelled: true,
              });
            }}
          />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ alignSelf: "center", paddingVertical: 8 }}
          >
            <AppText
              style={{ color: tokens.colors.mutedText, fontWeight: "800" }}
            >
              Volver
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "space-between", gap: 12 }}
    >
      <AppText style={{ color: tokens.colors.mutedText, fontWeight: "700" }}>
        {label}
      </AppText>
      <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>
        {value}
      </AppText>
    </View>
  );
}
