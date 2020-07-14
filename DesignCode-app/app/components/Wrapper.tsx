import React, { FC } from "react";

export interface WrapperProps {
  element: JSX.Element;
  [key: string]: {};
}

const Wrapper: FC<WrapperProps> = ({ element, ...otherProps }) => {
  return React.cloneElement(element, otherProps);
};

export default Wrapper;
