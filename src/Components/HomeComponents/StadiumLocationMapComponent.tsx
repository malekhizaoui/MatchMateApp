import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  MatchDetailBoard,
  StadiumTextname,
  MatchTimeDetailContainer,
  TimeText,
  PlayerLeftText
} from './StyledComponent/StyledComponent';
import DurationIconSVG from '../../assets/Icons/svg/DurationIconSVG';
import {MatchMatePalette} from '../../assets/color-palette';
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import {YaMap,Marker}  from 'react-native-yamap';
import PinOrderSVG from '../../assets/Icons/svg/TabsIcon/PinOrderSVG';
import { Stadium } from '../../App/models/Stadium';
interface StadiumLocationMapComponentProps {
    stadium:any
}

const StadiumLocationMapComponent = ({stadium}: StadiumLocationMapComponentProps) => {
  return (
    <YaMap
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
                color={MatchMatePalette.darkBackgroundColor}
                order={stadium.id}
              />
            </Marker>
          </YaMap>
  );
};

export default StadiumLocationMapComponent;
