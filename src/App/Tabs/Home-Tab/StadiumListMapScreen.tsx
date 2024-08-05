// StadiumListMapScreen.tsx
import React, { useContext } from 'react';
import {YaMap, Marker} from 'react-native-yamap';
import PinOrderSVG from '../../../assets/Icons/svg/TabsIcon/PinOrderSVG';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import {View, Text, useColorScheme} from 'react-native';
import { AuthContext } from '../../../services/Context/AuthContext';

YaMap.init('ca4f9c56-2615-48b0-ab59-28438efd4454');

interface StadiumListMapProps {
  stadiums: any[];
}

const StadiumListMapScreen: React.FC<StadiumListMapProps> = ({stadiums}) => {
  const palette = usePalette();
  const colorScheme = useColorScheme();
  const {lightModeStatus}=useContext(AuthContext)
  // Set Switzerland as the default region
  const defaultRegion = {
    lat: 46.8182,
    lon: 8.2275,
    zoom: 7,
    azimuth: 0,
    tilt: 0,
  };

  const initialRegion = stadiums.length > 0 ? {
    lat: parseFloat(stadiums[0].latitude),
    lon: parseFloat(stadiums[0].longitude),
    zoom: 12,
    azimuth: 20,
    tilt: 100,
  } : defaultRegion;

 const nightModeStatus= lightModeStatus === 'light'
  ? false
  : lightModeStatus === 'dark'
  ? true
  : colorScheme === 'dark'
  ? true
  : false;
  return (
    <YaMap
    nightMode={nightModeStatus}
    style={{flex: 1}}
      showUserPosition={true}
      initialRegion={initialRegion}>
      {stadiums.length > 0 ? (
        stadiums.map((stadium: any, index: number) => (
          <Marker
            key={index}
            visible={true}
            point={{
              lat: parseFloat(stadium.latitude),
              lon: parseFloat(stadium.longitude),
            }}>
            <PinOrderSVG
              color={palette.primaryColor}
              order={index+1}
            />
          </Marker>
        ))
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: palette.whiteColor}}>No stadiums available</Text>
        </View>
      )}
    </YaMap>
  );
};

export default StadiumListMapScreen;
