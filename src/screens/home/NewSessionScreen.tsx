import { useMemo, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { AppButton } from "../../components/ui/AppButton";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeFlowsStackParamList } from "../../navigation/HomeFlowsStack";

/* ======================
   Mock data (luego backend)
====================== */

const ASSIGNED_PSYCHOLOGIST = "Ps. Silvia Cardozo";

const AVAILABLE_HOURS_BY_DAY: Record<number, string[]> = {
  3: ["09:00", "10:30", "14:00"],
  5: ["12:00", "16:30"],
  8: ["09:00", "11:00", "18:00"],
  12: ["10:00", "14:00"],
  18: ["09:00", "15:30"],
  22: ["11:00", "16:00"],
};

type Props = NativeStackScreenProps<HomeFlowsStackParamList, "NewSession">;

export function NewSessionScreen({ navigation }: Props) {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  const month = today.toLocaleDateString("es-AR", { month: "long" });
  const year = today.getFullYear();

  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();

  const availableHours = selectedDay
    ? AVAILABLE_HOURS_BY_DAY[selectedDay] ?? []
    : [];

  const canConfirm = Boolean(selectedDay && selectedHour);

  /* ======================
     UI
  ====================== */

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tokens.colors.bg }} edges={["top"]}>
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
            backgroundColor: "rgba(174,197,235,0.16)",
          }}
        >
          <Feather name="chevron-left" size={20} color={tokens.colors.text} />
        </TouchableOpacity>

        <View>
          <AppText style={{ fontSize: 18, fontWeight: "900" }}>
            Nueva sesión
          </AppText>
          <AppText style={{ color: tokens.colors.mutedText, marginTop: 2 }}>
            {ASSIGNED_PSYCHOLOGIST}
          </AppText>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 32 }}>
        {/* Month */}
        <AppText style={{ fontSize: 20, fontWeight: "900", marginBottom: 12 }}>
          {month.charAt(0).toUpperCase() + month.slice(1)} {year}
        </AppText>

        {/* Calendar */}
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
            padding: 14,
            borderWidth: 1,
            borderColor: "rgba(83,104,149,0.14)",
          }}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const active = selectedDay === day;
              const hasAvailability = Boolean(AVAILABLE_HOURS_BY_DAY[day]);

              return (
                <TouchableOpacity
                  key={day}
                  disabled={!hasAvailability}
                  onPress={() => {
                    setSelectedDay(day);
                    setSelectedHour(null);
                  }}
                  style={{
                    width: "14.28%",
                    aspectRatio: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 12,
                    marginBottom: 6,
                    backgroundColor: active
                      ? "rgba(5,50,37,0.18)"
                      : "transparent",
                    opacity: hasAvailability ? 1 : 0.25,
                  }}
                >
                  <AppText
                    style={{
                      fontWeight: active ? "900" : "600",
                      color: tokens.colors.text,
                    }}
                  >
                    {day}
                  </AppText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Available hours */}
        {selectedDay && (
          <>
            <AppText
              style={{
                fontSize: 16,
                fontWeight: "900",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Horarios disponibles
            </AppText>

            {availableHours.length === 0 ? (
              <AppText style={{ color: tokens.colors.mutedText }}>
                No hay horarios disponibles para este día.
              </AppText>
            ) : (
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                {availableHours.map((h) => {
                  const active = selectedHour === h;
                  return (
                    <TouchableOpacity
                      key={h}
                      onPress={() => setSelectedHour(h)}
                      style={{
                        width: "31%",
                        height: 44,
                        borderRadius: 14,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: active
                          ? "rgba(5,50,37,0.18)"
                          : "#fff",
                        borderWidth: 1,
                        borderColor: active
                          ? tokens.colors.primary
                          : "rgba(83,104,149,0.16)",
                      }}
                    >
                      <AppText style={{ fontWeight: "900" }}>{h}</AppText>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </>
        )}

        {/* Confirm */}
        <View style={{ marginTop: 24 }}>
          <AppButton
            label="Confirmar sesión"
            disabled={!canConfirm}
            onPress={() => {
                navigation.navigate("Home", {
                  scheduled: true,
                  scheduledData: {
                    psychologist: ASSIGNED_PSYCHOLOGIST,
                    dateLabel: `${selectedDay} de ${month}`,
                    startTime: selectedHour!,
                    zoomCode: "123 456 7890",
                  },
                });
              }}
              
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
