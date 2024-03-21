import React, {useState} from 'react';
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
  TxtdetailLabel
} from './StyledComponent/StyledComponent';
import DurationIconSVG from '../../assets/Icons/svg/DurationIconSVG';
import { MatchMatePalette } from '../../assets/color-palette';
import PlayersIconSVG from '../../assets/Icons/svg/PlayersIconSVG';
interface MatchDetailComponentProps {}

const MatchDetailComponent = ({}: MatchDetailComponentProps) => {
  return (
    <MatchDetailContainer>
      <DayDetailContainer>
        <HeaderDetailContainer>
          <TextHeaderTime>9:00 AM - 5:00 AM</TextHeaderTime>
        </HeaderDetailContainer>
        <ContentMatchDetail>
          <DescriptionContainer>
          <DurationIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
            <TxtdetailLabel>Duration :</TxtdetailLabel>
            <TextDesciption>1h30</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
          <PlayersIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
            <TxtdetailLabel>Teams :</TxtdetailLabel>
            <TextDesciption>2 teams of 5</TextDesciption>
          </DescriptionContainer>
          <DescriptionContainer>
          <PlayersIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
            <TxtdetailLabel>Players Left :</TxtdetailLabel>
            <TextDesciption>5</TextDesciption>
          </DescriptionContainer>
        </ContentMatchDetail>
        <Seperator></Seperator>
        <BtnTxtContainer>
            <TxtButton>Join Team</TxtButton>
            <TxtButton>See Details</TxtButton>
        </BtnTxtContainer>
      </DayDetailContainer>
    </MatchDetailContainer>
  );
};

export default MatchDetailComponent;
