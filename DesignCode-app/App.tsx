import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import Card from "./app/components/Card";
import CourseCard from "./app/components/CourseCard";
import Menu from "./app/components/Menu";
import SmallCard from "./app/components/SmallCard";
import colors from "./app/config/colors";
import { Svgs } from "./app/config/icons";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <TitleBar>
              <Avatar source={require("./app/assets/andavazgar.jpg")} />
              <GreetingContainer>
                <Greeting>Welcome back,</Greeting>
                <Name>Andrés</Name>
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
                <Card item={card} key={index} />
              ))}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map((course, index) => (
              <CourseCard item={course} key={index} />
            ))}
          </ScrollView>
        </SafeAreaView>

        <Menu />
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
  margin-top: 10px;
  text-transform: uppercase;
`;

const TitleBar = styled.View`
  flex-direction: row;
  margin-top: 50px;
  padding-left: 20px;
`;

// DATA
const cards = [
  {
    title: "Styled components",
    image: require("./app/assets/background2.jpg"),
    logo: require("./app/assets/logo-react.png"),
    caption: "React Native",
    subtitle: "5 of 12 sections",
  },
  {
    title: "Design",
    image: require("./app/assets/background7.jpg"),
    logo: require("./app/assets/logo-figma.png"),
    caption: "Figma",
    subtitle: "1 of 10 sections",
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./app/assets/background13.jpg"),
    logo: require("./app/assets/logo-studio.png"),
    author: "Andrés",
    avatar: require("./app/assets/andavazgar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./app/assets/background11.jpg"),
    logo: require("./app/assets/logo-react.png"),
    author: "Andrés",
    avatar: require("./app/assets/andavazgar.jpg"),
    caption: "Learn to design and code a React site",
  },
];
