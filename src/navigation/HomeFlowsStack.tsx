import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SessionDetailsScreen } from "../screens/home/SessionDetailsScreen";
import { CancelSessionScreen } from "../screens/home/CancelSessionScreen";
import { RescheduleSessionScreen } from "../screens/home/RescheduleSessionScreen";
import { NewSessionScreen } from "../screens/home/NewSessionScreen";
import { SeminarsScreen } from "../screens/home/SeminarsScreen";


export type HomeFlowsStackParamList = {
    Home:
      | {
          cancelled?: boolean;
  
          scheduled?: boolean;
          scheduledData?: {
            psychologist: string;
            dateLabel: string;
            startTime: string;
            zoomCode: string;
          };
        }
      | undefined;
  
    SessionDetails: {
      psychologist: string;
      dateLabel: string;
      startTime: string;
      zoomCode: string;
    };
  
    CancelSession: {
      psychologist: string;
      dateLabel: string;
      startTime: string;
    };
  
    RescheduleSession: {
      psychologist: string;
    };
  
    NewSession: undefined;
    Seminars: undefined;

  };  

const Stack = createNativeStackNavigator<HomeFlowsStackParamList>();

export function HomeFlowsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SessionDetails" component={SessionDetailsScreen} />
      <Stack.Screen name="CancelSession" component={CancelSessionScreen} />
      <Stack.Screen name="RescheduleSession" component={RescheduleSessionScreen}/>
      <Stack.Screen name="NewSession" component={NewSessionScreen} />
      <Stack.Screen name="Seminars" component={SeminarsScreen} />
    </Stack.Navigator>
  );
}
