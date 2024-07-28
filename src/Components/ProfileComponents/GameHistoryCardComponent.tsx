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
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';
import {Stadium} from '../../App/models/Stadium';
import {GameHistory} from '../../App/models/gameHistory';
import { usePalette } from '../../assets/color-palette/ThemeApp';

interface GameHistoryCardComponentProps {
  navigation: any;
  gameHistory: GameHistory;
  backgroundColor?: string;
  gameHistoryId:number // Optional prop for background color
}

const GameHistoryCardComponent = ({
  navigation,
  gameHistory,
  backgroundColor,
  gameHistoryId
}: GameHistoryCardComponentProps) => {
  const palette=usePalette()
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
        <HeaderDetailContainer palette={palette}
          backgroundColor={palette.secondaryColor}>
          {/* Display the start and end time of the match */}
          <TextHeaderTime palette={palette}>{day}</TextHeaderTime>
        </HeaderDetailContainer>
        <ContentMatchDetail>
          <DescriptionContainer>
            <DurationIconSVG
              color={palette.primaryColor}
              size={'25'}
            />
            <TxtdetailLabel palette={palette}>Duration :</TxtdetailLabel>
            {/* Display the calculated duration */}
            <TextDesciption palette={palette}>{durationInMinutes} mins</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG color={palette.primaryColor} size={'25'} />
            <TxtdetailLabel palette={palette}>Time :</TxtdetailLabel>
            <TextDesciption palette={palette}>
              {startTime} - {endTime}
            </TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG color={palette.primaryColor} size={'25'} />
            <TxtdetailLabel palette={palette}>Players Left :</TxtdetailLabel>
            <TextDesciption palette={palette}>7</TextDesciption>
          </DescriptionContainer>
        </ContentMatchDetail>
        <Seperator></Seperator>
        <BtnTxtContainer>
          <TouchableOpacity style={{flexDirection: 'row'}}>
          <TxtButton palette={palette} color={gameHistory.team.length>gameHistory.stadium.capacity?palette.secondaryColor:"#c62525"}>Status : </TxtButton>
            <TxtButton palette={palette} color={gameHistory.team.length>gameHistory.stadium.capacity?palette.secondaryColor:"#c62525"}>{gameHistory.team.length>gameHistory.stadium.capacity?"game sucessfully played":"team didn't complete"}</TxtButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('GameHistoryDetail',{gameHistoryId})}}>
          <TxtButton palette={palette} color={palette.primaryColor}>Detail</TxtButton>
          </TouchableOpacity>
        </BtnTxtContainer>
      </DayDetailContainer>
    </MatchDetailContainer>
  );  
};

export default GameHistoryCardComponent;
