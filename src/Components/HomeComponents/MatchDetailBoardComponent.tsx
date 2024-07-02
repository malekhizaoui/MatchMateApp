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
import {MatchMatePalette} from '../../assets/color-palette';
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import { Stadium } from '../../App/models/Stadium';
import { TimeSlot } from '../../App/models/TimeSlot';
import { extractTimeFromDate } from '../../services/HelperFunctions';
interface MatchDetailBoardComponentProps {
  stadium:Stadium,
  timeSlot:TimeSlot
}

const MatchDetailBoardComponent = ({stadium,timeSlot}: MatchDetailBoardComponentProps) => {
  const startTime = extractTimeFromDate(timeSlot.startTime);
  const endTime=extractTimeFromDate(timeSlot.endTime)
  const playersLeft=stadium.capacity-timeSlot.team.length

  return (
    <MatchDetailBoard>
    <StadiumTextname>{stadium.stadiumName} court</StadiumTextname>
    <PlayerLeftText>{playersLeft} players left</PlayerLeftText>
    <MatchTimeDetailContainer>
      <TimeText>{startTime}</TimeText>
      <NextIconSVG color="#262626" />
      <TimeText>{endTime}</TimeText>
    </MatchTimeDetailContainer>
  </MatchDetailBoard>
  );
};

export default MatchDetailBoardComponent;
