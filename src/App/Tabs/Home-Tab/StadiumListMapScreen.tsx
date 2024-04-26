// StadiumListMapScreen.tsx
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YaMap } from 'react-native-yamap';

YaMap.init('ca4f9c56-2615-48b0-ab59-28438efd4454');


const StadiumListMapScreen = () => {
  return (
      <YaMap
        style={{ flex: 1 }}
        showUserPosition={true}
        initialRegion={{
          lat: 36.8414269,
          lon: 10.3227339,
          zoom: 14,
          azimuth: 20,
          tilt: 100,
        }}
      ></YaMap>
  );
};

export default StadiumListMapScreen;
