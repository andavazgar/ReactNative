import { useNavigation, CommonActions } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  ImageBackground,
  Animated,
  useWindowDimensions,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import colors from "../config/colors";
import { uiActions } from "../store/ui";

import CloseButton from "./CloseButton";

interface CardItem {
  title: string;
  image: ImageSourcePropType;
  text: string;
  author: string;
}

export interface ProjectCardProps {
  cardInfo: CardItem;
  canOpen?: boolean;
}

const CARD_WIDTH = 315;
const CARD_HEIGHT = 460;
const TITLE_TOP_MARGIN = 25;

const ProjectCard: React.FC<ProjectCardProps> = ({ cardInfo, canOpen }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { width: WIDTH, height: HEIGHT } = useWindowDimensions();
  const [isCardOpen, setIsCardOpen] = useState(false);
  const cardWidth = useRef(new Animated.Value(CARD_WIDTH)).current;
  const cardHeight = useRef(new Animated.Value(CARD_HEIGHT)).current;
  const titleTop = useRef(new Animated.Value(0)).current;

  const openCard = () => {
    if (!canOpen) {
      return;
    }

    setIsCardOpen(true);
    Animated.parallel([
      Animated.spring(cardWidth, { toValue: WIDTH, useNativeDriver: false }),
      Animated.spring(cardHeight, { toValue: HEIGHT, useNativeDriver: false }),
      Animated.spring(titleTop, { toValue: TITLE_TOP_MARGIN, useNativeDriver: false }),
    ]).start();

    StatusBar.setHidden(true, "fade");
    navigation.dispatch(CommonActions.setParams({ tabBarVisible: false }));
    dispatch(uiActions.openProjectCard());
  };

  const closeCard = () => {
    setIsCardOpen(false);
    Animated.parallel([
      Animated.spring(cardWidth, { toValue: CARD_WIDTH, useNativeDriver: false }),
      Animated.spring(cardHeight, { toValue: CARD_HEIGHT, useNativeDriver: false }),
      Animated.spring(titleTop, { toValue: 0, useNativeDriver: false }),
    ]).start();

    StatusBar.setHidden(false, "fade");
    navigation.dispatch(CommonActions.setParams({ tabBarVisible: true }));
    dispatch(uiActions.closeProjectCard());
  };

  return (
    <Animated.View style={[styles.container, { width: cardWidth, height: cardHeight }]}>
      <TouchableWithoutFeedback onPress={openCard}>
        <View>
          <ImageBackground style={styles.cover} source={cardInfo.image}>
            <View style={styles.coverContent}>
              <Animated.View
                style={[styles.topContainer, { transform: [{ translateY: titleTop }] }]}
              >
                <Text style={styles.title}>{cardInfo.title}</Text>
                {isCardOpen && (
                  <TouchableOpacity onPress={closeCard}>
                    <CloseButton />
                  </TouchableOpacity>
                )}
              </Animated.View>
              <Text style={styles.author}>By {cardInfo.author}</Text>
            </View>
          </ImageBackground>
          <Text style={styles.text} numberOfLines={isCardOpen ? 0 : 5}>
            {cardInfo.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
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
    borderRadius: 14,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 0.15,
  },
  cover: {
    width: "100%",
    height: 290,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
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
  topContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default ProjectCard;
