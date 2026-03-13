import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { PersonalInfoScreen } from "../screens/profile/PersonalInfo";
import { MyPsychologistScreen } from "../screens/profile/MyPsychologistScreen";
import { SubscriptionScreen } from "../screens/profile/SubscriptionScreen";
import { PaymentMethodsScreen } from "../screens/profile/PaymentMethodsScreen";

export type ProfileStackParamList = {
  ProfileHome: undefined;
  PersonalInfo: undefined;
  MyPsychologist: undefined;
  Subscription: undefined;
  PaymentMethods: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileHome" component={ProfileScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="MyPsychologist" component={MyPsychologistScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
    </Stack.Navigator>
  );
}
