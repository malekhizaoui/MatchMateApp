import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  ContainerAppReviews,
  SettingsPropertiesContainer,
  SettingsPropertyContent,
  LineSperator,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';
import ProfilePropertyComponent from '../../../Components/ProfileComponents/ProfilePropertyComponent';
import InfoIconSVG from '../../../assets/Icons/svg/InfoIconSVG';
import LightModeIconSVG from '../../../assets/Icons/svg/LightModeIconSVG';
import { Dropdown } from 'react-native-element-dropdown';
import useProfile from './useProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LanguagesIconSVG from '../../../assets/Icons/svg/LanguagesIconSVG';
import FranceIconSVG from '../../../assets/Icons/svg/FranceIconSVG';

const SettingsScreen = ({ navigation }:any) => {
  const palette = usePalette();
  const { isFocus, setIsFocus, theme, setTheme, languages,data,setLightModeStatusContext } = useProfile(navigation);

  const styles = StyleSheet.create({
    container: {
      padding: 0,
      width: '100%',
      marginTop: 10
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

  return (
    <ContainerAppReviews palette={palette}>
      <NavigateBack navigation={navigation} headerTitle={'Settings'} />
      
      <SettingsPropertiesContainer palette={palette}>
        <SettingsPropertyContent>
          
          <ProfilePropertyComponent
            propertyText="Lightning mode"
            icon={<LightModeIconSVG color={palette.secondaryTextColor} />}
            toNavigate={() => {
              setIsFocus(!isFocus);
            }}
          />
          <View>
              <View style={styles.container}>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: 'red' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={theme}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={async (item) => {
                    
                    if(item.value==="automatic"){
                      await AsyncStorage.removeItem('lightningMode');
                      setTheme(item.value);
                      setLightModeStatusContext(null)
                    }else{
                      setTheme(item.value);
                    await AsyncStorage.setItem('lightningMode', item.value);
                    setLightModeStatusContext(item.value)
                    setIsFocus(false);
                    }
                  }}
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
            
          </View>
          <LineSperator palette={palette}></LineSperator>

          <ProfilePropertyComponent
            propertyText="Languages"
            icon={<LanguagesIconSVG color={palette.secondaryTextColor
            } />}
            toNavigate={() => {
              setIsFocus(!isFocus);
            }}
          />
          <View>
              <View style={styles.container}>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: 'red' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={languages}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={"xsdsd"}
                  // onFocus={() => setIsFocus(true)}
                  // onBlur={() => setIsFocus(false)}
                  onChange={()=>{}}
                  renderLeftIcon={() => (
                    <FranceIconSVG />
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
              
            
          </View>
          <LineSperator palette={palette}></LineSperator>
          <ProfilePropertyComponent
            propertyText="About App"
            icon={<InfoIconSVG color={palette.secondaryTextColor} />}
            toNavigate={() => {
              navigation.navigate('About');
            }}
          />
          <LineSperator palette={palette}></LineSperator>
        </SettingsPropertyContent>
      </SettingsPropertiesContainer>
    </ContainerAppReviews>
  );
};

export default SettingsScreen;
