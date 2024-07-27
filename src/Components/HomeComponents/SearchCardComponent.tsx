import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium,
  InputHeaderContainer,
  InputIconContainer,
  TextInputStyle,
  LineSperatorSearchBar,
  FilterIconContainer,
} from './StyledComponent/StyledComponent';

import SearchIconSVG from '../../assets/Icons/svg/SearchIconSVG';
import FilterIconSVG from '../../assets/Icons/svg/FilterIconSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
interface SearchCardComponentProps {
  showMap: boolean;
  onSearch: (query: string) => void;
}

const SearchCardComponent: React.FC<SearchCardComponentProps> = ({showMap, onSearch}) => {
  const palette=usePalette()

  return (
    <InputHeaderContainer  palette={palette}
      style={{
        borderColor: palette.secondaryTextColor,
        borderWidth: 1,
      }}>
      <InputIconContainer>
        <SearchIconSVG color={palette.blackColor} />
        <TextInputStyle
          placeholder="Search ..."
          onChangeText={onSearch}
        />
      </InputIconContainer>
      {/* <FilterIconContainer>
        <LineSperatorSearchBar></LineSperatorSearchBar>
      </FilterIconContainer>
      <LineSperatorSearchBar></LineSperatorSearchBar>
      <FilterIconSVG color={palette.darkBackgroundColor} /> */}
    </InputHeaderContainer>
  );
};

export default SearchCardComponent;

