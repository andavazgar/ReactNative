import React, { FC, useEffect, useRef } from "react";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";

import colors from "../config/colors";
import icons from "../config/icons";
import { RootState } from "../store/configureStore";
import { closeMenu } from "../store/menu";

import MenuItem from "./MenuItem";
import Icon from "./Wrapper";

const { height: screenHeight } = Dimensions.get("window");

const Menu: FC = () => {
  const isMenuVisible = useSelector((state: RootState) => state.menu.isMenuVisible);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const top = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    if (isMenuVisible) {
      Animated.spring(top, {
        toValue: 75,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: true,
      }).start();
    }
  }, [isMenuVisible]);

  return (
    <AnimatedContainer style={{ transform: [{ translateY: top }] }}>
      <Cover source={require("../assets/background2.jpg")}>
        <Title>{user.name}</Title>
        <Subtitle>{user.position}</Subtitle>
      </Cover>
      <TouchableOpacity
        style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1 }}
        onPress={() => dispatch(closeMenu())}
      >
        <CloseView>
          <Icon element={icons.close} size={44} color={colors.primaryAlt} />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
  position: absolute;
  width: 100%;
  max-width: 500px;
  height: 100%;
  border-radius: 10px;
  align-self: center;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Content = styled.View`
  height: ${screenHeight}px;
  background: ${colors.background};
  padding: 50px;
`;

const Cover = styled.ImageBackground`
  height: 142px;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-top: 8px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

export default Menu;

// DATA
const items = [
  {
    icon: icons.settings,
    title: "Account",
    text: "settings",
  },
  {
    icon: icons.card,
    title: "Billing",
    text: "payments",
  },
  {
    icon: icons.compass,
    title: "Learn React",
    text: "start course",
  },
  {
    icon: icons.exit,
    title: "Log out",
    text: "see you soon!",
  },
];
