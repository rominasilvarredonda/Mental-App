import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SessionDetailsScreen } from "../screens/home/SessionDetailsScreen";

export type HomeFlowsStackParamList = {
  Home: undefined;
  SessionDetails: {
    psychologist: string;
    dateLabel: string;
    startTime: string;
    zoomCode: string;
  };
};

const Stack = createNativeStackNavigator<HomeFlowsStackParamList>();

export function HomeFlowsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SessionDetails" component={SessionDetailsScreen} />
    </Stack.Navigator>
  );
}
