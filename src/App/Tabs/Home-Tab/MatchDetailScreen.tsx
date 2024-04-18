import React, {useState, useRef, useEffect} from 'react';
import {
  Animated,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Dimensions,

} from 'react-native';
import {
  ContainerApp,
  DaysContainer,
  ImageConainer,
  ImagesContent,
  PlayerLeftText,
  MatchDetailContainer,
  MatchDetailBoard,
  StadiumTextname,
  MatchTimeDetailContainer,
  TimeText
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';

export const MatchDetailScreen = ({navigation, route}: any) => {


  return (
    <ContainerApp>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Match Detail'}
      />
    <MatchDetailContainer>

      <MatchDetailBoard>
        <StadiumTextname>Maldives</StadiumTextname>
        <PlayerLeftText>4 players left</PlayerLeftText>
        <MatchTimeDetailContainer>
          <TimeText>12:30</TimeText>
          <NextIconSVG color="#262626"/>
          <TimeText>14:00</TimeText>
        </MatchTimeDetailContainer>
      </MatchDetailBoard>

      
    </MatchDetailContainer>
    </ContainerApp>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '8%',
    height: 30,
    borderRadius: 15,
  },
});

export default MatchDetailScreen;
