import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import {
  ContainerApp,
  ContainerScreen,
  HeaderContainer,
  ExploreRegionContainer,
  RegionExploreTxt,
  RegionTxt,
  InputContainer,
  TextInputStyle,
  ListContainer,
  TextContainer,
  TextTitleList,
  TextCheckAllList,
} from './StyledComponent/StyledComponent';
import { Dropdown } from 'react-native-element-dropdown';
import { useHome, styles } from './useHome';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
import { MatchMatePalette } from '../../../assets/color-palette';
import SearchIconSVG from '../../../assets/Icons/svg/SearchIconSVG';
import FieldsCardComponent from '../../../Components/HomeComponents/FieldsCardComponent';
import StadiumCardComponent from '../../../Components/HomeComponents/StadiumCardComponent';
import { useColorScheme } from "react-native"

import { Screen } from 'react-native-screens';

export const HomeScreen = ({ navigation }: any) => {
  const colorScheme = useColorScheme();
console.log("colorScheme",colorScheme);


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

  return (
    <ContainerApp>
      <StatusBar
        barStyle={'dark-content'}
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
              onChange={(item) => {
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
              // navigation.navigate('AuthTab',{Screen:"ConnexionMethodScreen"})
            }}>
            <TextCheckAllList>Discover All</TextCheckAllList>
          </TouchableOpacity>
        </TextContainer>
        <ListContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}>
          {fieldDataPut?.length < 1 ? (
            [1, 2, 3].map((item, i) => (
              <FieldsCardComponent
                key={i}
                isSelected={i === 0} // Adjust isSelected logic as needed
                titleText={``} // Example title text
                backgroundImage={''} // Example default image URL
                btnClicked={() => {
                  // Handle click logic for default items
                  console.log(`Default item ${item} clicked`);
                }}
                isLoading={true} // Adjust loading state as needed
              />
            ))
          ) : (
            fieldDataPut&& fieldDataPut.map((field, i) => (
              <FieldsCardComponent
                key={i}
                isSelected={i === 0} // Adjust isSelected logic as needed
                titleText={field.fieldName}
                backgroundImage={field.imageURL}
                btnClicked={() => {
                  updateFieldData(i);
                }}
                isLoading={!fieldDataPut.length}
              />
            ))
          )}
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
        <ListContainer horizontal showsHorizontalScrollIndicator={false}>
          {(footballField || basketballField || volleyballField)?.length > 0 ? (
            (fieldSelected === 'Football'
              ? footballField
              : fieldSelected === 'Basketball'
              ? basketballField
              : volleyballField
            ).map((stadium, i) => (
              <StadiumCardComponent
                key={i}
                titleDescription={stadium.stadiumName}
                backgroundImage={stadium.imageURL}
                btnClicked={() => {
                  navigation.navigate('StadiumDetail', { stadiumId: stadium.id });
                } }
                isLoading={fieldSelected === 'Football'
                  ? !footballField.length
                  : fieldSelected === 'Basketball'
                    ? !basketballField.length
                    : !volleyballField.length} 
                feedback={stadium.feedbacks}/>
            ))
          ) : (
            [1, 2, 3, 4].map((_, i) => (
              <StadiumCardComponent
                key={i}
                titleDescription={''}
                backgroundImage={''}
                btnClicked={() => { } }
                isLoading={true} feedback={[]}              />
            ))
          )}
        </ListContainer>
      </ContainerScreen>
    </ContainerApp>
  );
};

export default HomeScreen;
