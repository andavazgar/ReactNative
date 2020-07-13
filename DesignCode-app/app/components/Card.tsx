import React, { FC } from "react";
import styled from "styled-components/native";

import colors from "../config/colors";

export interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <Container>
      <Cover source={require("../assets/background1.jpg")}>
        <Title>Styled Components</Title>
      </Cover>
      <Content>
        <Logo source={require("../assets/logo-react.png")} />
        <Wrapper>
          <Caption>React Native</Caption>
          <Subtitle>5 of 12 sections</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

const Caption = styled.Text`
  color: ${colors.secondary};
  font-size: 20px;
  font-weight: 600;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px 0 0 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  overflow: hidden;
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
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Subtitle = styled.Text`
  color: ${colors.mediumGray};
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 4px;
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
