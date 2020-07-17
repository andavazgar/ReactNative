import React from "react";
import styled from "styled-components/native";

export interface CoursesScreenProps {}

const CoursesScreen: React.FC<CoursesScreenProps> = ({}) => {
  return (
    <Container>
      <Text>Courses Screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

export default CoursesScreen;
