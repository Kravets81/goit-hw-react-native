import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  wrapper: {
    position: "relative",
    marginTop: "auto",
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 16,
    paddingTop: 0,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wrapperAuthInput: {
    width: "100%",
    gap: 16,

    flexDirection: "column",
    alignItems: "center",
  },
  keyboardAvoidingContainer: {
    width: "100%",
  },
  userPhoto: {
    position: "absolute",
    top: -60,

    width: 120,
    height: 120,
    borderRadius: 16,

    backgroundColor: "#F6F6F6",
  },

  iconAdd: {
    position: "absolute",
    width: 25,
    height: 25,
    bottom: 15,
    right: -12,
  },

  title: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: "center",
    letterSpacing: 0.3,

    paddingTop: 32,
    marginBottom: 33,
    color: "#212121",
  },
  input: {
    width: "100%",
    fontSize: 16,
    padding: 16,

    color: "#212121",
    backgroundColor: "#f6f6f6",

    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,

    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19,
  },

  lastInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 43,

    width: "100%",
    fontSize: 16,

    color: "#212121",
    backgroundColor: "#f6f6f6",

    borderWidth: 1,
    borderRadius: 8,

    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19,
  },
  passInput: {
    color: "#212121",
    width: "70%",

    padding: 16,

    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19,
  },
  passInputShow: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19,
  },

  bgImg: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button: {
    alignItems: "center",
    textAlign: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 32,
    paddingVertical: 16,

    fontWeight: "400",
    lineHeight: 18.75,
    fontSize: 16,
    color: "#FFFFFF",
  },
  lastButton: {
    backgroundColor: "transparent",
    color: "#1B4371",
  },
  buttonWrapper: {
    width: "100%",
    padding: 0,
    marginBottom: 132,
  },
  buttonAuth: {
    width: "100%",
  },
});

export const {
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
} = styles;