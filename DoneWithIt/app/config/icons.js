import React from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

import colors from "./colors";

export default {
  chevronDown: (
    <Ionicons name="ios-arrow-down" size={30} color={colors.light} />
  ),
  chevronRight: (
    <Ionicons name="ios-arrow-forward" size={30} color={colors.light} />
  ),
  close: <Ionicons name="md-close" size={30} color={colors.light} />,
  email: <Ionicons name="ios-mail" size={30} color={colors.light} />,
  list: <Ionicons name="ios-list" size={30} color={colors.light} />,
  lock: <Ionicons name="ios-lock" size={30} color={colors.light} />,
  logout: <Ionicons name="ios-log-out" size={30} color={colors.light} />,
  messageBubble: <Ionicons name="ios-text" size={30} color={colors.light} />,
  messages: <Ionicons name="ios-chatbubbles" size={30} color={colors.light} />,
  person: <Ionicons name="md-person" size={30} color={colors.light} />,
  trash: <EvilIcons name="trash" size={40} color={colors.light} />,
};
