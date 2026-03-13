import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import type { ProfileStackParamList } from "../../navigation/ProfileStack";

type Props = NativeStackScreenProps<ProfileStackParamList, "PaymentMethods">;

function PaymentOption({
  icon,
  title,
  subtitle,
  onPress,
}: {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  subtitle: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.06)",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
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
        <Feather name={icon} size={18} color={tokens.colors.primary} />
      </View>

      <View style={{ flex: 1 }}>
        <AppText style={{ fontWeight: "900" }}>{title}</AppText>
        <AppText style={{ marginTop: 3, color: tokens.colors.mutedText, lineHeight: 18 }}>
          {subtitle}
        </AppText>
      </View>

      <Feather name="chevron-right" size={18} color={tokens.colors.mutedText} />
    </TouchableOpacity>
  );
}

export function PaymentMethodsScreen({ navigation }: Props) {
  const currentPaymentMethod = {
    brand: "Visa",
    last4: "4242",
    holder: "Jose Pedro",
    expiry: "08/28",
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
            backgroundColor: "rgba(0,0,0,0.04)",
          }}
        >
          <Feather name="chevron-left" size={20} color={tokens.colors.text} />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <AppText style={{ fontSize: 18, fontWeight: "900" }}>
            Medios de pago
          </AppText>
          <AppText style={{ marginTop: 2, color: tokens.colors.mutedText }}>
            Gestioná cómo abonás tu suscripción.
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
        {/* Método actual */}
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.06)",
            shadowColor: "#000",
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
            MÉTODO ACTUAL
          </AppText>

          <View
            style={{
              marginTop: 12,
              borderRadius: 18,
              padding: 16,
              backgroundColor: tokens.colors.secondary,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AppText style={{ color: "#fff", fontWeight: "900", fontSize: 18 }}>
                {currentPaymentMethod.brand}
              </AppText>

              <Feather name="credit-card" size={20} color="#fff" />
            </View>

            <AppText
              style={{
                marginTop: 18,
                color: "#fff",
                fontSize: 20,
                fontWeight: "900",
                letterSpacing: 2,
              }}
            >
              •••• •••• •••• {currentPaymentMethod.last4}
            </AppText>

            <View
              style={{
                marginTop: 18,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <AppText style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
                  TITULAR
                </AppText>
                <AppText style={{ color: "#fff", fontWeight: "800", marginTop: 2 }}>
                  {currentPaymentMethod.holder}
                </AppText>
              </View>

              <View>
                <AppText style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
                  VENCE
                </AppText>
                <AppText style={{ color: "#fff", fontWeight: "800", marginTop: 2 }}>
                  {currentPaymentMethod.expiry}
                </AppText>
              </View>
            </View>
          </View>
        </View>

        {/* Agregar otro medio */}
        <View style={{ marginTop: 18 }}>
          <AppText
            style={{
              color: tokens.colors.mutedText,
              fontSize: 12,
              letterSpacing: 1,
              fontWeight: "800",
            }}
          >
            AGREGAR OTRO MEDIO
          </AppText>

          <View style={{ marginTop: 10, gap: 10 }}>
            <PaymentOption
              icon="plus-circle"
              title="Agregar nueva tarjeta"
              subtitle="Sumá una nueva tarjeta de débito o crédito."
              onPress={() => console.log("Agregar nueva tarjeta")}
            />

            <PaymentOption
              icon="briefcase"
              title="Vincular cuenta bancaria"
              subtitle="Asociá una cuenta para futuros pagos o débitos."
              onPress={() => console.log("Vincular cuenta bancaria")}
            />
          </View>
        </View>

        {/* Nota */}
        <View
          style={{
            marginTop: 16,
            backgroundColor: "rgba(0,0,0,0.04)",
            borderRadius: 16,
            padding: 14,
          }}
        >
          <AppText style={{ fontWeight: "900" }}>Importante</AppText>
          <AppText
            style={{
              marginTop: 6,
              color: tokens.colors.mutedText,
              lineHeight: 18,
            }}
          >
            Cuando agregues un nuevo medio de pago, después vas a poder elegirlo como principal.
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}