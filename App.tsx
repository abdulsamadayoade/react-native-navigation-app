import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const fonts = {
  "Matter-Bold": require("./assets/fonts/Matter-Bold.ttf"),
  "Matter-SemiBold": require("./assets/fonts/Matter-SemiBold.ttf"),
  "Matter-Medium": require("./assets/fonts/Matter-Medium.ttf"),
  "Matter-Regular": require("./assets/fonts/Matter-Regular.ttf"),
  "Matter-Light": require("./assets/fonts/Matter-Light.ttf"),
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
