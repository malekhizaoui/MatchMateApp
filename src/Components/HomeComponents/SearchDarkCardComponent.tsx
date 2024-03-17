import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View,TouchableOpacity} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium,
  InputHeaderContainer,
  InputIconContainer,
  TextInputStyle,
  LineSperator,
  FilterIconContainer
} from './StyledComponent/StyledComponent';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import SearchIconSVG from '../../assets/Icons/svg/SearchIconSVG';
import FilterIconSVG from '../../assets/Icons/svg/FilterIconSVG';
import { MatchMatePalette } from '../../assets/color-palette';
interface SearchCardComponentProps {
 
}

const SearchCardComponent = ({

}: SearchCardComponentProps) => {
  return (
    <InputHeaderContainer style={{backgroundColor:"white"}}>
          <InputIconContainer>
            <SearchIconSVG color={'#262626'} />
            <TextInputStyle placeholder="Search ..."></TextInputStyle>
          </InputIconContainer>
          <FilterIconContainer>
            <LineSperator></LineSperator>
          </FilterIconContainer>
          <LineSperator></LineSperator>
          <FilterIconSVG color={MatchMatePalette.darkBackgroundColor} />
        </InputHeaderContainer>
  );
};

export default SearchCardComponent;
