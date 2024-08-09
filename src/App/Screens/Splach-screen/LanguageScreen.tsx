import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  useColorScheme,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogoApp } from '../Authentication-screen/styledComponent/StyledComponent';
import { useTranslation } from 'react-i18next';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { Dropdown } from 'react-native-element-dropdown';

const LanguageScreen = ({ navigation }: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const palette = usePalette();
  const { i18n } = useTranslation();
  const colorScheme = useColorScheme();

  const handleLanguageSelect = async () => {
    // await AsyncStorage.setItem('language', selectedLanguage).then(() => {
    //   i18n.changeLanguage(selectedLanguage);
      
    // });
    navigation.navigate('ConnexionMethod');
    console.log("qsdljhgsdljhg");

  };

  const languages = [
    { label: 'English', value: 'en', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png' },
    { label: 'Français', value: 'fr', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png' }
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.darkBackgroundColor,
      }}>
      <LogoApp
        source={
          colorScheme === 'light'
            ? require('../../../assets/Logos/MatchMate.png')
            : require('../../../assets/Logos/MatchMateDarkWhite.png')
        }
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          color: palette.primaryColor,
        }}>
        Select Your Language
      </Text>
      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={languages}
          labelField="label"
          valueField="value"
          value={selectedLanguage}
          onChange={item => {
            setSelectedLanguage(item.value);
          }}
          renderLeftIcon={() => {
            const selectedLang = languages.find(lang => lang.value === selectedLanguage);
            return selectedLang ? (
              <Image
                source={{ uri: selectedLang.image }}
                style={{ width: 20, height: 15, marginRight: 10 }}
              />
            ) : null;
          }}
          renderItem={item => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={{ width: 20, height: 15, marginRight: 10 }} />
              <Text style={styles.selectedTextStyle}>{item.label}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: palette.secondaryColor,
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
        }}
        onPress={handleLanguageSelect}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 20,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',  // Adjust color as needed
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',  // Adjust color as needed
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',  // Adjust color as needed
  },
});

export default LanguageScreen;
