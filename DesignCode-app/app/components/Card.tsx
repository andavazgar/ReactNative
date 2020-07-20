import React, { FC } from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

import colors from "../config/colors";

export interface CardItem {
  image: ImageSourcePropType;
  title: string;
  logo: ImageSourcePropType;
  caption: string;
  subtitle: string;
}

export interface CardProps {
  item: CardItem;
}

const Card: FC<CardProps> = ({ item }) => {
  return (
    <Container style={{ elevation: 8 }}>
      <Cover source={item.image}>
        <Title>{item.title}</Title>
      </Cover>
      <Content>
        <Logo source={item.logo} resizeMode="contain" />
        <Wrapper>
          <Subtitle>{item.subtitle}</Subtitle>
          <Caption>{item.caption}</Caption>
        </Wrapper>
      </Content>
    </Container>
  );
};

const Caption = styled.Text`
  color: ${colors.mediumGray};
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px 0 20px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const Cover = styled.ImageBackground`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Subtitle = styled.Text`
  color: ${colors.secondary};
  font-size: 20px;
  font-weight: 600;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 0 20px;
  width: 55%;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

export default Card;
