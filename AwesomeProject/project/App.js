import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./RegistrationScreen/RegistrationScreen";
import LoginScreen from "./LoginScreen/LoginScreen";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View onLayout={onLayoutRootView}>
    //   <StatusBar style="auto" />
    //   <Text>Open up App.js to start working on your app!</Text>
    // <RegistrationScreen onLayout={onLayoutRootView} />
    <LoginScreen onLayout={onLayoutRootView} />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center",
//    //   },
// });
