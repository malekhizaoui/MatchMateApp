import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {
  ContainerApp,
  ContainerDetailScreen,
  HeaderContainer,
  ExploreRegionContainer,
  RegionExploreTxt,
  RegionTxt,
  ListStadiumContainer,
} from './StyledComponent/StyledComponent';
import {Dropdown} from 'react-native-element-dropdown';
import useHome from './useHome';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import ImageListFieldComponent from '../../../Components/HomeComponents/ImageListFieldComponent';
import NavigateBack from '../../../Components/NavigateBack';

export const FieldListScreen = ({navigation}: any) => {
  const palette = usePalette();

  const {
    renderLabel,
    isFocus,
    data,
    setIsFocus,
    setFieldSelected,
    fieldData,
    region,
    setRegion,
    t
  } = useHome(navigation);
  

  // Handle region change only when user selects an option
  const handleRegionChange = (item: {value: string}) => {
    setRegion(item.value);
    setIsFocus(false);
    setFieldSelected('Basketball'); // Example of resetting field selection
  };
   const styles = StyleSheet.create({
    container: {
      padding: 0,
      width: '44%',
    },
    dropdown: {
      height: 50,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
      color: palette.whiteColor,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      color: palette.primaryColor,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });
  return (
    <ContainerApp palette={palette}>
      <NavigateBack navigation={navigation} headerTitle={t("home.fieldListScreen.headerTitle")} />
      
      <ContainerDetailScreen>
        <HeaderContainer>
          <ExploreRegionContainer>
            <RegionExploreTxt palette={palette}>{t("home.fieldListScreen.explore")}</RegionExploreTxt>
            <RegionTxt palette={palette}>{region}</RegionTxt>
          </ExploreRegionContainer>
          <View style={styles.container}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'red'}]}
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
                <PinIconSVG color={palette.primaryColor} size={'15'} />
              )}
            />
          </View>
        </HeaderContainer>
        <ListStadiumContainer>
          {fieldData.map((field: any, i: number) => {
            return (
              <ImageListFieldComponent
                key={i}
                field={field}
                btnClicked={() => {
                  navigation.navigate('StadiumList', {
                    fieldDataPass: field.stadiums,
                  });
                  console.log('MapList', field);
                }}
              />
            );
          })}
        </ListStadiumContainer>
      </ContainerDetailScreen>
    </ContainerApp>
  );
};
