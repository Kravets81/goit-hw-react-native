import React from "react";

import { useState } from "react";

import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import {
  container,
  wrapper,
  wrapperAuthInput,
  keyboardAvoidingContainer,
  userPhoto,
  iconAdd,
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
} from "../LoginScreen/LoginScreen.styled";

import backgroundImg from "../assets/img/PhotoBG.jpg";

const initialState = {
  username: "",
  emailAddress: "",
  password: "",
};

const LoginScreen = ({ onLayoutRootView }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [state, setState] = useState(initialState);

  const [isFocusInput, setIsFocusInput] = useState({
    username: false,
    emailAddress: false,
    password: false,
  });

  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isFocusView, setIsFocusView] = useState(false);

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };

  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View onLayout={onLayoutRootView} style={container}>
      <ImageBackground source={backgroundImg} style={bgImg}>
        <View style={wrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={keyboardAvoidingContainer}
          >
            <TouchableWithoutFeedback onPress={handleKeyboardHide}>
              <View style={wrapperAuthInput}>
                <Text style={title} allowFontScaling={false}>
                  Увійти
                </Text>

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
                  value={state.emailAddress}
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
                    value={state.password}
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
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>

          {!isShowKeyboard && (
            <View style={buttonWrapper}>
              <TouchableOpacity style={buttonAuth}>
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
  );
};

export default LoginScreen;
