// src/screens/onboarding/onboarding.data.ts
import { OnboardingSlideData } from "../../components/onboarding/OnboardingSlide";

export const onboardingSlides: OnboardingSlideData[] = [
  {
    id: "1",
    image: require("../../assets/onboarding-1.png"),
    title: {
      left: "Terapia psicologica ",
      highlight: "online,\nreal y accesible",
      right: "",
    },
    description:
      "Sesiones terapéuticas individuales con psicólogos verificados, estés donde estés",
    primaryLabel: "Siguiente",
    secondaryLabel: "Saltar",
  },
  {
    id: "2",
    image: require("../../assets/onboarding-2.png"),
    title: {
      left: "Acompañamiento ",
      highlight: "entre\nsesiones",
      right: "",
    },
    description:
      "Tareas sugeridas por tu psicólogo, registro diario de emociones e IA de apoyo emocional",
    primaryLabel: "Siguiente",
    secondaryLabel: "Saltar",
  },
  {
    id: "3",
    image: require("../../assets/onboarding-3.png"),
    title: {
      left: "Psicoeduación ",
      highlight: "para tu día\na día",
      right: "",
    },
    description:
      "Seminarios semanales, lecturas diarias y contenidos prácticos para cuidar tu salud mental.",
    primaryLabel: "Comenzar",
  },
];
