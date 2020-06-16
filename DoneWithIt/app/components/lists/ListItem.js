import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import colors from "../../config/colors";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  rightActions,
  RightIndicatorIconComponent,
  style,
}) {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={[styles.container, style]}>
          {image ? (
            <Image style={styles.image} source={image} />
          ) : (
            IconComponent
          )}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>

          <View style={styles.rightIndicator}>
            {RightIndicatorIconComponent && (
              <RightIndicatorIconComponent
                color={colors.mediumGray}
                size={20}
              />
            )}
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
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  rightIndicator: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  subTitle: {
    color: colors.mediumGray,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
