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
interface MatchDetailBoardComponentProps {
  
}

const MatchDetailBoardComponent = ({}: MatchDetailBoardComponentProps) => {
  return (
    <MatchDetailBoard>
    <StadiumTextname>Maldives</StadiumTextname>
    <PlayerLeftText>4 players left</PlayerLeftText>
    <MatchTimeDetailContainer>
      <TimeText>12:30</TimeText>
      <NextIconSVG color="#262626" />
      <TimeText>14:00</TimeText>
    </MatchTimeDetailContainer>
  </MatchDetailBoard>
  );
};

export default MatchDetailBoardComponent;
