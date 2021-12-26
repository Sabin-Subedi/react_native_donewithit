import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputLists({ imageUris = [], onRemoveImage, onAddImage }) {
  const imageScrollRef = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        ref={imageScrollRef}
        onContentSizeChange={() => imageScrollRef.current.scrollToEnd()}
      >
        {imageUris?.map((uri, index) => (
          <View key={index} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    marginRight: 10,
  },
});

export default ImageInputLists;
