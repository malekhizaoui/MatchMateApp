import React from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { MatchDetailContainer, DayDetailContainer, HeaderDetailContainer, TextHeaderTime, ContentMatchDetail, DescriptionContainer, TextDesciption, Seperator, BtnTxtContainer, TxtButton, TxtdetailLabel } from './StyledComponent/StyledComponent';
import DurationIconSVG from '../../assets/Icons/svg/DurationIconSVG';
import { MatchMatePalette } from '../../assets/color-palette';
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';

interface MatchDetailComponentProps {
  navigation: any,
  timeSlot: any
  stadium: any
}

const MatchDetailComponent = ({ navigation, timeSlot, stadium }: MatchDetailComponentProps) => {
  // Format the start and end time of the match
  const startTime = new Date(timeSlot.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const endTime = new Date(timeSlot.endTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // Calculate duration between startTime and endTime in minutes
  const startDateTime = new Date(timeSlot.startTime).getTime();
  const endDateTime = new Date(timeSlot.endTime).getTime();
  const durationInMinutes = Math.floor((endDateTime - startDateTime) / (1000 * 60));

  return (
    <MatchDetailContainer>
      <DayDetailContainer>
        <HeaderDetailContainer>
          {/* Display the start and end time of the match */}
          <TextHeaderTime>{startTime} - {endTime}</TextHeaderTime>
        </HeaderDetailContainer>
        <ContentMatchDetail>
          <DescriptionContainer>
            <DurationIconSVG
              color={MatchMatePalette.secondaryColor}
              size={'25'}
            />
            <TxtdetailLabel>Duration :</TxtdetailLabel>
            {/* Display the calculated duration */}
            <TextDesciption>{durationInMinutes} mins</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG
              color={MatchMatePalette.secondaryColor}
              size={'25'}
            />
            <TxtdetailLabel>Teams :</TxtdetailLabel>
            {/* Assuming timeSlot.teamCount contains the number of teams */}
            <TextDesciption>{timeSlot.teamCount} teams of 5</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG
              color={MatchMatePalette.secondaryColor}
              size={'25'}
            />
            <TxtdetailLabel>Players Left :</TxtdetailLabel>
            {/* Assuming timeSlot.playersLeft contains the number of players left */}
            <TextDesciption>{timeSlot.playersLeft}</TextDesciption>
          </DescriptionContainer>
        </ContentMatchDetail>
        <Seperator></Seperator>
        <BtnTxtContainer>
          <TouchableOpacity >
            <TxtButton>Join Team</TxtButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate("MatchDetail", { stadium }) }}>
            <TxtButton>See Details</TxtButton>
          </TouchableOpacity>
        </BtnTxtContainer>
      </DayDetailContainer>
    </MatchDetailContainer>
  );
};

export default MatchDetailComponent;
