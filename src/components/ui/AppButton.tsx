// src/components/ui/AppButton.tsx
import { Pressable, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppText } from "./AppText";
import { tokens } from "../../theme/tokens";

type Props = {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
  disabled?: boolean;
};

export function AppButton({ label, onPress, variant = "primary", style }: Props) {
  const radius = tokens.radius.lg;

  if (variant === "primary") {
    return (
      <Pressable onPress={onPress} style={[{ width: "100%" }, style]}>
        <LinearGradient
          colors={[tokens.colors.primary, tokens.colors.secondary]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            height: 56,
            borderRadius: radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText style={{ color: "#FFFFFF", fontFamily: "OpenSans_700Bold", fontSize: 16 }}>
            {label}
          </AppText>
        </LinearGradient>
      </Pressable>
    );
  }

  // Secondary (tipo “Saltar”)
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height: 56,
          borderRadius: radius,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#A9BDB3", // parecido al verde/gris de tu botón “Saltar”
        },
        style,
      ]}
    >
      <AppText style={{ color: "#FFFFFF", fontFamily: "OpenSans_700Bold", fontSize: 16 }}>
        {label}
      </AppText>
    </Pressable>
  );
}
