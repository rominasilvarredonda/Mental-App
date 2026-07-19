// src/components/ui/AppText.tsx
import { Text, TextProps, StyleProp, TextStyle } from "react-native";
import clsx from "clsx";
import { tokens } from "../../theme/tokens";

type Variant = "display" | "title" | "section" | "subtitle" | "body" | "caption" | "label";

type Props = TextProps & {
  variant?: Variant;
  className?: string;
};

const fontByVariant: Record<Variant, TextStyle> = tokens.typography;

export function AppText({ variant = "body", className, style, ...props }: Props) {
  const base: TextStyle = { color: tokens.colors.text, includeFontPadding: false };

  return (
    <Text
      {...props}
      className={clsx(className)}
      style={[base, fontByVariant[variant], style as StyleProp<TextStyle>]}
    />
  );
}
