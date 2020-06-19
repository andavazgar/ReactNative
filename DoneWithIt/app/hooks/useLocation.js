import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = async () => {
    const result = await Location.requestPermissionsAsync();
    const granted = result.granted;
    if (!granted) {
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
  };

  return location;
};
