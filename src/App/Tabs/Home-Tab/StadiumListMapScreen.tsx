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

      {/* <Marker
        visible={true}
        point={{
          lat: 47.370906,
          lon: 8.562813,
        }}>
        <PinOrderSVG order={2} color={MatchMatePalette.darkBackgroundColor} />
      </Marker>
      <Marker
        visible={true}
        point={{
          lat: 47.383577,
          lon: 8.556433,
        }}>
        <PinOrderSVG order={3} color={MatchMatePalette.darkBackgroundColor} />
      </Marker>
      <Marker
        visible={true}
        point={{
          lat: 47.366911,
          lon: 8.541825,
        }}>
        <PinOrderSVG order={4} color={MatchMatePalette.darkBackgroundColor} />
      </Marker>
      <Marker
        visible={true}
        point={{
          lat: 47.390344,
          lon: 8.548527,
        }}>
        <PinOrderSVG order={5} color={MatchMatePalette.darkBackgroundColor} />
      </Marker> */}
    </YaMap>
  );
};

export default StadiumListMapScreen;
