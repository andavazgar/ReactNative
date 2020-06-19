import React, { useRef } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";

import ImageInput from "../components/ImageInput";

function ImageInputList({ imageUris, onAddImage, onRemoveImage, style }) {
  const flatList = useRef();

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={imageUris}
        keyExtractor={(image, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatList}
        onContentSizeChange={() => flatList.current.scrollToEnd()}
        renderItem={({ item }) => (
          <ImageInput
            style={styles.image}
            imageUri={item}
            onChangeImage={() => onRemoveImage(item)}
          />
        )}
        ListFooterComponent={
          <ImageInput style={styles.image} onChangeImage={onAddImage} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

export default ImageInputList;
