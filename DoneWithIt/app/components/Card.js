import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, imageURL, thumbnailURL }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        preview={{ uri: thumbnailURL }}
        uri={imageURL}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={2}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
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
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    paddingBottom: 7,
  },
});

export default Card;
