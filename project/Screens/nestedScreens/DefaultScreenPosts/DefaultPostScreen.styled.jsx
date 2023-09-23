import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",

    paddingTop: 57,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,

    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 0.5,
  },

  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",

    justifyContent: "center",

    marginLeft: 39,
    marginRight: 39,

    backgroundColor: "#FF6C00",
  },

  toolbarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "auto",

    paddingTop: 9,
    paddingBottom: 34,

    borderTopColor: "#BDBDBD",
    borderTopWidth: 0.5,
  },

  publicationImg: {
    width: 345,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },

  title: {
    marginLeft: "auto",
    marginRight: "auto",

    fontSize: 17,
    lineHeight: 22,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#212121",
  },

  navigateIcon: {
    marginLeft: -24,
  },

  locationCommentsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 64,
  },
  commentsContainer: {
    flexDirection: "row",
    gap: 6,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 6,
  },
});

export const {
  container,
  header,
  addButton,
  toolbarContainer,
  title,
  navigateIcon,
  locationCommentsWrapper,
  commentsContainer,
  locationContainer,
  publicationImg,
} = styles;
