import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import type { ProfileStackParamList } from "../../navigation/ProfileStack";

type Props = NativeStackScreenProps<ProfileStackParamList, "Subscription">;

function BenefitRow({ text }: { text: string }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
      <View
        style={{
          width: 26,
          height: 26,
          borderRadius: 13,
          backgroundColor: "rgba(5,50,37,0.12)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="check" size={14} color={tokens.colors.primary} />
      </View>

      <AppText
        style={{
          flex: 1,
          color: tokens.colors.text,
          fontWeight: "700",
          lineHeight: 20,
        }}
      >
        {text}
      </AppText>
    </View>
  );
}

export function SubscriptionScreen({ navigation }: Props) {
  const currentPlan = {
    name: "Plan Plus",
    price: "$ 2.990 / mes",
    renewal: "Renovación mensual",
    benefits: [
      "1 sesión semanal",
      "Acceso a ejercicios sugeridos",
      "Lectura diaria",
      "Acceso a seminarios",
      "Material complementario",
    ],
  };

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
          activeOpacity={0.9}
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
          <AppText style={{ fontSize: 18, fontWeight: "900" }}>
            Suscripción
          </AppText>
          <AppText style={{ marginTop: 2, color: tokens.colors.mutedText }}>
            Tu plan actual y sus beneficios.
          </AppText>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 28,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Plan actual */}
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(83,104,149,0.14)",
            shadowColor: tokens.colors.primary,
            shadowOpacity: 0.06,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 6 },
          }}
        >
          <AppText
            style={{
              color: tokens.colors.mutedText,
              fontSize: 12,
              letterSpacing: 1,
              fontWeight: "800",
            }}
          >
            PLAN ACTUAL
          </AppText>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <View style={{ flex: 1 }}>
              <AppText style={{ fontSize: 22, fontWeight: "900" }}>
                {currentPlan.name}
              </AppText>
              <AppText style={{ marginTop: 4, color: tokens.colors.mutedText }}>
                {currentPlan.price}
              </AppText>
              <AppText style={{ marginTop: 2, color: tokens.colors.mutedText }}>
                {currentPlan.renewal}
              </AppText>
            </View>

            <View
              style={{
                width: 54,
                height: 54,
                borderRadius: 18,
                backgroundColor: "rgba(5,50,37,0.12)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="star" size={22} color={tokens.colors.primary} />
            </View>
          </View>

          <View
            style={{
              marginTop: 16,
              backgroundColor: "rgba(174,197,235,0.16)",
              borderRadius: 16,
              padding: 14,
            }}
          >
            <AppText style={{ fontWeight: "900" }}>Qué incluye</AppText>

            {currentPlan.benefits.map((benefit) => (
              <BenefitRow key={benefit} text={benefit} />
            ))}
          </View>
        </View>

        {/* Botón cambiar de plan */}
        <TouchableOpacity
          onPress={() => console.log("Cambiar de plan")}
          activeOpacity={0.9}
          style={{
            marginTop: 16,
            height: 54,
            borderRadius: 16,
            backgroundColor: tokens.colors.primary,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Feather name="refresh-ccw" size={18} color="#fff" />
          <AppText style={{ color: "#fff", fontWeight: "900", fontSize: 16 }}>
            Cambiar de plan
          </AppText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}