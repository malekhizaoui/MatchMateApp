import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
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
import {Dropdown} from 'react-native-element-dropdown';
import {useHome} from './useHome';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
import {usePalette} from '../../../assets/color-palette/ThemeApp';
import SearchIconSVG from '../../../assets/Icons/svg/SearchIconSVG';
import FieldsCardComponent from '../../../Components/HomeComponents/FieldsCardComponent';
import StadiumCardComponent from '../../../Components/HomeComponents/StadiumCardComponent';
import {useColorScheme} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  const palette = usePalette();
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      padding: 0,
      width: '44%',
    },
    dropdown: {
      height: 50,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: palette.lightBackgroundColor,
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
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      color: palette.secondaryTextColor,
    },
    itemStyle: {
      padding: 10,
      borderRadius: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });

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
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <ContainerApp palette={palette}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={palette.darkBackgroundColor}
      />
      <ContainerScreen>
        {!isInputFocused && (
          <HeaderContainer>
            <ExploreRegionContainer>
              <RegionExploreTxt palette={palette}>Explore</RegionExploreTxt>
              <RegionTxt palette={palette}>{region}</RegionTxt>
            </ExploreRegionContainer>
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown]}
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
                  <PinIconSVG color={palette.primaryColor} size={'15'} />
                )}
                renderItem={item => (
                  <View>
                    <Text
                      style={[
                        styles.selectedTextStyle,
                        {
                          backgroundColor: palette.primaryTextColor,
                          padding: 10,
                        },
                      ]}>
                      {item.label}
                    </Text>
                  </View>
                )}
              />
            </View>
          </HeaderContainer>
        )}
        <InputContainer palette={palette}>
          <SearchIconSVG color="grey" />
          <TextInputStyle
            placeholder="Search..."
            placeholderTextColor={'grey'}
            onChangeText={handleSearch}
            value={query}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </InputContainer>
        
        {!isInputFocused && (
          <>
            <TextContainer>
              <TextTitleList palette={palette}>Most fields</TextTitleList>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FieldList', {field: fieldDataPut});
                }}>
                <TextCheckAllList palette={palette}>
                  Discover All
                </TextCheckAllList>
              </TouchableOpacity>
            </TextContainer>
            <ListContainer
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRef}>
              {fieldDataPut?.length < 1
                ? [1, 2, 3].map((item, i) => (
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
                : fieldDataPut &&
                  fieldDataPut.map((field, i) => (
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
                  ))}
            </ListContainer>
            <TextContainer>
              <TextTitleList palette={palette}>Recommended</TextTitleList>
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
                <TextCheckAllList palette={palette}>
                  Discover All
                </TextCheckAllList>
              </TouchableOpacity>
            </TextContainer>
            <ListContainer horizontal showsHorizontalScrollIndicator={false}>
              {(footballField || basketballField || volleyballField)?.length > 0
                ? (fieldSelected === 'Football'
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
                        navigation.navigate('StadiumDetail', {
                          stadiumId: stadium.id,
                        });
                      }}
                      isLoading={
                        fieldSelected === 'Football'
                          ? !footballField.length
                          : fieldSelected === 'Basketball'
                          ? !basketballField.length
                          : !volleyballField.length
                      }
                      feedback={stadium.feedbacks}
                    />
                  ))
                : [1, 2, 3, 4].map((_, i) => (
                    <StadiumCardComponent
                      key={i}
                      titleDescription={''}
                      backgroundImage={''}
                      btnClicked={() => {}}
                      isLoading={true}
                      feedback={[]}
                    />
                  ))}
            </ListContainer>
          </>
        )}

      </ContainerScreen>
    </ContainerApp>
  );
};

export default HomeScreen;
