// StadiumListMapScreen.tsx
import React from 'react';
import {YaMap, Marker} from 'react-native-yamap';
import PinOrderSVG from '../../../assets/Icons/svg/TabsIcon/PinOrderSVG';
import {MatchMatePalette} from '../../../assets/color-palette';

YaMap.init('ca4f9c56-2615-48b0-ab59-28438efd4454');

const StadiumListMapScreen = () => {
  return (
    <YaMap
      style={{flex: 1}}
      showUserPosition={true}
      initialRegion={{
        lat: 47.383736,
        lon: 8.531274,
        zoom: 12,
        azimuth: 20,
        tilt: 100,
      }}>
      <Marker
        visible={true}
        point={{
          lat: 47.376822,
          lon: 8.531728,
        }}>
        <PinOrderSVG color={MatchMatePalette.darkBackgroundColor} order={1} />
      </Marker>
      <Marker
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
      </Marker>
    </YaMap>
  );
};

export default StadiumListMapScreen;
