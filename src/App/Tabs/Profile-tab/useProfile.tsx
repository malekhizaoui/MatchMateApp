import {useCallback, useState, useContext} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../models/User';
import {AuthContext} from '../../../services/Context/AuthContext';
import {GameHistory} from '../../models/GameHistory';
import { handleRequests } from '../../../services/HandleRequests';
import { Stadium } from '../../models/Stadium';

const useProfile = (navigation: any) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [gameHistory, setGameHistory] = useState<GameHistory[]>([]);
  const {signOut} = useContext(AuthContext);
  const [password, setPassword] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [stadiumsExcludingFeedback,setStadiumsExcludingFeedbacs]=useState<Stadium[]>([])
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  const getUserData = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res  =await handleRequests('get',`users/${userId}`)
      setUserData(res.data);
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
      handleRequests('put',`user/${userId}`, updateData)
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const getGameHistory = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res =await handleRequests('get',`gameHistoryUserId/${userId}`)
      setGameHistory(res.data);
    } catch (error) {
      console.log("err",error);
      
    }
  };

  useFocusEffect(
    useCallback(() => {
      getUserData();
      getGameHistory();
      getStadiumsExludingFeedbacks();
    }, []),
  );

  const getStadiumsExludingFeedbacks=async ()=>{
    const userId=await AsyncStorage.getItem("userId")

    try {      
        const res =await handleRequests('get',`userStadium/${userId}`)
        setStadiumsExcludingFeedbacs(res.data)
        
    } catch (error) {
      console.log("error",error);
       
    }
  }  

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
    stadiumsExcludingFeedback,
    modalVisible, setModalVisible
  };
};

export default useProfile;
