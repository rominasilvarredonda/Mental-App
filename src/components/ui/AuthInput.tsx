import { TextInput, View } from "react-native";
import { tokens } from "../../theme/tokens";
import { AppText } from "./AppText";

type Props = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (t: string) => void;
  keyboardType?: "default" | "email-address";
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

export function AuthInput({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry,
  autoCapitalize = "none",
}: Props) {
  return (
    <View style={{ marginTop: 14 }}>
      <AppText variant="label" style={{ color: tokens.colors.heading, marginBottom: 8 }}>{label}</AppText>


      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={tokens.colors.mutedText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        style={{
          height: 54,
          borderRadius: tokens.radius.md,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: tokens.colors.borderStrong,
          backgroundColor: tokens.colors.surface,
          color: tokens.colors.text,
          fontFamily: "OpenSans_400Regular",
          fontSize: 15,
        }}
      />
    </View>
  );
}
