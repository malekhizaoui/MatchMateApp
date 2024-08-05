import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MatchDetailContainer, DayDetailContainer, HeaderDetailContainer, TextHeaderTime, ContentMatchDetail, DescriptionContainer, TextDesciption, Seperator, BtnTxtContainer, TxtButton, TxtdetailLabel } from './StyledComponent/StyledComponent';
import DurationIconSVG from '../../assets/Icons/svg/DurationIconSVG';
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';
import { Stadium } from '../../App/models/Stadium';
import { TimeSlot } from '../../App/models/TimeSlot';
import { extractTimeFromDate } from '../../services/HelperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next';

interface MatchDetailComponentProps {
  navigation: any,
  timeSlot: TimeSlot,
  stadium: Stadium
}

const MatchDetailComponent = ({ navigation, timeSlot, stadium }: MatchDetailComponentProps) => {
  const { t } = useTranslation();
  const startTime = extractTimeFromDate(timeSlot.startTime)
  const endTime = extractTimeFromDate(timeSlot.endTime)
  const palette = usePalette()

  const startDateTime = new Date(timeSlot.startTime).getTime();
  const endDateTime = new Date(timeSlot.endTime).getTime();
  const durationInMinutes = Math.floor((endDateTime - startDateTime) / (1000 * 60));
  const playersLeft = stadium.capacity - timeSlot.team.length

  const handleDetailMatch = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      return navigation.navigate("MatchDetail", { stadium, timeSlot })
    }
    navigation.navigate('ProfileTab', { Screen: "ConnexionMethodScreen" })
  }

  return (
    <MatchDetailContainer>
      <DayDetailContainer>
        <HeaderDetailContainer palette={palette}>
          <TextHeaderTime palette={palette}>{startTime}h - {endTime}h</TextHeaderTime>
        </HeaderDetailContainer>
        <ContentMatchDetail>
          <DescriptionContainer>
            <DurationIconSVG
              color={palette.secondaryColor}
              size={'25'}
            />
            <TxtdetailLabel palette={palette}>{t('home.stadiumAvailability.duration')}</TxtdetailLabel>
            <TextDesciption palette={palette}>{durationInMinutes} {t('home.stadiumAvailability.mins')}</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG
              color={palette.secondaryColor}
              size={'25'}
            />
            <TxtdetailLabel palette={palette}>{t('home.stadiumAvailability.teams')}</TxtdetailLabel>
            <TextDesciption palette={palette}>{t('home.stadiumAvailability.teamsFormat', { teamSize: stadium.capacity / 2 })}</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
            <PlayersIconSVG
              color={palette.secondaryColor}
              size={'25'}
            />
            <TxtdetailLabel palette={palette}>{t('home.stadiumAvailability.playersLeft')}</TxtdetailLabel>
            <TextDesciption palette={palette}>{playersLeft}</TextDesciption>
          </DescriptionContainer>
        </ContentMatchDetail>
        <Seperator></Seperator>
        <BtnTxtContainer>
          <TouchableOpacity >
            <TxtButton palette={palette}></TxtButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDetailMatch}>
            <TxtButton palette={palette}>{t('home.stadiumAvailability.seeDetails')}</TxtButton>
          </TouchableOpacity>
        </BtnTxtContainer>
      </DayDetailContainer>
    </MatchDetailContainer>
  );
};

export default MatchDetailComponent;
