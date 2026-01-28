import { Text, TextProps } from "react-native";
import clsx from "clsx";

type Props = TextProps & {
  variant?: "title" | "subtitle" | "body" | "caption";
  className?: string;
};

export function AppText({
  variant = "body",
  className,
  ...props
}: Props) {
  const variantStyle = {
    title:
      "text-[24px] leading-[32px] font-semibold text-[#171219]",
    subtitle:
      "text-[18px] leading-[26px] font-semibold text-[#171219]",
    body:
      "text-[15px] leading-[22px] text-[#171219]",
    caption:
      "text-[13px] leading-[18px] text-[#171219]/60",
  }[variant];

  return (
    <Text
      {...props}
      className={clsx(
        "font-['OpenSans_400Regular']",
        variantStyle,
        className
      )}
    />
  );
}
