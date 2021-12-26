import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Alert, Button, Image } from "react-native";

export default function App() {
  const [image, setImage] = useState(null);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      result.uri && setImage(result.uri);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen>
      <Button onPress={selectImage} title="Select Image" />
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
