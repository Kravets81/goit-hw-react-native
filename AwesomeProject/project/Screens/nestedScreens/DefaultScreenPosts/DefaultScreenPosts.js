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
} from "./DefaultPostScreen.styled";

const DefaultPostScreen = ({ onLayoutRootView }) => {
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
    </View>
  );
};

export default DefaultPostScreen;
