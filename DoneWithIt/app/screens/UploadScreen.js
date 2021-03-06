import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

function UploadScreen({ onFished, progress, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            style={styles.finishedAnimation}
            autoPlay
            loop={false}
            onAnimationFinish={onFished}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  finishedAnimation: {
    width: 150,
  },
});

export default UploadScreen;
