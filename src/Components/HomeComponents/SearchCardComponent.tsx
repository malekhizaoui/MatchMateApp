import React from 'react';
import {

  InputHeaderContainer,
  InputIconContainer,
  TextInputStyle,
} from './StyledComponent/StyledComponent';

import SearchIconSVG from '../../assets/Icons/svg/SearchIconSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next';
interface SearchCardComponentProps {
  showMap: boolean;
  onSearch: (query: string) => void;
}

const SearchCardComponent: React.FC<SearchCardComponentProps> = ({showMap, onSearch}) => {
  const palette=usePalette()
  const {t}=useTranslation()
  return (
    <InputHeaderContainer  palette={palette}
      style={{
        borderColor: palette.secondaryTextColor,
        borderWidth: 1,
      }}>
      <InputIconContainer>
        <SearchIconSVG color={palette.blackColor} />
        <TextInputStyle
          placeholder={t("home.homeScreen.searchPlaceholder")}
          onChangeText={onSearch}
          placeholderTextColor={palette.blackColor}
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

