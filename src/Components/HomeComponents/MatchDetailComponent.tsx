import React from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { MatchDetailContainer, DayDetailContainer, HeaderDetailContainer, TextHeaderTime, ContentMatchDetail, DescriptionContainer, TextDesciption, Seperator, BtnTxtContainer, TxtButton, TxtdetailLabel } from './StyledComponent/StyledComponent';
import DurationIconSVG from '../../assets/Icons/svg/DurationIconSVG';
import { MatchMatePalette } from '../../assets/color-palette';
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';
import { Stadium } from '../../App/models/Stadium';
import { TimeSlot } from '../../App/models/TimeSlot';
import { extractTimeFromDate } from '../../services/HelperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface MatchDetailComponentProps {
  navigation: any,
  timeSlot: TimeSlot
  stadium: Stadium
}

const MatchDetailComponent = ({ navigation, timeSlot, stadium }: MatchDetailComponentProps) => {
  // Format the start and end time of the match
  const startTime = extractTimeFromDate(timeSlot.startTime)
  const endTime = extractTimeFromDate(timeSlot.endTime)

  // Calculate duration between startTime and endTime in minutes
  const startDateTime = new Date(timeSlot.startTime).getTime();
  const endDateTime = new Date(timeSlot.endTime).getTime();
  const durationInMinutes = Math.floor((endDateTime - startDateTime) / (1000 * 60));
  const playersLeft=stadium.capacity-timeSlot.team.length
  const handleDetailMatch=async()=>{
    const token= await AsyncStorage.getItem('token')
    if(token){
    return  navigation.navigate("MatchDetail", { stadium,timeSlot })
    }
    navigation.navigate('ProfileTab',{Screen:"ConnexionMethodScreen"})
  }
  return (
    <MatchDetailContainer>
      <DayDetailContainer>
        <HeaderDetailContainer>
          {/* Display the start and end time of the match */}
          <TextHeaderTime>{startTime}h - {endTime}h</TextHeaderTime>
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
            <TextDesciption>2 teams of {stadium.capacity/2}</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG
              color={MatchMatePalette.secondaryColor}
              size={'25'}
            />
            <TxtdetailLabel>Players Left :</TxtdetailLabel>
            <TextDesciption>{playersLeft}</TextDesciption>
          </DescriptionContainer>
        </ContentMatchDetail>
        <Seperator></Seperator>
        <BtnTxtContainer>
          <TouchableOpacity >
            <TxtButton></TxtButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDetailMatch}>
            <TxtButton>See Details</TxtButton>
          </TouchableOpacity>
        </BtnTxtContainer>
      </DayDetailContainer>
    </MatchDetailContainer>
  );
};

export default MatchDetailComponent;
