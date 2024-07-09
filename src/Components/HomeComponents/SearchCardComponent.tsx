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
import {MatchMatePalette} from '../../assets/color-palette';
interface SearchCardComponentProps {
  showMap: boolean;
  onSearch: (query: string) => void;
}

const SearchCardComponent: React.FC<SearchCardComponentProps> = ({showMap, onSearch}) => {
  return (
    <InputHeaderContainer
      style={{
        borderColor: MatchMatePalette.darkBackgroundColor,
        borderWidth: 1,
      }}>
      <InputIconContainer>
        <SearchIconSVG color={MatchMatePalette.lightBackgroundColor} />
        <TextInputStyle
          placeholder="Search ..."
          onChangeText={onSearch}
        />
      </InputIconContainer>
      {/* <FilterIconContainer>
        <LineSperatorSearchBar></LineSperatorSearchBar>
      </FilterIconContainer>
      <LineSperatorSearchBar></LineSperatorSearchBar>
      <FilterIconSVG color={MatchMatePalette.darkBackgroundColor} /> */}
    </InputHeaderContainer>
  );
};

export default SearchCardComponent;

