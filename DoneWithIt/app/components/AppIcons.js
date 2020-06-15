import React from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

export default {
  chevronDown: (props) => (
    <Ionicons name="ios-arrow-down" size={30} color={colors.light} {...props} />
  ),
  close: (props) => (
    <Ionicons name="md-close" size={30} color={colors.light} {...props} />
  ),
  email: (props) => (
    <Ionicons name="ios-mail" size={30} color={colors.light} {...props} />
  ),
  list: (props) => (
    <Ionicons name="ios-list" size={30} color={colors.light} {...props} />
  ),
  lock: (props) => (
    <Ionicons name="ios-lock" size={30} color={colors.light} {...props} />
  ),
  logout: (props) => (
    <Ionicons name="ios-log-out" size={30} color={colors.light} {...props} />
  ),
  messageBubble: (props) => (
    <Ionicons name="ios-text" size={30} color={colors.light} {...props} />
  ),
  messages: (props) => (
    <Ionicons
      name="ios-chatbubbles"
      size={30}
      color={colors.light}
      {...props}
    />
  ),
  person: (props) => (
    <Ionicons name="md-person" size={30} color={colors.light} {...props} />
  ),
  trash: (props) => (
    <EvilIcons name="trash" size={40} color={colors.light} {...props} />
  ),
};
