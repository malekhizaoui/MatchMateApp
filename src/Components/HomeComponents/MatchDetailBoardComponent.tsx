import React, {useEffect, useState} from 'react';
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
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import { Stadium } from '../../App/models/Stadium';
import { TimeSlot } from '../../App/models/TimeSlot';
import { extractTimeFromDate } from '../../services/HelperFunctions';
import { usePalette } from '../../assets/color-palette/ThemeApp';
interface MatchDetailBoardComponentProps {
  stadium:Stadium,
  timeSlot:TimeSlot
}

const MatchDetailBoardComponent = ({stadium,timeSlot}: MatchDetailBoardComponentProps) => {
  const startTime = extractTimeFromDate(timeSlot.startTime);
  const endTime=extractTimeFromDate(timeSlot.endTime)
  const playersLeft=stadium.capacity-timeSlot.team.length
  const palette=usePalette()

  return (
    <MatchDetailBoard palette={palette}>
    <StadiumTextname palette={palette}>{stadium.stadiumName} court</StadiumTextname>
    <PlayerLeftText palette={palette}>{playersLeft} players left</PlayerLeftText>
    <MatchTimeDetailContainer>
      <TimeText palette={palette}>{startTime}h</TimeText>
      <NextIconSVG color={palette.secondaryTextColor} />
      <TimeText palette={palette}>{endTime}h</TimeText>
    </MatchTimeDetailContainer>
  </MatchDetailBoard>
  );
};

export default MatchDetailBoardComponent;
