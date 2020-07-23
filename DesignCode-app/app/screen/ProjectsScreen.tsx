import React, { useRef, useState } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";
import { useSelector } from "react-redux";

import ProjectCard from "../components/ProjectCard";
import colors from "../config/colors";
import projects from "../data/projects";
import { RootState } from "../store/configureStore";

export interface ProjectsScreenProps {}

const ProjectsScreen: React.FC<ProjectsScreenProps> = ({}) => {
  const [projectsCards, setProjectsCards] = useState(projects);
  const currentIndex = useRef(0);
  const isProjectCardOpen = useSelector((state: RootState) => state.ui.isProjectCardOpen);
  const isProjectCardOpenRef = useRef(isProjectCardOpen);
  const scale = useRef(new Animated.Value(0.9)).current;
  const translateY = useRef(new Animated.Value(44)).current;
  const thirdScale = useRef(new Animated.Value(0.8)).current;
  const thirdTranslateY = useRef(new Animated.Value(-50)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        if (gestureState.dx === 0 && gestureState.dy === 0) {
          return false;
        }

        if (isProjectCardOpenRef.current) {
          return false;
        }

        return true;
      },
      onPanResponderGrant: () => {
        Animated.spring(scale, { toValue: 1, useNativeDriver: false }).start();
        Animated.spring(translateY, { toValue: 0, useNativeDriver: false }).start();

        Animated.timing(thirdScale, {
          toValue: 0.9,
          duration: 100,
          useNativeDriver: false,
        }).start();
        Animated.timing(thirdTranslateY, {
          toValue: 44,
          duration: 100,
          useNativeDriver: false,
        }).start();
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 200) {
          Animated.timing(pan, {
            toValue: { x: gestureState.dx, y: 1000 },
            duration: 1000,
            useNativeDriver: false,
          }).start(() => {
            currentIndex.current = (currentIndex.current + 1) % projects.length;

            setProjectsCards([
              ...projects.slice(currentIndex.current),
              ...projects.slice(0, currentIndex.current),
            ]);

            pan.setValue({ x: 0, y: 0 });
            scale.setValue(0.9);
            translateY.setValue(44);
            thirdScale.setValue(0.8);
            thirdTranslateY.setValue(-50);
          });
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();

          Animated.spring(scale, { toValue: 0.9, useNativeDriver: false }).start();
          Animated.spring(translateY, { toValue: 44, useNativeDriver: false }).start();

          Animated.spring(thirdScale, { toValue: 0.8, useNativeDriver: false }).start();
          Animated.spring(thirdTranslateY, { toValue: -50, useNativeDriver: false }).start();
        }
      },
    })
  ).current;

  isProjectCardOpenRef.current = isProjectCardOpen;

  return (
    <View style={styles.container}>
      {projectsCards.map((project, index) => (
        <Animated.View
          key={index}
          style={[
            styles.projectCard,
            {
              zIndex: -index,
              transform:
                index === 0
                  ? [{ translateX: pan.x }, { translateY: pan.y }]
                  : index === 1
                  ? [{ scale }, { translateY }]
                  : [{ scale: thirdScale }, { translateY: thirdTranslateY }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          <ProjectCard cardInfo={project} canOpen={index === 0} />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  projectCard: {
    position: "absolute",
  },
});

export default ProjectsScreen;
