import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import Svg, { G, Path } from "react-native-svg";

import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

import {
  container,
  wrapper,
  wrapperAuthInput,
  avatarUser,
  avatarWrapper,
  title,
  bgImg,
  btnAddAvatar,
  btnAddAvatarLoad,
  btnAddAvatarSvg,
  btnAddAvatarSvgLoad,
  addButton,
  toolbarContainer,
} from "./ProfileScreen.styled";

import backgroundImg from "../../../assets/img/PhotoBG.jpg";
import SvgAddButton from "../../../assets/svg/SvgAddButton";

const initialState = {
  username: "",
  emailAddress: "",
  password: "",
};

const ProfileScreen = ({ onLayoutRootView }) => {
  const navigation = useNavigation();

  const [state, setState] = useState(initialState);

  const { username, emailAddress, password } = state;

  const [isFocusInput, setIsFocusInput] = useState({
    username: false,
    emailAddress: false,
    password: false,
  });

  const [isFocusView, setIsFocusView] = useState(false);

  const [avatar, setAvatar] = useState(null);

  const onLoadAvatar = async () => {
    console.log("onLoadAvatar started");
    try {
      const avatarImg = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });

      console.log("avatarImg:", avatarImg);

      if (avatarImg.type === "cancel") {
        console.log("Avatar selection cancelled");
        return setAvatar(null);
      }

      setAvatar(avatarImg);
    } catch (error) {
      console.error("Error selecting avatar:", error);
    }
  };

  return (
    <View onLayout={onLayoutRootView} style={container}>
      <ImageBackground source={backgroundImg} style={bgImg}>
        <View style={wrapper}>
          <View style={wrapperAuthInput}>
            <View style={avatarWrapper}>
              {avatar && (
                <Image
                  style={avatarUser}
                  source={{ uri: avatar.assets[0].uri }}
                />
              )}
              <TouchableOpacity
                style={avatar ? btnAddAvatarLoad : btnAddAvatar}
                onPress={onLoadAvatar}
              >
                <SvgAddButton
                  style={avatar ? btnAddAvatarSvgLoad : btnAddAvatarSvg}
                />
              </TouchableOpacity>
            </View>

            <Text style={title} allowFontScaling={false}>
              Natali Romanova
            </Text>
          </View>
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
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
