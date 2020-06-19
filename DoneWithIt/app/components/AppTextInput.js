import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import defaultStyles, { colors } from "../config/defaultStyles";
import Wrapper from "./Wrapper";

function AppTextInput({
  icon,
  iconColor = colors.mediumGray,
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <Wrapper element={icon} style={styles.icon} color={iconColor} />}

      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.mediumGray}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
    fontSize: 25,
  },
  textInput: {
    ...defaultStyles.text,
    flex: 1,
  },
});

export default AppTextInput;
