import React from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import colors from "../config/colors";
import icons from "../config/icons";
import Wrapper from "../components/Wrapper";

function ImageInput({ imageUri, onChangeImage, style }) {
  const requestPermission = async () => {
    if (Constants.platform.ios) {
      const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (!granted) {
        alert("You need to enable permission to access the Library");
      }
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      const message = "There was an error reading the image";
      alert(message);
      console.log(message, error);
    }
  };

  const handlePress = async () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete image", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
          style: "destructive",
        },
        { text: "No", style: "cancel" },
      ]);
    }
  };

  return (
    <View style={style}>
      <TouchableOpacity onPress={() => handlePress()}>
        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image style={styles.image} source={{ uri: imageUri }} />
          ) : (
            <Wrapper element={icons.camera} size={40} style={styles.icon} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: colors.mediumGray,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.lightGray,
  },
});

export default ImageInput;
