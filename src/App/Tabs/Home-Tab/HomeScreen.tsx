import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  ContainerApp,
  ContainerScreen,
  HeaderContainer,
  ExploreRegionContainer,
  UpdateRegionContainer,
  RegionExploreTxt,
  RegionTxt,
  InputContainer,
  TextInputStyle,
  ListContainer,
  TextContainer,
  TextTitleList,
  TextCheckAllList,
  fieldData,
  stadiumData,
  stadiumsFootball,
  stadiumsVolley,
} from './StyledComponent/StyledComponent';
import StadiumCardComponent from '../../../Components/HomeComponents/StadiumCardComponent';
import ExpandIconSVG from '../../../assets/Icons/svg/ExpandIconSVG';
import {MatchMatePalette} from '../../../assets/color-palette';
import SearchIconSVG from '../../../assets/Icons/svg/SearchIconSVG';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
import FieldsCardComponent from '../../../Components/HomeComponents/FieldsCardComponent';
export const HomeScreen = ({navigation}: any) => {
  const scrollViewRef = useRef<ScrollView>(null); // Define the type of the ref
  const [fieldDataPut, setfieldDataPut] = useState(fieldData);
  const [fieldSelected, setFieldSelected] = useState('Basketball');
  const updateFieldData = (index: number) => {
    const reorderedFieldData = [
      fieldDataPut[index],
      ...fieldDataPut.slice(0, index),
      ...fieldDataPut.slice(index + 1),
    ];
    setfieldDataPut(reorderedFieldData);
    setFieldSelected(fieldDataPut[index].fieldName);
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true }); // Use optional chaining
  };

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
            <RegionTxt>Zurich</RegionTxt>
          </ExploreRegionContainer>
          <UpdateRegionContainer>
            <PinIconSVG color={MatchMatePalette.primaryColor} size={'15'} />
            <RegionExploreTxt>Zurich,CH</RegionExploreTxt>
            <ExpandIconSVG color={MatchMatePalette.primaryColor} />
          </UpdateRegionContainer>
        </HeaderContainer>
        <InputContainer>
          <SearchIconSVG color="grey" />
          <TextInputStyle
            placeholder="things to find out"
            placeholderTextColor={'grey'}></TextInputStyle>
        </InputContainer>

        <TextContainer>
          <TextTitleList>Most fields</TextTitleList>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FieldList');
            }}>
            <TextCheckAllList>Discover All</TextCheckAllList>
          </TouchableOpacity>
        </TextContainer>
        <ListContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}>
          {fieldDataPut.map((field, i) => {
            return (
              <FieldsCardComponent
                isSelected={i == 0 ? true : false}
                titleText={field.fieldName}
                backgroundImage={field.backgroundImage}
                btnClicked={() => {
                  // navigation.navigate('FieldList');
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
                  fieldSelected === 'Football' ? stadiumsFootball : fieldSelected === 'Basketball'? stadiumData:stadiumsVolley,
              });
            }}>
            <TextCheckAllList>Discover All</TextCheckAllList>
          </TouchableOpacity>
        </TextContainer>
        <ListContainer horizontal={true} showsHorizontalScrollIndicator={false}>
          {fieldSelected === 'Football'
            ? stadiumsFootball.map((stadium, i) => {
                return (
                  <StadiumCardComponent
                    titleDescription={stadium.titleDescription}
                    backgroundImage={stadium.backgroundImage}
                    btnClicked={() => {
                      navigation.navigate('StadiumDetail', {stadium});
                    }}
                  />
                );
              })
            : fieldSelected === 'Basketball'
            ? stadiumData.map((stadium, i) => {
                return (
                  <StadiumCardComponent
                    titleDescription={stadium.titleDescription}
                    backgroundImage={stadium.backgroundImage}
                    btnClicked={() => {
                      navigation.navigate('StadiumDetail', {stadium});
                    }}
                  />
                );
              })
            : stadiumsVolley.map((stadium, i) => {
                return (
                  <StadiumCardComponent
                    titleDescription={stadium.titleDescription}
                    backgroundImage={stadium.backgroundImage}
                    btnClicked={() => {
                      navigation.navigate('StadiumDetail', {stadium});
                    }}
                  />
                );
              })}
        </ListContainer>
      </ContainerScreen>
    </ContainerApp>
  );
};
