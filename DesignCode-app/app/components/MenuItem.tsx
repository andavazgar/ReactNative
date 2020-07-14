import React, { FC } from "react";
import styled from "styled-components/native";

import colors from "../config/colors";

import Icon from "./Wrapper";

export interface MenuItem {
  icon: JSX.Element;
  title: string;
  text: string;
}

export interface MenuItemProps {
  item: MenuItem;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  return (
    <Container>
      <IconView>
        <Icon element={item.icon} size={24} color={colors.primaryAlt} />
      </IconView>
      <Content>
        <Title>{item.title}</Title>
        <Text>{item.text}</Text>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const Content = styled.View`
  margin-left: 20px;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${colors.secondary};
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;

const Title = styled.Text`
  color: ${colors.secondary};
  font-size: 24px;
  font-weight: 600;
`;

export default MenuItem;
