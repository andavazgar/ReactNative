import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import DecoratedIcon from "./DecoratedIcon";
import AppText from "./AppText";

function CategoryPickerItem({ item, numberOfColumns, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { width: `${parseInt(100 / numberOfColumns)}%` },
      ]}
      onPress={onPress}
    >
      <DecoratedIcon
        icon={item.iconInfo.icon}
        backgroundColor={item.iconInfo.backgroundColor}
        size={80}
      />
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 15,
  },
  text: {
    width: "75%",
    textAlign: "center",
    marginTop: 5,
  },
});

export default CategoryPickerItem;
