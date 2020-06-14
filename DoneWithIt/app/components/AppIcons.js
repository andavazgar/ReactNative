import React from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

import Colors from "../config/Colors";

export default {
  close: (props) => (
    <Ionicons name="md-close" size={30} color={Colors.light} {...props} />
  ),
  list: (props) => (
    <Ionicons name="ios-list" size={30} color={Colors.light} {...props} />
  ),
  logout: (props) => (
    <Ionicons name="ios-log-out" size={30} color={Colors.light} {...props} />
  ),
  messages: (props) => (
    <Ionicons
      name="ios-chatbubbles"
      size={30}
      color={Colors.light}
      {...props}
    />
  ),
  trash: (props) => (
    <EvilIcons name="trash" size={40} color={Colors.light} {...props} />
  ),
};
