import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import { RootState } from "../store/configureStore";
import { updateUser } from "../store/user";

export interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = ({}) => {
  const [avatar, setAvatar] = useState("https://cl.ly/55da82beb939/download/avatar-default.jpg");
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      fetch("https://uifaces.co/api?limit=1", {
        headers: new Headers({
          "X-API-KEY": "eeaafbe81657073cd70ac6e3de1bd6",
        }),
      })
        .then((response) => response.json())
        .then((jsonResponse) => {
          dispatch(updateUser(jsonResponse[0]));
          setAvatar(jsonResponse[0].photo);
        });
    }
  }, []);

  return <Image source={{ uri: avatar }} />;
};

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

export default Avatar;
