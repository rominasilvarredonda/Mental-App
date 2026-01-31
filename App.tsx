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
import { RegisterScreen } from "./src/screens/auth/RegisterScreen";
import { LoginScreen } from "./src/screens/auth/LoginScreen";
import { AppTabs } from "./src/navigation/AppTabs";

export type RootStackParamList = {
  Onboarding: undefined;
  WelcomeAuth: undefined;
  Register: undefined;
  Login: undefined;
  Home: undefined;
  App: undefined;
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
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="App" component={AppTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
