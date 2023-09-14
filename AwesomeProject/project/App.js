import "react-native-gesture-handler";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/authScreens/LoginScreen/LoginScreen";
import PostScreen from "./Screens/mainScreens/PostsScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./Screens/mainScreens/CommentsScreen/CommentsScreen";
import MapScreen from "./Screens/mainScreens/MapScreen/MapScreen";
import Home from "./Screens/mainScreens/Home/Home";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen/ProfileScreen";

import { useFonts } from "expo-font";

const MainStack = createStackNavigator();

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
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Register" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Profile" component={ProfileScreen} />
        <MainStack.Screen name="Post" component={PostScreen} />
        <MainStack.Screen name="CreatePost" component={CreatePostsScreen} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
        <MainStack.Screen name="Map" component={MapScreen} />

        {/* <View onLayout={onLayoutRootView}> */}
        {/* // <StatusBar style="auto" />
        // <Text>Open up App.js to start working on your app!</Text>
        // <RegistrationScreen onLayout={onLayoutRootView} />
        // <LoginScreen onLayout={onLayoutRootView} />
        // <PostScreen onLayout={onLayoutRootView} />
        // <CreatePostsScreen />
        // <CommentsScreen />
        // <MapScreen />
        // <Home /> */}
        {/* <ProfileScreen /> */}
        {/* </View> */}
      </MainStack.Navigator>
    </NavigationContainer>
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
