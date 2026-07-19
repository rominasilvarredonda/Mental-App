import type { TextStyle, ViewStyle } from "react-native";

const palette = {
  blue: "#536895",
  sky: "#AEC5EB",
  sage: "#C3DFB9",
  forest: "#285943",
  evergreen: "#053225",
  brown: "#28190E",
} as const;

export const tokens = {
  palette,
  colors: {
    bg: "#F8FAF7",
    bgSoft: "rgba(195,223,185,0.18)",
    surface: "#FCFDFC",
    surfaceMuted: "rgba(174,197,235,0.14)",
    text: palette.brown,
    heading: palette.evergreen,
    muted: "rgba(40,25,14,0.62)",
    mutedText: "rgba(40,25,14,0.62)",
    border: "rgba(83,104,149,0.14)",
    borderStrong: "rgba(83,104,149,0.24)",
    primary: palette.evergreen,
    primarySoft: "rgba(5,50,37,0.09)",
    secondary: palette.blue,
    secondarySoft: "rgba(83,104,149,0.11)",
    sageSoft: "rgba(195,223,185,0.32)",
    skySoft: "rgba(174,197,235,0.24)",
    bgElevated: "rgba(174,197,235,0.13)",
    danger: "#7A3E32",
    card: "#FCFDFC",
    white: "#FFFFFF",
    overlay: "rgba(40,25,14,0.34)",
  },
  radius: { sm: 12, md: 16, lg: 22, xl: 28, pill: 999 },
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 40 },
  typography: {
    display: { fontFamily: "OpenSans_700Bold", fontSize: 32, lineHeight: 39, letterSpacing: -0.6 } as TextStyle,
    title: { fontFamily: "OpenSans_700Bold", fontSize: 26, lineHeight: 33, letterSpacing: -0.35 } as TextStyle,
    section: { fontFamily: "OpenSans_700Bold", fontSize: 19, lineHeight: 26, letterSpacing: -0.15 } as TextStyle,
    subtitle: { fontFamily: "OpenSans_600SemiBold", fontSize: 16, lineHeight: 23 } as TextStyle,
    body: { fontFamily: "OpenSans_400Regular", fontSize: 15, lineHeight: 23 } as TextStyle,
    caption: { fontFamily: "OpenSans_400Regular", fontSize: 13, lineHeight: 19 } as TextStyle,
    label: { fontFamily: "OpenSans_600SemiBold", fontSize: 12, lineHeight: 17, letterSpacing: 0.55 } as TextStyle,
    button: { fontFamily: "OpenSans_700Bold", fontSize: 15, lineHeight: 20 } as TextStyle,
  },
  shadow: {
    soft: { shadowColor: palette.evergreen, shadowOpacity: 0.05, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 2 } as ViewStyle,
    card: { shadowColor: palette.evergreen, shadowOpacity: 0.08, shadowRadius: 22, shadowOffset: { width: 0, height: 12 }, elevation: 4 } as ViewStyle,
    floating: { shadowColor: palette.evergreen, shadowOpacity: 0.14, shadowRadius: 26, shadowOffset: { width: 0, height: 14 }, elevation: 7 } as ViewStyle,
  },
  gradients: {
    primary: [palette.evergreen, palette.forest] as const,
    calm: ["rgba(174,197,235,0.52)", "rgba(195,223,185,0.42)"] as const,
    blue: [palette.blue, "#657AA5"] as const,
  },
};
