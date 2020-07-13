import React, { FC } from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

export interface SmallCardItem {
  image: ImageSourcePropType;
  text: string;
}

export interface SmallCardProps {
  item: SmallCardItem;
}

const SmallCard: FC<SmallCardProps> = ({ item }) => {
  return (
    <Container>
      <Image source={item.image} resizeMode="contain" />
      <Text>{item.text}</Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background: white;
  height: 60px;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-left: 8px;
`;

export default SmallCard;
