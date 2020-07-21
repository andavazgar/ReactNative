import React from "react";
import { StyleSheet, View, Text, ImageSourcePropType, ImageBackground } from "react-native";

import colors from "../config/colors";

interface CardItem {
  title: string;
  image: ImageSourcePropType;
  text: string;
  author: string;
}

export interface ProjectCardProps {
  cardInfo: CardItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ cardInfo }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.cover} source={cardInfo.image}>
        <View style={styles.coverContent}>
          <Text style={styles.title}>{cardInfo.title}</Text>
          <Text style={styles.author}>By {cardInfo.author}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.text}>{cardInfo.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  author: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  container: {
    width: 315,
    height: 460,
    borderRadius: 14,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 0.15,
  },
  cover: {
    width: "100%",
    height: 290,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  coverContent: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 17,
    margin: 20,
    lineHeight: 24,
    color: colors.secondary,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default ProjectCard;
