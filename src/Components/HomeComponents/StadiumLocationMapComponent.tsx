import React, {useContext, useState} from 'react';

import {YaMap,Marker}  from 'react-native-yamap';
import PinOrderSVG from '../../assets/Icons/svg/TabsIcon/PinOrderSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useColorScheme } from 'react-native';
import { AuthContext } from '../../services/Context/AuthContext';
interface StadiumLocationMapComponentProps {
    stadium:any
}

const StadiumLocationMapComponent = ({stadium}: StadiumLocationMapComponentProps) => {
  const palette=usePalette()
  const colorScheme = useColorScheme();
  const {lightModeStatus}=useContext(AuthContext)

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
