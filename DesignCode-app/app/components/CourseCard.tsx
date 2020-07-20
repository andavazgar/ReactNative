import React, { FC, useState, useEffect } from "react";
import { ImageSourcePropType, ViewProps, useWindowDimensions } from "react-native";
import styled from "styled-components/native";

import colors from "../config/colors";

export interface CourseItem {
  image: ImageSourcePropType;
  logo: ImageSourcePropType;
  title: string;
  subtitle: string;
  avatar: ImageSourcePropType;
  caption: string;
  author: string;
}

export interface CourseCardProps extends ViewProps {
  item: CourseItem;
}

const CourseCard: FC<CourseCardProps> = ({ item, style }) => {
  const { width: screenWidth } = useWindowDimensions();
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const numOfColumns = Math.floor(screenWidth / 300);
    setCardWidth((screenWidth - 20 - 20 * numOfColumns) / numOfColumns);
  }, [screenWidth]);

  return (
    <Container style={[style, { width: cardWidth }]}>
      <Cover source={item.image}>
        <Logo source={item.logo} resizeMode="contain" />
        <Subtitle>{item.subtitle}</Subtitle>
        <Title>{item.title}</Title>
      </Cover>
      <Content>
        <Avatar source={item.avatar} />
        <Wrapper>
          <Caption>{item.caption}</Caption>
          <Author>Taught by {item.author}</Author>
        </Wrapper>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  height: 335px;
  background: white;
  margin: 10px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.ImageBackground`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  top: -30px;
  align-self: center;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 20px;
`;

const Title = styled.Text`
  width: 170px;
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin: 4px 0px 20px 20px;
`;

const Content = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin: 0 10px 0 20px;
`;

const Caption = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.secondary};
`;

const Author = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: ${colors.mediumGray};
  margin-top: 4px;
`;

const Wrapper = styled.View``;

export default CourseCard;
