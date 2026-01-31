import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SuggestedExercisesScreen } from "../screens/functions/SuggestedExercisesScreen";

export type FunctionsStackParamList = {
  SuggestedExercises: undefined;
};

const Stack = createNativeStackNavigator<FunctionsStackParamList>();

export function FunctionsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SuggestedExercises" component={SuggestedExercisesScreen} />
    </Stack.Navigator>
  );
}
