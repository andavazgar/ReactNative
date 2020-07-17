import React from "react";
import styled from "styled-components/native";

export interface SectionScreenProps {}

const SectionScreen: React.FC<SectionScreenProps> = ({}) => {
  return (
    <Container>
      <Text>Section Screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

export default SectionScreen;
