import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { PersonalInfoScreen } from "../screens/profile/PersonalInfo";
import { MyPsychologistScreen } from "../screens/profile/MyPsychologistScreen";

export type ProfileStackParamList = {
  ProfileHome: undefined;
  PersonalInfo: undefined;
  MyPsychologist: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileHome" component={ProfileScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="MyPsychologist" component={MyPsychologistScreen} />
    </Stack.Navigator>
  );
}
