import { Screen } from "./src/components/layout/Screen";
import { AppText } from "./src/components/ui/AppText";

export default function App() {
  return (
    <Screen centered>
      <AppText variant="title">Mental</AppText>

      <AppText style={{ marginTop: 12 }}>
        Esta pantalla usa el componente Screen
      </AppText>

      <AppText variant="caption" style={{ marginTop: 6 }}>
        Si ves esto centrado, ya funciona ✅
      </AppText>
    </Screen>
  );
}
