import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import Colors from "../config/Colors";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  rightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight underlayColor={Colors.lightGray} onPress={onPress}>
        <View style={[styles.container, style]}>
          {image ? (
            <Image style={styles.image} source={image} />
          ) : (
            IconComponent
          )}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: Colors.mediumGray,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
