import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

import { OnboardingScreen } from "./src/screens/onboarding/OnboardingScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCFEFF" }}>
      <OnboardingScreen />
    </SafeAreaView>
  );
}
