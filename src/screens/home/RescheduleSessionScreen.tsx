import { useMemo, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { AppButton } from "../../components/ui/AppButton";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeFlowsStackParamList } from "../../navigation/HomeFlowsStack";

type Props = NativeStackScreenProps<HomeFlowsStackParamList, "RescheduleSession">;

const DAYS = [
  "Lunes 2 de Febrero",
  "Martes 3 de Febrero",
  "Miércoles 4 de Febrero",
  "Jueves 5 de Febrero",
];

const TIMES = ["09:00", "10:30", "12:00", "14:00", "16:30", "18:00"];

export function RescheduleSessionScreen({ route, navigation }: Props) {
  const { psychologist } = route.params;

  const [selectedDay, setSelectedDay] = useState<string>(DAYS[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const canConfirm = useMemo(() => Boolean(selectedTime), [selectedTime]);

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
        >
          <Feather name="chevron-left" size={20} color={tokens.colors.text} />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <AppText style={{ fontSize: 18, fontWeight: "900" }}>Cambiar fecha</AppText>
          <AppText style={{ color: tokens.colors.mutedText, marginTop: 2 }}>
            {psychologist}
          </AppText>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 28 }}>
        {/* Días */}
        <AppText style={{ fontWeight: "900", fontSize: 16 }}>Elegí un día</AppText>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
          {DAYS.map((d) => {
            const active = selectedDay === d;
            return (
              <TouchableOpacity
                key={d}
                onPress={() => {
                  setSelectedDay(d);
                  setSelectedTime(null);
                }}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  borderRadius: 14,
                  backgroundColor: active ? "rgba(5,50,37,0.14)" : "#fff",
                  borderWidth: 1,
                  borderColor: active ? tokens.colors.primary : "rgba(83,104,149,0.16)",
                }}
              >
                <AppText style={{ fontWeight: "800", color: tokens.colors.text }}>{d}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Horarios */}
        <AppText style={{ fontWeight: "900", fontSize: 16, marginTop: 18 }}>
          Elegí un horario
        </AppText>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
          {TIMES.map((t) => {
            const active = selectedTime === t;
            return (
              <TouchableOpacity
                key={t}
                onPress={() => setSelectedTime(t)}
                style={{
                  width: "31%",
                  height: 44,
                  borderRadius: 14,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: active ? "rgba(5,50,37,0.14)" : "#fff",
                  borderWidth: 1,
                  borderColor: active ? tokens.colors.primary : "rgba(83,104,149,0.16)",
                }}
              >
                <AppText style={{ fontWeight: "900", color: tokens.colors.text }}>{t}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ marginTop: 18 }}>
          <AppButton
            label="Confirmar cambio"
            disabled={!canConfirm}
            onPress={() => {
              console.log("Reschedule confirmed", { selectedDay, selectedTime });
              navigation.goBack();
            }}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: "center", paddingVertical: 10 }}>
          <AppText style={{ color: tokens.colors.mutedText, fontWeight: "800" }}>Volver</AppText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
