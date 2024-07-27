import React, {useState} from 'react';

import {YaMap,Marker}  from 'react-native-yamap';
import PinOrderSVG from '../../assets/Icons/svg/TabsIcon/PinOrderSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
interface StadiumLocationMapComponentProps {
    stadium:any
}

const StadiumLocationMapComponent = ({stadium}: StadiumLocationMapComponentProps) => {
  const palette=usePalette()

  return (
    <YaMap
            // nightMode={true}
            style={{flex: 1 }}
            showUserPosition={true}
            initialRegion={{
              lat: parseFloat(stadium.latitude),
              lon: parseFloat(stadium.longitude),
              zoom: 12,
              azimuth: 20,
              tilt: 100,
            }}>
            <Marker
              key={stadium.id}
              visible={true}
              point={{
                lat: parseFloat(stadium.latitude),
                lon: parseFloat(stadium.longitude),
              }}>
              <PinOrderSVG
                color={palette.primaryColor}
                order={stadium.id}
              />
            </Marker>
          </YaMap>
  );
};

export default StadiumLocationMapComponent;
