import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import type { ProfileStackParamList } from "../../navigation/ProfileStack";

type Props = NativeStackScreenProps<ProfileStackParamList, "PersonalInfo">;

function Field({
  label,
  value,
  placeholder,
  icon,
}: {
  label: string;
  value: string;
  placeholder: string;
  icon: keyof typeof Feather.glyphMap;
}) {
  return (
    <View style={{ marginTop: 12 }}>
      <AppText style={{ fontSize: 12, color: tokens.colors.mutedText, fontWeight: "800" }}>
        {label.toUpperCase()}
      </AppText>

      <View
        style={{
          marginTop: 8,
          backgroundColor: "#fff",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "rgba(83,104,149,0.16)",
          paddingHorizontal: 12,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 38,
            height: 38,
            borderRadius: 14,
            backgroundColor: "rgba(5,50,37,0.12)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name={icon} size={18} color={tokens.colors.primary} />
        </View>

        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={tokens.colors.mutedText}
          style={{
            flex: 1,
            color: tokens.colors.text,
            fontSize: 15,
            paddingVertical: 6,
          }}
        />
      </View>
    </View>
  );
}

export function PersonalInfoScreen({ navigation }: Props) {
  // Por ahora mock (después conectamos con estado/Backend)
  const mockName = "Jose Pedro";
  const mockEmail = "josepedro@email.com";
  const mockPhone = "+598 99 123 456";
  const mockCountry = "Uruguay";

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
          activeOpacity={0.9}
        >
          <Feather name="chevron-left" size={20} color={tokens.colors.text} />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <AppText style={{ fontSize: 18, fontWeight: "900" }}>
            Información personal
          </AppText>
          <AppText style={{ marginTop: 2, color: tokens.colors.mutedText }}>
            Tus datos para la cuenta y contacto.
          </AppText>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 28 }}>
        {/* Card */}
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
          <AppText style={{ fontSize: 16, fontWeight: "900" }}>
            Datos de tu perfil
          </AppText>

          <AppText style={{ marginTop: 6, color: tokens.colors.mutedText, lineHeight: 18 }}>
            Podés editar esta información en cualquier momento.
          </AppText>

          <Field label="Nombre" value={mockName} placeholder="Tu nombre" icon="user" />
          <Field label="Email" value={mockEmail} placeholder="Tu email" icon="mail" />
          <Field label="Teléfono" value={mockPhone} placeholder="Tu teléfono" icon="phone" />
          <Field label="País" value={mockCountry} placeholder="Tu país" icon="map-pin" />
        </View>

        {/* CTA */}
        <TouchableOpacity
          onPress={() => console.log("Guardar cambios")}
          activeOpacity={0.9}
          style={{
            marginTop: 14,
            height: 54,
            borderRadius: 16,
            backgroundColor: tokens.colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText style={{ color: "#fff", fontWeight: "900", fontSize: 16 }}>
            Guardar cambios
          </AppText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log("Cambiar contraseña")}
          activeOpacity={0.9}
          style={{
            marginTop: 10,
            height: 54,
            borderRadius: 16,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "rgba(83,104,149,0.20)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText style={{ color: tokens.colors.text, fontWeight: "900", fontSize: 16 }}>
            Cambiar contraseña
          </AppText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
