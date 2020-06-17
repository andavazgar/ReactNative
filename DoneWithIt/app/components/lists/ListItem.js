import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import colors from "../../config/colors";
import Wrapper from "../Wrapper";

function ListItem({
  image,
  icon,
  title,
  subTitle,
  onPress,
  rightActions,
  RightIndicatorIcon,
  style,
}) {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={[styles.container, style]}>
          {image ? <Image style={styles.image} source={image} /> : icon}

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
            {RightIndicatorIcon && (
              <Wrapper
                element={RightIndicatorIcon}
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
