import React from 'react';
import {
  MatchDetailBoard,
  StadiumTextname,
  MatchTimeDetailContainer,
  TimeText,
  PlayerLeftText
} from './StyledComponent/StyledComponent';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import { Stadium } from '../../App/models/Stadium';
import { TimeSlot } from '../../App/models/TimeSlot';
import { extractTimeFromDate } from '../../services/HelperFunctions';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next';

interface MatchDetailBoardComponentProps {
  stadium: Stadium,
  timeSlot: TimeSlot
}

const MatchDetailBoardComponent = ({ stadium, timeSlot }: MatchDetailBoardComponentProps) => {
  const { t } = useTranslation();
  const startTime = extractTimeFromDate(timeSlot.startTime);
  const endTime = extractTimeFromDate(timeSlot.endTime);
  const playersLeft = stadium.capacity - timeSlot.team.length;
  const palette = usePalette();

  return (
    <MatchDetailBoard palette={palette}>
      <StadiumTextname palette={palette}>{stadium.stadiumName} {t('home.stadiumAvailability.court')}</StadiumTextname>
      <PlayerLeftText palette={palette}>{t('home.stadiumAvailability.numberOfPlayersLeft', { count: playersLeft })}</PlayerLeftText>
      <MatchTimeDetailContainer>
        <TimeText palette={palette}>{startTime}h</TimeText>
        <NextIconSVG color={palette.secondaryTextColor} />
        <TimeText palette={palette}>{endTime}h</TimeText>
      </MatchTimeDetailContainer>
    </MatchDetailBoard>
  );
};

export default MatchDetailBoardComponent;
