import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tokens } from "../theme/tokens";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HomeFlowsStack } from "./HomeFlowsStack";
import { FunctionsStack } from "./FunctionsStack";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { ProfileStack } from "./ProfileStack";


function Placeholder() {
  return <View style={{ flex: 1, backgroundColor: tokens.colors.bg }} />;
}
export type AppTabsParamList = {
    Inicio: undefined;
    Funciones: { screen?: "SuggestedExercises" } | undefined;
    Perfil: undefined;
  };
  
  const Tab = createBottomTabNavigator<AppTabsParamList>();

export function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: tokens.colors.primary,
        tabBarInactiveTintColor: tokens.colors.mutedText,
        tabBarStyle: {
          height: 76,
          paddingTop: 10,
          paddingBottom: 18,
          borderTopWidth: 0,
          backgroundColor: "#fff",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          if (route.name === "Inicio") iconName = "home-outline";
          if (route.name === "Funciones") iconName = "apps-outline";
          if (route.name === "Perfil") iconName = "person-outline";

          return <Ionicons name={iconName} size={size ?? 22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeFlowsStack} />
      <Tab.Screen name="Funciones" component={FunctionsStack} />
      <Tab.Screen name="Perfil" component={ProfileStack} />
      
    </Tab.Navigator>
  );
}
