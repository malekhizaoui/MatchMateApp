import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ContainerApp, ContainerDetailScreen, HeaderContainer, ExploreRegionContainer, RegionExploreTxt, RegionTxt, ListStadiumContainer } from './StyledComponent/StyledComponent';
import { Dropdown } from 'react-native-element-dropdown';
import useHome, { styles } from './useHome';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
import { MatchMatePalette } from '../../../assets/color-palette';
import ImageListFieldComponent from '../../../Components/HomeComponents/ImageListFieldComponent';

export const FieldListScreen = ({ navigation }: any) => {
  const {
    renderLabel,
    isFocus,
    data,
    setIsFocus,
    setFieldSelected,
    fieldDataPut,
    region,
    setRegion
  } = useHome(navigation);

  // Handle region change only when user selects an option
  const handleRegionChange = (item: { value: string }) => {
    setRegion(item.value)
    setIsFocus(false);
    setFieldSelected('Basketball'); // Example of resetting field selection
  };
console.log("fieldDataPut",fieldDataPut);

  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerDetailScreen>
        <HeaderContainer>
          <ExploreRegionContainer>
            <RegionExploreTxt>Explore</RegionExploreTxt>
            <RegionTxt>{region}</RegionTxt>
          </ExploreRegionContainer>
          <View style={styles.container}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'red' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={region}
              value={region}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={handleRegionChange} 
              renderLeftIcon={() => (
                <PinIconSVG color={MatchMatePalette.primaryColor} size={'15'} />
              )}
            />
          </View>
        </HeaderContainer>
        <ListStadiumContainer>
          {fieldDataPut.map((field: any, i: number) => {
            return (
              <ImageListFieldComponent
                key={i}
                field={field}
                btnClicked={() => {
                  navigation.navigate('StadiumList', { fieldDataPass:field.stadiums });
                  console.log("MapList",field);
                  
                }}
              />
            );
          })}
        </ListStadiumContainer>
      </ContainerDetailScreen>
    </ContainerApp>
  );
};
