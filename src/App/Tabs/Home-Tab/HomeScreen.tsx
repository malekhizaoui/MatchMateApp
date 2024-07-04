import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { ContainerApp, ContainerScreen, HeaderContainer, ExploreRegionContainer, RegionExploreTxt, RegionTxt, InputContainer, TextInputStyle, ListContainer, TextContainer, TextTitleList, TextCheckAllList } from './StyledComponent/StyledComponent';
import { Dropdown } from 'react-native-element-dropdown';
import {useHome,styles } from './useHome';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
import { MatchMatePalette } from '../../../assets/color-palette';
import SearchIconSVG from '../../../assets/Icons/svg/SearchIconSVG';
import FieldsCardComponent from '../../../Components/HomeComponents/FieldsCardComponent';
import StadiumCardComponent from '../../../Components/HomeComponents/StadiumCardComponent';
import { fontSiszeTest } from '../../../assets/Styles';
export const HomeScreen = ({ navigation }: any) => {
  const {
    fieldSelected,
    footballField,
    basketballField,
    volleyballField,
    renderLabel,
    isFocus,
    data,
    setIsFocus,
    setFieldSelected,
    handleSearch,
    query,
    scrollViewRef,
    fieldDataPut,
    updateFieldData,
    region,
    setRegion,
  } = useHome(navigation);
console.log("fontSiszeTest",fontSiszeTest);

  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerScreen>
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
              onChange={item => {
                setRegion(item.value);
                setIsFocus(false);
                setFieldSelected('Basketball');
              }}
              renderLeftIcon={() => (
                <PinIconSVG color={MatchMatePalette.primaryColor} size={'15'} />
              )}
            />
          </View>
        </HeaderContainer>
        <InputContainer>
          <SearchIconSVG color="grey" />
          <TextInputStyle
            placeholder="Search..."
            placeholderTextColor={'grey'}
            onChangeText={handleSearch}
            value={query}
          />
        </InputContainer>

        <TextContainer>
          <TextTitleList>Most fields</TextTitleList>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FieldList', { field: fieldDataPut });
            }}>
            <TextCheckAllList>Discover All</TextCheckAllList>
          </TouchableOpacity>
        </TextContainer>
        <ListContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}>
          {fieldDataPut?.map((field, i) => {
            return (
              <FieldsCardComponent
                key={i}
                isSelected={i === 0}
                titleText={field.fieldName}
                backgroundImage={field.imageURL}
                btnClicked={() => {
                  updateFieldData(i);
                }}
              />
            );
          })}
        </ListContainer>
        <TextContainer>
          <TextTitleList>Recommended</TextTitleList>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('StadiumList', {
                fieldDataPass:
                  fieldSelected === 'Football'
                    ? footballField
                    : fieldSelected === 'Basketball'
                    ? basketballField
                    : volleyballField,
              });
            }}>
            <TextCheckAllList>Discover All</TextCheckAllList>
          </TouchableOpacity>
        </TextContainer>
        <ListContainer horizontal={true} showsHorizontalScrollIndicator={false}>
          {fieldSelected === 'Football'
            ? footballField.map((stadium, i) => {
                return (
                  <StadiumCardComponent
                    key={i}
                    titleDescription={stadium.stadiumName}
                    backgroundImage={stadium.imageURL}
                    btnClicked={() => {
                      navigation.navigate('StadiumDetail', { stadiumId:stadium.id });
                    }}
                  />
                );
              })
            : fieldSelected === 'Basketball'
            ? basketballField.map((stadium, i) => {
                return (
                  <StadiumCardComponent
                    key={i}
                    titleDescription={stadium.stadiumName}
                    backgroundImage={stadium.imageURL}
                    btnClicked={() => {
                      navigation.navigate('StadiumDetail', { stadiumId :stadium.id});
                    }}
                  />
                );
              })
            : volleyballField.map((stadium, i) => {
                return (
                  <StadiumCardComponent
                    key={i}
                    titleDescription={stadium.stadiumName}
                    backgroundImage={stadium.imageURL}
                    btnClicked={() => {
                      navigation.navigate('StadiumDetail', { stadiumId:stadium.id });
                    }}
                  />
                );
              })}
        </ListContainer>
      </ContainerScreen>
    </ContainerApp>
  );
};
