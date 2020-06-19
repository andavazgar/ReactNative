import { Platform, StyleSheet } from "react-native";
import colors from "./colors";
export { colors };

export default StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },
  text: {
    fontSize: 18,
    color: colors.darkGray,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
