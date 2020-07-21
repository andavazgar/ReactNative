import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import CloseButton from "../components/CloseButton";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import Routes from "../navigation/Routes";

export interface SectionScreenProps {
  route: RouteProp<AppNavigatorParamList, Routes.DETAIL_SCREEN>;
  navigation: StackNavigationProp<AppNavigatorParamList, Routes.DETAIL_SCREEN>;
}

const SectionScreen: React.FC<SectionScreenProps> = ({ route, navigation }) => {
  const courseInfo = route.params.courseInfo;

  return (
    <Container>
      <StatusBar hidden animated />
      <Cover source={courseInfo.image}>
        <Wrapper>
          <Logo source={courseInfo.logo} resizeMode="contain" />
          <Subtitle>{courseInfo.subtitle}</Subtitle>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseButton />
          </TouchableOpacity>
        </Wrapper>
        <Title>{courseInfo.title}</Title>
        <Caption>{courseInfo.caption}</Caption>
      </Cover>
    </Container>
  );
};

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  width: 300px;
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.ImageBackground`
  height: 375px;
  padding: 45px 25px 25px;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

const Subtitle = styled.Text`
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;

const Title = styled.Text`
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 170px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export default SectionScreen;
