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

  createPublicationWrapper: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  publicationImg: {
    width: "100%",
    height: 240,
    marginBottom: 8,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",

    backgroundColor: "#F6F6F6",
  },

  downloadButton: {
    marginBottom: 43,
  },

  downloadButtonTitle: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#BDBDBD",
    lineHeight: 18.75,
  },

  captionInput: {
    marginBottom: 16,
    paddingVertical: 16,

    width: "100%",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

  locationPicker: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 32,

    width: "100%",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

  locationIcon: {},

  locationNameInput: {
    width: "94%",

    paddingVertical: 16,
    paddingLeft: 4,

    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18.75,
  },

  publishPostButton: {
    paddingVertical: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },

  publishPostButtonTitle: {
    marginLeft: "auto",
    marginRight: "auto",

    color: "#BDBDBD",

    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18.75,
  },

  deleteButton: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: 42,

    paddingHorizontal: 23,
    paddingVertical: 8,

    borderRadius: 20,

    backgroundColor: "#F6F6F6",
  },
});

export const {
  container,
  header,
  navigateIcon,
  title,
  createPublicationWrapper,
  publicationImg,
  downloadButton,
  downloadButtonTitle,
  captionInput,
  locationPicker,
  locationNameInput,
  publishPostButton,
  publishPostButtonTitle,
  deleteButton,
  locationIcon,
} = styles;
