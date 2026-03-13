import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import { tokens } from "../../theme/tokens";
import { AppText } from "../../components/ui/AppText";

type Feature = {
  title: string;
  description: string;
  icon: keyof typeof Feather.glyphMap;
  featured?: boolean;
  comingSoon?: boolean;
  onPress: () => void;
};

function FeatureCard({ item }: { item: Feature }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={item.onPress}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.06)",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        minHeight: 158,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View
          style={{
            width: 46,
            height: 46,
            borderRadius: 16,
            backgroundColor: item.featured
              ? "rgba(90,110,150,0.18)"
              : "rgba(45,147,108,0.12)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather
            name={item.icon}
            size={20}
            color={item.featured ? tokens.colors.secondary : tokens.colors.primary}
          />
        </View>

        <AppText
          style={{
            marginTop: 14,
            fontSize: 15,
            fontWeight: "900",
            color: tokens.colors.text,
          }}
        >
          {item.title}
        </AppText>

        <AppText
          style={{
            marginTop: 6,
            fontSize: 13,
            lineHeight: 18,
            color: tokens.colors.mutedText,
          }}
        >
          {item.description}
        </AppText>
      </View>

      {item.comingSoon ? (
        <View
          style={{
            alignSelf: "flex-start",
            marginTop: 12,
            paddingHorizontal: 10,
            height: 24,
            borderRadius: 12,
            backgroundColor: "rgba(0,0,0,0.05)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText
            style={{
              fontSize: 11,
              fontWeight: "900",
              color: tokens.colors.mutedText,
            }}
          >
            Próximamente
          </AppText>
        </View>
      ) : (
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          <AppText
            style={{
              fontSize: 12,
              fontWeight: "800",
              color: item.featured ? tokens.colors.secondary : tokens.colors.primary,
            }}
          >
            Abrir
          </AppText>
          <Feather
            name="arrow-right"
            size={14}
            color={item.featured ? tokens.colors.secondary : tokens.colors.primary}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

export function FunctionsScreen() {
  const features: Feature[] = [
    {
      title: "Agendar sesión",
      description: "Reservá una nueva sesión con tu psicólogo actual.",
      icon: "calendar",
      featured: true,
      onPress: () => console.log("Agendar sesión"),
    },
    {
      title: "Seminarios",
      description: "Accedé a seminarios semanales de psicoeducación.",
      icon: "users",
      onPress: () => console.log("Seminarios"),
    },
    {
      title: "Estado de ánimo",
      description: "Registrá cómo te sentís y llevá tu seguimiento.",
      icon: "smile",
      onPress: () => console.log("Estado de ánimo"),
    },
    {
      title: "Ejercicios",
      description: "Prácticas recomendadas por tu psicólogo.",
      icon: "activity",
      onPress: () => console.log("Ejercicios"),
    },
    {
      title: "Lectura diaria",
      description: "Lecturas breves para comprender mejor tus emociones.",
      icon: "book-open",
      featured: true,
      onPress: () => console.log("Lectura diaria"),
    },
    {
      title: "IA de apoyo",
      description: "Asistencia complementaria entre sesiones.",
      icon: "cpu",
      comingSoon: true,
      onPress: () => console.log("IA de apoyo"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tokens.colors.bg }} edges={["top"]}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 28,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View>
          <AppText style={{ fontSize: 22, fontWeight: "900", color: tokens.colors.text }}>
            Funciones
          </AppText>

          <AppText
            style={{
              marginTop: 4,
              color: tokens.colors.mutedText,
              lineHeight: 20,
            }}
          >
            Todas las herramientas que acompañan tu proceso en un solo lugar.
          </AppText>
        </View>

        {/* Intro card */}
        <View
          style={{
            marginTop: 18,
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 16,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.06)",
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 6 },
          }}
        >
          <AppText
            style={{
              fontSize: 12,
              fontWeight: "800",
              letterSpacing: 1,
              color: tokens.colors.mutedText,
            }}
          >
            EXPLORAR HERRAMIENTAS
          </AppText>

          <AppText
            style={{
              marginTop: 10,
              fontSize: 18,
              lineHeight: 24,
              fontWeight: "900",
              color: tokens.colors.text,
            }}
          >
            Elegí la función que necesitás hoy
          </AppText>

          <AppText
            style={{
              marginTop: 8,
              color: tokens.colors.mutedText,
              lineHeight: 20,
            }}
          >
            Desde registrar tu estado de ánimo hasta acceder a ejercicios,
            lecturas o seminarios.
          </AppText>
        </View>

        {/* Grid */}
        <View
          style={{
            marginTop: 16,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 12,
          }}
        >
          {features.map((feature) => (
            <View key={feature.title} style={{ width: "48.2%" }}>
              <FeatureCard item={feature} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}