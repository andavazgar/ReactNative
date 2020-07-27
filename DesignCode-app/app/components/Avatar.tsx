import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";

import { RootState } from "../store/configureStore";

export interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = ({}) => {
  const user = useSelector((state: RootState) => state.user);

  return <Image source={{ uri: user.photo }} />;
};

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

export default Avatar;
