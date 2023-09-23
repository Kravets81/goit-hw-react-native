import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from "../authScreens/RegistrationScreen/RegistrationScreen";

import LoginScreen from "../authScreens/LoginScreen/LoginScreen";
import PostScreen from "../mainScreens/PostsScreen/PostsScreen";
import CreatePostsScreen from "../mainScreens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../mainScreens/ProfileScreen/ProfileScreen";

export const useRoute = (isAuth) => {
  if (isAuth) {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          paddingBottom: 35,
          paddingRight: 80,
          paddingLeft: 80,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "CreatePost") {
            iconName = focused ? "md-add-circle-outline" : "md-add";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "Post") {
            iconName = focused ? "grid-outline" : "grid";
            size = focused ? size + 8 : size + 2;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <MainTab.Screen
        options={{ tabBarShowLabel: false }}
        name="Post"
        component={PostScreen}
      />
      <MainTab.Screen
        options={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: ((route) => {
            if (route.name === "CreatePost") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
        name="CreatePost"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{ tabBarShowLabel: false }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
