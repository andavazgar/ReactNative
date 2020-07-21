import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import icons from "../config/icons";

import Icon from "./Wrapper";

export interface CloseButtonProps {}

const CloseButton: React.FC<CloseButtonProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Icon element={icons.close} size={36} color={colors.primary} style={{ top: -2 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CloseButton;
