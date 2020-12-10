import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  spaceAround: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    overflow: "hidden",
    backgroundColor: "#03c6fc",
    borderRadius: 7,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 25,
    marginVertical: 15,
  },
});
