import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  MatchDetailContainer,
  DayDetailContainer,
  HeaderDetailContainer,
  TextHeaderTime,
  ContentMatchDetail,
  DescriptionContainer,
  TextDesciption,
  Seperator,
  BtnTxtContainer,
  TxtButton,
  TxtdetailLabel,
} from './StyledComponent/StyledComponent';
import DurationIconSVG from '../../assets/Icons/svg/DurationIconSVG';
import {MatchMatePalette} from '../../assets/color-palette';
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';
import {Stadium} from '../../App/models/Stadium';
import {GameHistory} from '../../App/models/gameHistory';

interface GameHistoryCardComponentProps {
  navigation: any;
  gameHistory: GameHistory;
  backgroundColor?: string; // Optional prop for background color
}

const GameHistoryCardComponent = ({
  navigation,
  gameHistory,
  backgroundColor,
}: GameHistoryCardComponentProps) => {
  // Format the start and end time of the match
  const startTime = new Date(gameHistory.startTime).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const endTime = new Date(gameHistory.endTime).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Calculate duration between startTime and endTime in minutes
  const startDateTime = new Date(gameHistory.startTime).getTime();
  const endDateTime = new Date(gameHistory.endTime).getTime();
  const durationInMinutes = Math.floor(
    (endDateTime - startDateTime) / (1000 * 60),
  );
  const formatDate = () => {
    const date = new Date(gameHistory.startTime);

    const dayNumber = date.getDate();
    const dayName = date.toLocaleDateString('en-US', {weekday: 'long'});
    const monthName = date.toLocaleDateString('en-US', {month: 'long'});

    return `${dayNumber} ${dayName}, ${monthName}`;
  };
  const day = formatDate();



  return (
    <MatchDetailContainer>
      <DayDetailContainer>
        <HeaderDetailContainer
          backgroundColor={MatchMatePalette.secondaryColor}>
          {/* Display the start and end time of the match */}
          <TextHeaderTime>{day}</TextHeaderTime>
        </HeaderDetailContainer>
        <ContentMatchDetail>
          <DescriptionContainer>
            <DurationIconSVG
              color={MatchMatePalette.primaryColor}
              size={'25'}
            />
            <TxtdetailLabel>Duration :</TxtdetailLabel>
            {/* Display the calculated duration */}
            <TextDesciption>{durationInMinutes} mins</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG color={MatchMatePalette.primaryColor} size={'25'} />
            <TxtdetailLabel>Time :</TxtdetailLabel>
            <TextDesciption>
              {startTime} - {endTime}
            </TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG color={MatchMatePalette.primaryColor} size={'25'} />
            <TxtdetailLabel>Players Left :</TxtdetailLabel>
            <TextDesciption>7</TextDesciption>
          </DescriptionContainer>
        </ContentMatchDetail>
        <Seperator></Seperator>
        <BtnTxtContainer>
          <TouchableOpacity style={{flexDirection: 'row'}}>
          <TxtButton color={gameHistory.team.length>gameHistory.stadium.capacity?MatchMatePalette.secondaryColor:"#c62525"}>Status : </TxtButton>
            <TxtButton color={gameHistory.team.length>gameHistory.stadium.capacity?MatchMatePalette.secondaryColor:"#c62525"}>{gameHistory.team.length>gameHistory.stadium.capacity?"game sucessfully played":"team didn't complete"}</TxtButton>
          </TouchableOpacity>
          <TxtButton color={MatchMatePalette.primaryColor}>Detail</TxtButton>

        </BtnTxtContainer>
      </DayDetailContainer>
    </MatchDetailContainer>
  );  
};

export default GameHistoryCardComponent;
