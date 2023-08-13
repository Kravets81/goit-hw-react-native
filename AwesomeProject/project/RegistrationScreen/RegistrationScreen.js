import React from "react";

import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";

import {
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import {
  container,
  wrapper,
  wrapperAuthInput,
  keyboardAvoidingContainer,
  avatarUser,
  avatarWrapper,
  title,
  input,
  lastInput,
  passInput,
  passInputShow,
  bgImg,
  button,
  lastButton,
  buttonWrapper,
  buttonAuth,
  btnAddAvatar,
  btnAddAvatarLoad,
  btnAddAvatarSvg,
  btnAddAvatarSvgLoad,
} from "../RegistrationScreen/RegistrationScreen.styled";

import backgroundImg from "../assets/img/PhotoBG.jpg";
import SvgAddButton from "../assets/svg/SvgAddButton";

const initialState = {
  username: "",
  emailAddress: "",
  password: "",
};

const RegistrationScreen = ({ onLayoutRootView }) => {
  const [state, setState] = useState(initialState);

  const { username, emailAddress, password } = state;

  const [isFocusInput, setIsFocusInput] = useState({
    username: false,
    emailAddress: false,
    password: false,
  });

  const [isFocusView, setIsFocusView] = useState(false);

  const [avatar, setAvatar] = useState(null);

  const [isShowPassword, setIsShowPassword] = useState(true);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };

  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const cleanRegisterForm = () => {
    setState((prevState) => ({
      ...prevState,
      username: "",
      emailAddress: "",
      password: "",
    }));
  };

  const handleSubmitUserRegister = (initialState) => {
    if (!username.trim() || !emailAddress.trim() || !password.trim()) {
      console.log("Будь ласка заповніть поля");
      return;
    }

    if (!emailAddress.includes("@")) {
      console.log("Адрес електронної пошти повинен містити символ '@'");
      return;
    }
    console.log(
      `username: ${username}, emailAddress: ${emailAddress}, password: ${password}`
    );
    cleanRegisterForm();
  };

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
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View onLayout={onLayoutRootView} style={container}>
        <ImageBackground source={backgroundImg} style={bgImg}>
          <View style={wrapper}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={keyboardAvoidingContainer}
            >
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
                  Реєстрація
                </Text>
                <TextInput
                  placeholder="Логин"
                  style={{
                    ...input,
                    borderColor: isFocusInput.username ? "#FF6C00" : "#F6F6F6",
                    backgroundColor: isFocusInput.username
                      ? "#FFFFFF"
                      : "#F6F6F6",
                  }}
                  textContentType="username"
                  value={username}
                  onFocus={() => {
                    handleFocus();
                    setIsShowKeyboard(true);
                    setIsFocusInput({
                      ...isFocusInput,
                      username: true,
                    });
                  }}
                  onBlur={() => {
                    setIsFocusInput({
                      ...isFocusInput,
                      username: false,
                    });
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      username: value,
                    }))
                  }
                />

                <TextInput
                  placeholder="Адреса електронної пошти"
                  style={{
                    ...input,
                    borderColor: isFocusInput.emailAddress
                      ? "#FF6C00"
                      : "#F6F6F6",
                    backgroundColor: isFocusInput.emailAddress
                      ? "#FFFFFF"
                      : "#F6F6F6",
                  }}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoComplete="email"
                  value={emailAddress}
                  onFocus={() => {
                    handleFocus,
                      setIsShowKeyboard(true),
                      setIsFocusInput({
                        ...isFocusInput,
                        emailAddress: true,
                      });
                  }}
                  onBlur={() => {
                    setIsFocusInput({
                      ...isFocusInput,
                      emailAddress: false,
                    });
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      emailAddress: value,
                    }))
                  }
                />

                <View
                  style={{
                    ...lastInput,
                    borderColor: isFocusView ? "#FF6C00" : "#e8e8e8",
                    backgroundColor: isFocusView ? "#FFFFFF" : "#F6F6F6",
                  }}
                >
                  <TextInput
                    placeholder="Пароль"
                    style={{
                      ...passInput,
                    }}
                    textContentType="password"
                    value={password}
                    secureTextEntry={isShowPassword}
                    onFocus={() => {
                      handleFocus();
                      setIsShowKeyboard(true);
                      setIsFocusInput({
                        ...isFocusInput,
                        password: true,
                      });
                      setIsFocusView(true);
                    }}
                    onBlur={() => {
                      setIsFocusInput({
                        ...isFocusInput,
                        password: false,
                      });
                      setIsFocusView(false);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <TouchableOpacity>
                    <Text
                      style={passInputShow}
                      onPress={() => {
                        setIsShowPassword((prevState) => !prevState);
                      }}
                    >
                      {isShowPassword ? "Показати" : "Сховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>

            {!isShowKeyboard && (
              <View style={buttonWrapper}>
                <TouchableOpacity
                  style={buttonAuth}
                  onPress={handleSubmitUserRegister}
                >
                  <Text style={button}>Зареєстуватися</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonAuth}>
                  <Text style={[button, lastButton]}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
