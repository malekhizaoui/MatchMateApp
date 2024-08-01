import { useCallback, useState, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../models/User';
import { AuthContext } from '../../../services/Context/AuthContext';
import { GameHistory } from '../../models/GameHistory';
import { handleRequests } from '../../../services/HandleRequests';
import { Stadium } from '../../models/Stadium';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera, OptionsCommon } from 'react-native-image-picker';

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const useProfile = ({ navigation }:any) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [gameHistory, setGameHistory] = useState<GameHistory[]>([]);
  const [displayedGameHistory, setDisplayedGameHistory] = useState<GameHistory[]>([]);
  const [gameHistoryPage, setGameHistoryPage] = useState(0);
  const { signOut } = useContext(AuthContext);
  const [password, setPassword] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [stadiumsExcludingFeedback, setStadiumsExcludingFeedback] = useState<Stadium[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const ITEMS_PER_PAGE = 4;

  const updateProfilePicture = async (imageUri: string) => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      await handleRequests('put', `user/${userId}/updateProfilePicture`, { imageUri });
      getUserData();
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };

  const getUserData = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await handleRequests('get', `users/${userId}`);
      setUserData(res.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const openImagePicker = () => {
    const options:OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options:OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      // setSelectedImage(imageUri);
      updateUser(imageUri);
    }
  };

 const updateUser = async (imageUser?:string) => {
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
      console.log("updateData",updateData);

      await handleRequests('put', `user/${userId}`, updateData);
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const getGameHistory = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await handleRequests('get', `gameHistoryUserId/${userId}`);
      setGameHistory(res.data);
      setDisplayedGameHistory(res.data.slice(0, ITEMS_PER_PAGE));
    } catch (error) {
      console.log('err', error);
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
      console.log('error', error);
    }
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
    stadiumsExcludingFeedback,
    modalVisible,
    setModalVisible,
    openImagePicker,
    handleCameraLaunch,
    updateProfilePicture,
  };
};

export default useProfile;
