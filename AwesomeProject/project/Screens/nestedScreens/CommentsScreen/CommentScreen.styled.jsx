import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",

    paddingTop: 57,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,

    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 0.5,
  },

  navigateIcon: {
    marginRight: "auto",
  },

  title: {
    marginLeft: -10,
    marginRight: "auto",

    fontSize: 17,
    lineHeight: 22,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#212121",
  },

  createCommentsWrapper: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  publicationImgContainer: {
    width: "100%",
    height: 240,
    marginBottom: 34,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",

    backgroundColor: "#F6F6F6",
  },

  publicationImg: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },

  commentWrapper: {
    flexDirection: "row",
    marginBottom: 24,
  },

  commentTextWrapper: {
    width: "88%",
    padding: 16,

    backgroundColor: "#F6F6F6",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  commentTextWrapperUser: {
    marginRight: 16,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 6,
  },

  commentTextWrapperGuest: {
    marginLeft: 16,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 0,
  },

  textComment: {
    marginBottom: 8,

    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
  },

  dateComment: {
    color: "#BDBDBD",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 11.72,
  },

  addComments: {
    marginRight: "auto",
    paddingLeft: 16,

    color: "#212121",

    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18.75,
  },

  commentInputContainer: {
    marginTop: "auto",
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    padding: 7,

    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 18,
  },
});

export const {
  container,
  header,
  navigateIcon,
  title,
  createCommentsWrapper,
  publicationImgContainer,
  publicationImg,
  commentWrapper,
  commentTextWrapper,
  commentTextWrapperUser,
  commentTextWrapperGuest,
  textComment,
  dateComment,
  addComments,
  commentInputContainer,
} = styles;
