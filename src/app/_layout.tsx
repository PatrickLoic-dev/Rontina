import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    GeistMedium: require("../../assets/fonts/Geist-Medium.ttf"),
    GeistRegular: require("../../assets/fonts/Geist-Regular.ttf"),
    GeistSemiBold: require("../../assets/fonts/Geist-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
