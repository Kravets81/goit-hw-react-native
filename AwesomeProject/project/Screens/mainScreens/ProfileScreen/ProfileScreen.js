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
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
