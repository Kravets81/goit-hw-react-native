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

  wrapper: {
    marginTop: "auto",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "80%",

    paddingTop: 0,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  wrapperAuthInput: {
    width: "100%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  keyboardAvoidingContainer: {
    width: "100%",
  },

  avatarWrapper: {
    position: "absolute",
    top: -60,
    alignSelf: "center",

    width: 120,
    height: 120,

    backgroundColor: "#f6f6f6",
    borderRadius: 16,

    backgroundColor: "#F6F6F6",
    zIndex: 1,
  },

  avatarUser: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  btnAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,

    alignItems: "center",
    alignContent: "center",

    width: 25,
    height: 25,

    color: "#ff6c00",
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },

  btnAddAvatarLoad: {
    position: "absolute",
    bottom: 14,
    right: -12.5,

    alignItems: "center",
    alignContent: "center",

    width: 25,
    height: 25,

    color: "#ff6c00",
    backgroundColor: "#ffffff",
    borderRadius: 50,

    transform: [{ rotate: "45deg" }],
  },

  btnAddAvatarSvg: {
    fill: "#ff6c00",
    stroke: "#ff6c00",
    backgroundColor: "#ffffff",
  },

  btnAddAvatarSvgLoad: {
    fill: "#bdbdbd",
    stroke: "#e8e8e8",
    backgroundColor: "#ffffff",
  },

  title: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: "center",
    letterSpacing: 0.3,

    paddingTop: 92,
    marginBottom: 33,
    color: "#212121",
  },

  input: {
    width: "100%",
    fontSize: 16,
    padding: 16,
    marginBottom: 16,

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
    marginBottom: 45,
  },

  buttonAuth: {
    width: "100%",
  },

  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",

    marginLeft: 39,
    marginRight: 39,

    backgroundColor: "#FF6C00",
  },

  toolbarContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "auto",

    paddingTop: 9,
    paddingBottom: 34,

    borderTopColor: "#BDBDBD",
    borderTopWidth: 0.5,
  },
});

export const {
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
  addButton,
  toolbarContainer,
} = styles;
