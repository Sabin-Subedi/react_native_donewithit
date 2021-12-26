import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Alert, Button, Image } from "react-native";
import ImageInputLists from "./app/components/ImageInputLists";
import ListingScreen from "./app/screens/ListingScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [image, setImage] = useState([]);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      result.uri && setImage(result.uri);
    } catch (e) {
      console.log(e);
    }
  };

  return <ListingEditScreen />;
}
