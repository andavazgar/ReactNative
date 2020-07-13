import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";

import Card from "./app/components/Card";
import colors from "./app/config/colors";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <TitleBar>
          <Avatar source={require("./app/assets/andavazgar.jpg")} />
          <GreetingContainer>
            <Greeting>Welcome back,</Greeting>
            <Name>Andrés</Name>
          </GreetingContainer>
        </TitleBar>
        <Subtitle>Continue learning</Subtitle>
        <Card />
      </Container>
    </>
  );
}

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

const Greeting = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.mediumGray};
`;

const GreetingContainer = styled.View`
  margin-left: 16px;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secondary};
`;

const Subtitle = styled.Text`
  color: ${colors.mediumGray};
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const TitleBar = styled.View`
  flex-direction: row;
  margin-top: 50px;
  padding-left: 20px;
`;
