import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ProgressBar from "react-native-progress/Bar";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar progress={progress} color={colors.danger} width={200} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animations}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animations: {
    width: 200,
  },
});

export default UploadScreen;
