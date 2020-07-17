import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import Avatar from "../components/Avatar";
import Card from "../components/Card";
import CourseCard from "../components/CourseCard";
import Menu from "../components/Menu";
import SmallCard from "../components/SmallCard";
import colors from "../config/colors";
import { Svgs } from "../config/icons";
import { HomeNavigatorParamList } from "../navigation/HomeNavigator";
import Routes from "../navigation/Routes";
import { RootState } from "../store/configureStore";
import { openMenu } from "../store/menu";

export interface HomeScreenProps {
  navigation: StackNavigationProp<HomeNavigatorParamList, Routes.HOME_SCREEN>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const isMenuVisible = useSelector((state: RootState) => state.menu.isMenuVisible);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

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

      StatusBar.setBarStyle("light-content", true);
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
      StatusBar.setBarStyle("dark-content", true);
    }
  });

  const handleMenuVisibility = () => {
    dispatch(openMenu());
  };
  return (
    <RootContainer>
      <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
            <TitleBar>
              <TouchableOpacity onPress={handleMenuVisibility}>
                <Avatar />
              </TouchableOpacity>
              <GreetingContainer>
                <Greeting>Welcome back,</Greeting>
                <Name>{user.name}</Name>
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
                const { logo: image, caption: text } = card;
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
                  onPress={() => navigation.navigate(Routes.DETAIL_SCREEN)}
                >
                  <Card item={card} />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map((course, index) => (
              <CourseCard item={course} key={index} />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
      <Menu />
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

// DATA
const cards = [
  {
    title: "Styled components",
    image: require("../assets/background2.jpg"),
    logo: require("../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "5 of 12 sections",
  },
  {
    title: "Design",
    image: require("../assets/background7.jpg"),
    logo: require("../assets/logo-figma.png"),
    caption: "Figma",
    subtitle: "1 of 10 sections",
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Andrés",
    avatar: require("../assets/andavazgar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Andrés",
    avatar: require("../assets/andavazgar.jpg"),
    caption: "Learn to design and code a React site",
  },
];
