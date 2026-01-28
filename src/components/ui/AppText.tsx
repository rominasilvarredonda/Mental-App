// src/components/ui/AppText.tsx
import { Text, TextProps, StyleProp, TextStyle } from "react-native";
import clsx from "clsx";
import { tokens } from "../../theme/tokens";

type Variant = "title" | "subtitle" | "body" | "caption";

type Props = TextProps & {
  variant?: Variant;
  className?: string;
};

const fontByVariant: Record<Variant, TextStyle> = {
  title: { fontFamily: "OpenSans_700Bold", fontSize: 28, lineHeight: 34 },
  subtitle: { fontFamily: "OpenSans_600SemiBold", fontSize: 18, lineHeight: 24 },
  body: { fontFamily: "OpenSans_400Regular", fontSize: 15, lineHeight: 22 },
  caption: { fontFamily: "OpenSans_400Regular", fontSize: 13, lineHeight: 18 },
};

export function AppText({ variant = "body", className, style, ...props }: Props) {
  const base: TextStyle = { color: tokens.colors.text };

  return (
    <Text
      {...props}
      className={clsx(className)}
      style={[base, fontByVariant[variant], style as StyleProp<TextStyle>]}
    />
  );
}
