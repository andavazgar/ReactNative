import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import Colors from "../config/Colors";

function ListItem({ image, title, subTitle, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: Colors.lightGray,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
