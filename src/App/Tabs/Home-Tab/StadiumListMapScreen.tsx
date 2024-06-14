// StadiumListMapScreen.tsx
import React from 'react';
import {YaMap, Marker} from 'react-native-yamap';
import PinOrderSVG from '../../../assets/Icons/svg/TabsIcon/PinOrderSVG';
import {MatchMatePalette} from '../../../assets/color-palette';

YaMap.init('ca4f9c56-2615-48b0-ab59-28438efd4454');
interface StadiumListMapProps {
  stadiums: any;
}

const StadiumListMapScreen = ({stadiums}: StadiumListMapProps) => {
  console.log("stadium",stadiums[4]);
  
  return (
    <YaMap
      style={{flex: 1}}
      showUserPosition={true}
      initialRegion={{
        lat: JSON.parse(stadiums[0].latitude),
              lon: JSON.parse(stadiums[0].longitude),
        zoom: 12,
        azimuth: 20,
        tilt: 100,
      }}>
      {stadiums.map((stadium: any, index: number) => {
        return (
          <Marker
            key={index}
            visible={true}
            point={{
              lat: JSON.parse(stadium.latitude),
              lon: JSON.parse(stadium.longitude),
            }}>
            <PinOrderSVG
              color={MatchMatePalette.darkBackgroundColor}
              order={index}
            />
          </Marker>
        );
      })}
    </YaMap>
  );
};

export default StadiumListMapScreen;
