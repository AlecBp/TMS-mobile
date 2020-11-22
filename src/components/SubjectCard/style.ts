import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  spaceAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: 5,
    // box shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  textSize: {
    fontSize: 30
  }
})