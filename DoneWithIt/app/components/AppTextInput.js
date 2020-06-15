import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import defaultStyles from "../config/defaultStyles";

function AppTextInput({
  IconComponent,
  iconColor = defaultStyles.colors.mediumGray,
  ...otherProps
}) {
  let icon;
  if (IconComponent) {
    icon = { ...IconComponent };
    icon.props = {
      ...IconComponent.props,
      color: iconColor,
      style: styles.icon,
    };
  }

  return (
    <View style={styles.container}>
      {icon}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
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
