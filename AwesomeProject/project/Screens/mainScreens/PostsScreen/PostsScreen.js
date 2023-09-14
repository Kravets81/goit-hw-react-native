import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Text, View, TouchableOpacity } from "react-native";
import Svg, { G, Path } from "react-native-svg";

import {
  container,
  header,
  addButton,
  toolbarContainer,
  title,
  navigateIcon,
} from "./PostScreen.styled";

const PostScreen = ({ onLayoutRootView }) => {
  const navigation = useNavigation();

  return (
    <View onLayout={onLayoutRootView} style={container}>
      <View style={header}>
        <Text style={title}>Публікації</Text>
        <Svg
          style={navigateIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <G stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round">
            <Path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9" />
          </G>
        </Svg>
      </View>

      <View style={usersWrapper}></View>

      <View style={toolbarContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Post");
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <Path fill="#fff" d="M0 0h24v24H0z" />
            <Path
              stroke="#212121"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".8"
              d="M3 3h7v7H3V3ZM14 3h7v7h-7V3ZM14 14h7v7h-7v-7ZM3 14h7v7H3v-7Z"
              clip-rule="evenodd"
            />
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity
          style={addButton}
          onPress={() => {
            navigation.navigate("CreatePost");
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
          >
            <Path
              fill="#FFFFFF"
              fill-opacity=".8"
              fill-rule="evenodd"
              d="M20.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
              clip-rule="evenodd"
            />
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <G
              stroke="#212121"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".8"
            >
              <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <Path
                d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                clip-rule="evenodd"
              />
            </G>
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostScreen;