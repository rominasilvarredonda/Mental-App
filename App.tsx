// App.tsx
import { useFonts } from "expo-font";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnboardingScreen } from "./src/screens/onboarding/OnboardingScreen";
import { WelcomeAuthScreen } from "./src/screens/auth/WelcomeAuthScreen";

export type RootStackParamList = {
  Onboarding: undefined;
  WelcomeAuth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) return null;
  console.log("WelcomeAuthScreen is:", WelcomeAuthScreen);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="WelcomeAuth" component={WelcomeAuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
