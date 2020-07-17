import React from "react";
import styled from "styled-components/native";

export interface ProjectsScreenProps {}

const ProjectsScreen: React.FC<ProjectsScreenProps> = ({}) => {
  return (
    <Container>
      <Text>Projects Screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

export default ProjectsScreen;
