import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
  },
  primaryBtn: {
    backgroundColor: "black",
    justifyContent: "center",
    height: 50,
    marginVertical: 5,
  },
  secondaryBtn: {
    backgroundColor: "white",
    justifyContent: "center",
    height: 50,
    marginVertical: 5,
    color: "black",
  },
  font1: {
    color: "#000",
  },
  font17: {
    color: "#000",
    fontSize: 17,
  },
};

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
  },
  primaryBtn: {
    backgroundColor: "#fff",
    justifyContent: "center",
    height: 50,
    marginVertical: 5,
    color: "black",
  },
  secondaryBtn: {
    height: 50,
    marginVertical: 5,
    justifyContent: "center",
  },
  font1: {
    color: "#fff",
  },
  font17: {
    color: "#fff",
    fontSize: 17,
  },
};
