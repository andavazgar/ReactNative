import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect, useState } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import Avatar from "../components/Avatar";
import Card from "../components/Card";
import CourseCard from "../components/CourseCard";
import Menu from "../components/Menu";
import SmallCard from "../components/SmallCard";
import colors from "../config/colors";
import { Svgs } from "../config/icons";
import cards from "../data/cards";
import courses from "../data/courses";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import Routes from "../navigation/Routes";
import { RootState } from "../store/configureStore";
import { uiActions } from "../store/ui";

import LoginScreen from "./LoginScreen";

export interface HomeScreenProps {
  navigation: StackNavigationProp<AppNavigatorParamList, Routes.HOME_SCREEN>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const isLoginVisible = useSelector((state: RootState) => state.ui.isLoginVisible);
  const isMenuVisible = useSelector((state: RootState) => state.ui.isMenuVisible);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [statusBarColor, setStatusBarColor] = useState<"light" | "dark">();

  useEffect(() => {
    if (isMenuVisible) {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 0.9,
          duration: 300,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.spring(opacity, {
          toValue: 0.5,
          useNativeDriver: true,
        }),
      ]).start();
      setStatusBarColor("light");
    } else {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 300,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.spring(opacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
      setStatusBarColor("dark");
    }
  }, [isMenuVisible, opacity, scale]);

  const handleMenuVisibility = () => {
    if (!user || Object.keys(user).length === 0) {
      dispatch(uiActions.openLoginModal());
    } else {
      dispatch(uiActions.openMenu());
    }
  };
  return (
    <RootContainer>
      <StatusBar style={statusBarColor} hidden={false} animated />
      <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
            <TitleBar>
              <TouchableOpacity onPress={handleMenuVisibility}>
                <Avatar />
              </TouchableOpacity>
              <GreetingContainer>
                <Greeting>Welcome back,</Greeting>
                <Name>{user?.name}</Name>
              </GreetingContainer>
              <Svgs.IconNotifications
                color={colors.primary}
                style={{ position: "absolute", right: 20 }}
              />
            </TitleBar>

            <ScrollView
              style={{ marginTop: 30, paddingBottom: 20 }}
              contentContainerStyle={{ paddingHorizontal: 12 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => {
                const { logo: image, subtitle: text } = card;
                return <SmallCard item={{ image, text }} key={index} />;
              })}
            </ScrollView>

            <Subtitle>Continue learning</Subtitle>
            <ScrollView
              style={{ paddingBottom: 30 }}
              contentContainerStyle={{ paddingRight: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate(Routes.DETAIL_SCREEN, { courseInfo: card })}
                >
                  <Card item={card} />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            <CoursesContainer>
              {courses.map((course, index) => (
                <CourseCard item={course} key={index} />
              ))}
            </CoursesContainer>
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
      <Menu />
      <LoginScreen isLoginVisible={isLoginVisible} />
    </RootContainer>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CoursesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
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

const RootContainer = styled.View`
  flex: 1;
  background: black;
`;

const Subtitle = styled.Text`
  color: ${colors.mediumGray};
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const TitleBar = styled.View`
  flex-direction: row;
  margin-top: 50px;
  padding-left: 20px;
`;

export default HomeScreen;
