import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import colors from "../../config/colors";
import AppIcons from "../AppIcons";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <AppIcons.trash />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
