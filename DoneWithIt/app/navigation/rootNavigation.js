import React from "react";

export const navigationRef = React.createRef();

const navigation = {
  navigate: (name, params) => navigationRef.current.navigate(name, params),
};

export default navigation;
