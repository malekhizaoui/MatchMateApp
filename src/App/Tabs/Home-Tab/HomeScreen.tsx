import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
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
  stadiumsVolley,
} from './StyledComponent/StyledComponent';

import StadiumCardComponent from '../../../Components/HomeComponents/StadiumCardComponent';
import ExpandIconSVG from '../../../assets/Icons/svg/ExpandIconSVG';
import {MatchMatePalette} from '../../../assets/color-palette';
import SearchIconSVG from '../../../assets/Icons/svg/SearchIconSVG';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
import FieldsCardComponent from '../../../Components/HomeComponents/FieldsCardComponent';
import axios from 'axios';
import BaseUrl from '../../../services/BaseUrl';
import {Dropdown} from 'react-native-element-dropdown';
import {Stadium} from '../../models/Stadium';
import { Field } from '../../models/Field';

export const HomeScreen = ({navigation}: any) => {

  const scrollViewRef = useRef<ScrollView>(null);
  const [basketballField, setBasketballField] =  useState<Stadium[]>([]);
  const [footballField, setFootballField] = useState<Stadium[]>([]);
  const [volleyballField, setVolleyballField] =  useState<Stadium[]>([]);
  const [fieldDataPut, setfieldDataPut] = useState<Field[]>([]);
  const [fieldSelected, setFieldSelected] = useState('Basketball');
  const [regionSelected, setRegionSelected] = useState('Lausanne');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            isFocus && {color: MatchMatePalette.primaryColor},
          ]}></Text>
      );
    }
    return null;
  };
  const updateFieldData = (index: number) => {
    const reorderedFieldData = [
      fieldDataPut[index],
      ...fieldDataPut.slice(0, index),
      ...fieldDataPut.slice(index + 1),
    ];
    setfieldDataPut(reorderedFieldData);
    setFieldSelected(fieldDataPut[index].fieldName);
    scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
  };
    
    
  const getFieldsBaseOnRegion = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/fieldRegion/${regionSelected}`);
      setfieldDataPut(res.data);
      setBasketballField(res.data[0].stadiums);
      setFootballField(res.data[1].stadiums);
      setVolleyballField(res.data[2].stadiums);
    } catch (error) {}
  };
    
  useEffect(() => {
    getFieldsBaseOnRegion();
  }, [regionSelected]);
  const data = [
    {label: 'Lausanne', value: 'Lausanne'},
    {label: 'Geneva', value: 'Geneva'},
  ];
  console.log('footballField', footballField);

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
            <RegionTxt>{regionSelected}</RegionTxt>
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
              placeholder={regionSelected}
              value={regionSelected}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setRegionSelected(item.value);
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
                key={i}
                isSelected={i == 0 ? true : false}
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
                      navigation.navigate('StadiumDetail', {stadium});
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
                      navigation.navigate('StadiumDetail', {stadium});
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
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: MatchMatePalette.primaryColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
