import { useState } from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { AppButton } from "../../components/ui/AppButton";
import { AuthInput } from "../../components/ui/AuthInput";

export function LoginScreen() {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const HEADER_H = 250;

  return (
    <View style={{ flex: 1, backgroundColor: tokens.colors.bg }}>
      {/* Header con GRADIENTE (solo fondo) */}
      <LinearGradient
        colors={[tokens.colors.primary, tokens.colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_H }}
      />

      {/* IMAGEN OVERLAY por arriba del header + card */}
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_H,
          zIndex: 999,
          elevation: 999,
          justifyContent: "flex-end",
          paddingHorizontal: 24,
          paddingBottom: 10,
        }}
      >
        <Image
          source={require("../../assets/login-illustration.png")}
          style={{
            width: "100%",
            height: 300,
            resizeMode: "contain",
            transform: [{ translateY: 131.5 }, { translateX: -30 }],
          }}
        />
      </View>

      {/* Card */}
      <View
        style={{
          flex: 1,
          marginTop: -23,
          backgroundColor: "#fff",
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          paddingHorizontal: 24,
          paddingTop: 60,
          zIndex: 1,
          elevation: 1,
        }}
      >
        <AppText
          style={{
            fontSize: 40,
            lineHeight: 52,
            fontFamily: "OpenSans_700Bold",
            color: tokens.colors.secondary,
          }}
        >
          Iniciar sesión
        </AppText>

        <AuthInput
          label="Email"
          placeholder="ejemplo@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <AuthInput
          label="Contraseña"
          placeholder="********"
          value={pass}
          onChangeText={setPass}
          secureTextEntry
          autoCapitalize="none"
        />

        <View style={{ marginTop: 22 }}>
          <AppButton
            label="Iniciar sesión"
            onPress={() => {
              // 🔑 cambio único
              navigation.replace("App");
            }}
          />
        </View>

        <View
          style={{
            marginTop: 14,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <AppText style={{ color: tokens.colors.mutedText }}>
            No tenes una cuenta aún?{" "}
          </AppText>

          <AppText
            onPress={() => navigation.navigate("Register")}
            style={{ color: tokens.colors.primary, fontWeight: "700" }}
          >
            Registrate
          </AppText>
        </View>

        {/* Separador */}
        <View style={{ marginTop: 22, flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "rgba(0,0,0,0.12)" }} />
          <AppText style={{ marginHorizontal: 12, color: tokens.colors.mutedText }}>
            O inicia sesión con
          </AppText>
          <View style={{ flex: 1, height: 1, backgroundColor: "rgba(0,0,0,0.12)" }} />
        </View>
      </View>
    </View>
  );
}
