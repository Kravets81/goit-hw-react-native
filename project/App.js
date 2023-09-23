import "react-native-gesture-handler";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./Screens/mainScreens/Home";

// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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

  const routing = useRoute(null);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

//  <AuthStack.Screen name="Home" component={Home} />
//  <AuthStack.Screen name="Profile" component={ProfileScreen} />
//  <AuthStack.Screen name="Post" component={PostScreen} />
//  <AuthStack.Screen name="CreatePost" component={CreatePostsScreen} />
//  <AuthStack.Screen name="Comments" component={CommentsScreen} />
//  <AuthStack.Screen name="Map" component={MapScreen} />

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center",
//    //   },
// });

//Auth
// <AuthStack.Navigator
//   initialRouteName="Login"
//   screenOptions={{ headerShown: false }}
// >
//   <AuthStack.Screen name="Register" component={RegistrationScreen} />
//   <AuthStack.Screen name="Login" component={LoginScreen} />

//   {/* <View onLayout={onLayoutRootView}> */}
//   {/* // <StatusBar style="auto" />
//       // <Text>Open up App.js to start working on your app!</Text>
//       // <RegistrationScreen onLayout={onLayoutRootView} />
//       // <LoginScreen onLayout={onLayoutRootView} />
//       // <PostScreen onLayout={onLayoutRootView} />
//       // <CreatePostsScreen />
//       // <CommentsScreen />
//       // <MapScreen />
//       // <Home /> */}
//   {/* <ProfileScreen /> */}
//   {/* </View> */}
// </AuthStack.Navigator>;
