import Constants from "expo-constants";
// @ts-ignore
import dev from "./envLocal";

const ENV = {
  dev,
  staging: {
    graphqlUrl: "",
    refreshTokenUrl: "",
  },
  prod: {
    graphqlUrl: "",
    refreshTokenUrl: "",
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod") {
    return ENV.prod;
  }
};

// const getEnvVars = () => {
//   if (__DEV__) {
//     const vars = returnEnvVars();
//     return returnEnvVars();
//   } else {
//     return new Promise((resolve) => {
//       resolve(Constants.manifest.extra);
//     });
//   }
// };

// const returnEnvVars = async () => {
//   // @ts-ignore
//   const vars = await import("./envLocal");
//   console.log("func", vars);

//   return vars.default;
// };

export default getEnvVars;
