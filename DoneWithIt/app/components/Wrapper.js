import React from "react";

function Wrapper({ element, ...otherProps }) {
  return React.cloneElement(element, { ...otherProps });
}

export default Wrapper;
