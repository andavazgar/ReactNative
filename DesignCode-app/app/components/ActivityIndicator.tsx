import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Modal } from "react-native";

export interface ActivityIndicatorProps {
  isLoading: boolean;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ isLoading }) => {
  const [finished, setFinished] = useState<boolean>();

  useEffect(() => {
    if (isLoading) {
      setFinished(false);
    }
  }, [isLoading]);

  const handleFinish = () => {
    setTimeout(() => {
      setFinished(true);
    }, 1500);
  };

  return (
    <Modal visible={isLoading || finished === false} transparent animationType="fade">
      <View style={styles.container}>
        {isLoading ? (
          <LottieView
            source={require("../assets/animations/lottie-loading-fluid.json")}
            autoPlay
            loop
          />
        ) : (
          <LottieView
            source={require("../assets/animations/lottie-checked-done.json")}
            autoPlay
            loop={false}
            onAnimationFinish={handleFinish}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.9)",
    zIndex: 5,
  },
});

export default ActivityIndicator;
