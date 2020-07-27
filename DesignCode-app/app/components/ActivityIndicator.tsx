import LottieView from "lottie-react-native";
import React from "react";
import { View, StyleSheet, Modal } from "react-native";

export interface ActivityIndicatorProps {
  visible: boolean;
  isLoading: boolean;
  success: boolean;
  onFinished: () => void;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  visible,
  isLoading,
  success,
  onFinished,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.container}>
        {isLoading ? (
          <LottieView
            source={require("../assets/animations/lottie-loading-fluid.json")}
            autoPlay
            loop
          />
        ) : (
          success && (
            <LottieView
              source={require("../assets/animations/lottie-checked-done.json")}
              autoPlay
              loop={false}
              onAnimationFinish={onFinished}
            />
          )
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
