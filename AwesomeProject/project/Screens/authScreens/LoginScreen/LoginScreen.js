import React from "react";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import {
  container,
  wrapper,
  wrapperAuthInput,
  keyboardAvoidingContainer,
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

import backgroundImg from "../../../assets/img/PhotoBG.jpg";

const initialState = {
  username: "",
  emailAddress: "",
  password: "",
};

const LoginScreen = ({ onLayoutRootView }) => {
  const navigation = useNavigation();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [state, setState] = useState(initialState);

  const { emailAddress, password } = state;

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

  const clearUserForm = () => {
    setState((prevState) => ({ ...prevState, emailAddress: "", password: "" }));
  };

  handleSubmitUserLogin = (initialState) => {
    if (!emailAddress.trim() || !password.trim()) {
      console.log("Будь ласка заповніть поля");
      return;
    }

    if (!emailAddress.includes("@")) {
      console.log("Адрес електронної пошти повинен містити символ '@'");
      return;
    }

    console.log(`emailAddress:${emailAddress}, password: ${password} `);
    clearUserForm();
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
                  autoComplete="email"
                  value={emailAddress}
                  onFocus={() => {
                    handleFocus(),
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

              {!isShowKeyboard && (
                <View style={buttonWrapper}>
                  <TouchableOpacity
                    style={buttonAuth}
                    onPress={() => {
                      handleSubmitUserLogin();
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={button}>Увійти</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={buttonAuth}
                    onPress={() => {
                      navigation.navigate("Register");
                    }}
                  >
                    <Text style={[button, lastButton]}>
                      Немає акаунту? Зареєструватися
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
