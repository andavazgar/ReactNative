import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Colors from "../config/Colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: Colors.secondary,
    fontWeight: "bold",
  },
  title: {
    paddingBottom: 7,
  },
});

export default Card;
