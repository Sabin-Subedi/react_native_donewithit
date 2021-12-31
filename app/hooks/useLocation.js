import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.getBackgroundPermissionsAsync({});
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (e) {
      console.log(e);
    }
  };

  console.log(location);

  useEffect(() => {
    getLocation();
  }, []);

  return { latitude: 0, longitude: 0 };
}
