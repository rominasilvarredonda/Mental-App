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

export function AppButton({ label, onPress, variant = "primary", style, disabled = false }: Props) {
  const radius = tokens.radius.lg;

  if (variant === "primary") {
    return (
      <Pressable disabled={disabled} onPress={onPress} style={({ pressed }) => [{ width: "100%", opacity: disabled ? 0.42 : pressed ? 0.9 : 1, transform: [{ scale: pressed ? 0.985 : 1 }] }, style]}>
        <LinearGradient
          colors={tokens.gradients.primary}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            height: 54,
            borderRadius: radius,
            ...tokens.shadow.soft,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText style={{ color: tokens.colors.white, ...tokens.typography.button }}>
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
      disabled={disabled}
      style={({ pressed }) => [
        {
          height: 54,
          borderRadius: radius,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: tokens.colors.secondarySoft,
          borderWidth: 1,
          borderColor: tokens.colors.borderStrong,
          opacity: disabled ? 0.42 : pressed ? 0.8 : 1,
          transform: [{ scale: pressed ? 0.985 : 1 }],
        },
        style,
      ]}
    >
      <AppText style={{ color: tokens.colors.heading, ...tokens.typography.button }}>
        {label}
      </AppText>
    </Pressable>
  );
}
