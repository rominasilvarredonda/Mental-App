import { Text, TextInput, View } from "react-native";
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
      <Text style={{ color: tokens.colors.primary, marginBottom: 8, fontWeight: "600" }}>
  {label}
</Text>


      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={tokens.colors.mutedText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        style={{
          height: 52,
          borderRadius: 12,
          paddingHorizontal: 14,
          borderWidth: 1.2,
          borderColor: tokens.colors.border ?? "rgba(0,0,0,0.12)",
          backgroundColor: "#FFFFFF",
          color: tokens.colors.text,
        }}
      />
    </View>
  );
}
