// src/screens/auth/WelcomeAuthScreen.tsx
import { Image, View } from "react-native";
import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";
import { AppButton } from "../../components/ui/AppButton";

type Props = {
  navigation: any;
};

export function WelcomeAuthScreen({ navigation }: Props) {
  const onRegister = () => {
    console.log("CLICK Register");
    navigation.navigate("Register");
  };

  const onLogin = () => {
    console.log("CLICK Login");
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: tokens.colors.bg,
        paddingHorizontal: 28,
        paddingTop: 28,
        paddingBottom: 80,
      }}
    >
      {/* Imagen grande centrada */}
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "flex-end",
          paddingTop: 8,
          // opcional: evita que la imagen “bloquee” el toque si se superpone
          overflow: "hidden",
        }}
      >
        <Image
          source={require("../../assets/welcome-illustration.png")}
          style={{
            width: "200%",
            height: "195%",
            maxHeight: 700,
            resizeMode: "contain",
          }}
        />
      </View>

      {/* Texto */}
      <View style={{ marginTop: -50 }}>
        <AppText
          style={{
            fontSize: 50,
            lineHeight: 56, // un poquito más para que no corte arriba
            fontFamily: "OpenSans_600SemiBold",
            color: tokens.colors.secondary,
          }}
        >
          Comprender
        </AppText>

        <AppText
          style={{
            marginTop: 2,
            fontSize: 50,
            lineHeight: 56,
            fontFamily: "OpenSans_600SemiBold",
            color: tokens.colors.primary,
          }}
        >
          para vivir mejor
        </AppText>

        {/* Botón principal */}
        <View style={{ marginTop: 22 }}>
          <AppButton label="Registrarme ahora" onPress={onRegister} />
        </View>

        {/* Link de login */}
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
            Ya tenés una cuenta?{" "}
          </AppText>

          <AppText
            onPress={onLogin}
            style={{
              color: tokens.colors.primary,
              fontWeight: "700",
            }}
          >
            Inicia sesión
          </AppText>
        </View>
      </View>
    </View>
  );
}
