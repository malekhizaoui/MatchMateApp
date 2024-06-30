import {useCallback, useState, useContext} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../models/User';
import {AuthContext} from '../../../services/Context/AuthContext';
import BaseUrl from '../../../services/BaseUrl';
import ImagePicker from 'react-native-image-crop-picker';
import {DevSettings} from 'react-native';
import {GameHistory} from '../../models/GameHistory';

const useProfile = (navigation: any) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [gameHistory, setGameHistory] = useState<GameHistory[]>([]);
  const {signOut} = useContext(AuthContext);
  const [password, setPassword] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);

  const getUserData = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await axios.get(
        `http://16.171.175.193:3009/api/v1/users/${userId}`,
      );
      setUserData(res.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateUser = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const updateData: any = {}; // Object to store fields to update

    // Add fields to updateData if they are not null or undefined
    if (firstName !== null && firstName !== undefined) {
      updateData.firstName = firstName;
    }
    if (lastName !== null && lastName !== undefined) {
      updateData.lastName = lastName;
    }
    if (age !== null && age !== undefined) {
      updateData.age = age;
    }
    if (password !== null && password !== undefined) {
      updateData.password = password;
    }

    try {
      await axios.put(`${BaseUrl}/user/${userId}`, updateData);
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const getGameHistory = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await axios.get(`${BaseUrl}/gameHistoryUserId/${userId}`);

      setGameHistory(res.data.data);
    } catch (error) {}
  };

  useFocusEffect(
    useCallback(() => {
      getUserData();
      getGameHistory();
    }, []),
  );

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
    updateUser, // Make sure updateUser is included in the returned object
    gameHistory,
  };
};

export default useProfile;
