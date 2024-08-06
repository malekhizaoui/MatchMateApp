import { useState, useEffect, useContext, SetStateAction, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../models/User';
import { AuthContext } from '../../../services/Context/AuthContext';
import { GameHistory } from '../../models/GameHistory';
import { handleRequests } from '../../../services/HandleRequests';
import { Stadium } from '../../models/Stadium';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera, OptionsCommon } from 'react-native-image-picker';
import { StyleSheet, Text } from 'react-native';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const useProfile = ({ navigation }: any) => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState<User | null>(null);
  const [gameHistory, setGameHistory] = useState<GameHistory[]>([]);
  const [displayedGameHistory, setDisplayedGameHistory] = useState<GameHistory[]>([]);
  const [gameHistoryPage, setGameHistoryPage] = useState(0);
  const { signOut, setLightModeStatusContext, lightModeStatus } = useContext(AuthContext);
  const [password, setPassword] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [stadiumsExcludingFeedback, setStadiumsExcludingFeedback] = useState<Stadium[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [theme, setTheme] = useState(lightModeStatus === "light" ? "light" : lightModeStatus === "dark" ? "dark" : "automatic");
  const [isFocus, setIsFocus] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); // Add this state

  const palette = usePalette();
  const ITEMS_PER_PAGE = 4;
  const data = [
    { label: t('profile.settings.lightMode'), value: 'light' },
    { label: t('profile.settings.darkMode'), value: 'dark' },
    { label: t('profile.settings.automatic'), value: 'automatic' },
  ];
  const languages = [
    { label: t('profile.settings.languageOptions.french'), value: 'fr',image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png" },
    { label: t('profile.settings.languageOptions.english'), value: 'eng' ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"},
    { label: t('profile.settings.languageOptions.italian'), value: 'it' ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/langfr-225px-Flag_of_Italy.svg.png"},
    { label: t('profile.settings.languageOptions.spanish'), value: 'esp' ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcsp-2jdFFPJLWdKfEXsPmzzZE3FlDsFFRBEmbdng11uKOml1NOlfH832Ok7GatwZ9AI&usqp=CAU"},
    // { label: 'Italian', value: 'it' },
  ];

  const updateProfilePicture = async (imageUri: string) => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      await handleRequests('put', `user/${userId}/updateProfilePicture`, { imageUri });
      getUserData();
    } catch (error) {
      console.error(t('errors.updateProfilePicture'), error);
    }
  };

  const getUserData = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await handleRequests('get', `users/${userId}`);
      setUserData(res.data);
    } catch (error) {
      console.error(t('errors.fetchUserData'), error);
    } finally {
      setIsLoading(false);
    }
  };

  const openImagePicker = () => {
    const options: OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options: OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log(t('messages.imagePickerCancel'));
    } else if (response.error) {
      console.log(t('errors.imagePickerError'), response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      updateUser(imageUri);
    }
  };

  const updateUser = async (imageUser?: string) => {
    const userId = await AsyncStorage.getItem('userId');
    const updateData: any = {};

    if (firstName !== null && firstName !== "") {
      updateData.firstName = firstName;
    }
    if (lastName !== null && lastName !== "") {
      updateData.lastName = lastName;
    }
    if (age !== null && age !== "") {
      updateData.age = age;
    }
    if (password !== null && password !== "") {
      updateData.password = password;
    }
    if (imageUser) {
      updateData.image = imageUser;
    }

    try {
      console.log(t('messages.updateData'), updateData);

      await handleRequests('put', `user/${userId}`, updateData);
      navigation.navigate('Profile');
    } catch (error) {
      console.error(t('errors.updateUser'), error);
    }
  };

  const getGameHistory = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await handleRequests('get', `gameHistoryUserId/${userId}`);
      setGameHistory(res.data);
      setDisplayedGameHistory(res.data.slice(0, ITEMS_PER_PAGE));
    } catch (error) {
      console.log(t('errors.fetchGameHistory'), error);
    }
  };

  const loadMoreGameHistory = () => {
    const newPage = gameHistoryPage + 1;
    const newItems = gameHistory.slice(newPage * ITEMS_PER_PAGE, (newPage + 1) * ITEMS_PER_PAGE);
    setDisplayedGameHistory([...displayedGameHistory, ...newItems]);
    setGameHistoryPage(newPage);
  };

  useFocusEffect(
    useCallback(() => {
      getUserData();
      getGameHistory();
      getStadiumsExcludingFeedback();
    }, []),
  );

  const getStadiumsExcludingFeedback = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await handleRequests('get', `userStadium/${userId}`);
      setStadiumsExcludingFeedback(res.data);
    } catch (error) {
      console.log(t('errors.fetchStadiumsExcludingFeedback'), error);
    }
  };

  const styles = StyleSheet.create({
    label: {
      position: 'absolute',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
      color: palette.whiteColor,
    },
  });

  const handleThemeChange = async (newTheme: any) => {
    await AsyncStorage.setItem('lightningMode', newTheme);
    setTheme(newTheme);
    // Force re-render by updating the state
    setIsFocus(!isFocus);
  };
  const handleLanguageChange = async (item:any) => {
    i18n.changeLanguage(item.value);
    setCurrentLanguage(item.value); 
    AsyncStorage.setItem('language',item.value)
    // Update the current language state
  };
  return {
    userData,
    password,
    firstName,
    lastName,
    age,
    signOut,
    setPassword,
    setFirstName,
    setLastName,
    setAge,
    updateUser,
    gameHistory: displayedGameHistory,
    loadMoreGameHistory,
    openImagePicker,
    handleCameraLaunch,
    modalVisible,
    setModalVisible,
    stadiumsExcludingFeedback,
    theme,
    setTheme,
    isFocus,
    setIsFocus,
    data,
    languages,
    handleThemeChange,
    setLightModeStatusContext,
    isLoading,
    currentLanguage, 
    handleLanguageChange,
  };
};

export default useProfile;
