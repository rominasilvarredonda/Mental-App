import { Text, TextProps } from "react-native";
import clsx from "clsx";

type Props = TextProps & {
  variant?: "title" | "subtitle" | "body" | "caption";
  className?: string;
};

export function AppText({ variant = "body", className, ...props }: Props) {
  const variantStyle = {
    title: "text-[24px] font-semibold",
    subtitle: "text-[16px] font-semibold",
    body: "text-[15px]",
    caption: "text-[13px] text-black/60",
  }[variant];

  return <Text {...props} className={clsx("text-black", variantStyle, className)} />;
}
