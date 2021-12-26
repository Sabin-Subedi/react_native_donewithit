import React, { useEffect } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.getCurrentPositionAsync({});
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
