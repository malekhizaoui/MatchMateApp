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
import { usePalette } from '../../assets/color-palette/ThemeApp';
interface SearchCardComponentProps {
 
}

const SearchCardComponent = ({

}: SearchCardComponentProps) => {
  const palette=usePalette()

  return (
    <InputHeaderContainer palette={palette} style={{backgroundColor:palette.whiteColor}}>
          <InputIconContainer>
            <SearchIconSVG color={palette.lightBackgroundColor} />
            <TextInputStyle placeholder="Search ..."></TextInputStyle>
          </InputIconContainer>
          <FilterIconContainer>
            <LineSperator palette={palette}></LineSperator>
          </FilterIconContainer>
          <LineSperator palette={palette}></LineSperator>
          <FilterIconSVG color={palette.darkBackgroundColor} />
        </InputHeaderContainer>
  );
};

export default SearchCardComponent;
