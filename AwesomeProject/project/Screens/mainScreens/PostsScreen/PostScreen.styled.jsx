import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export const {
  container,
  header,
  addButton,
  toolbarContainer,
  title,
  navigateIcon,
} = styles;
