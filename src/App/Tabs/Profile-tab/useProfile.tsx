import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../models/User';
import { AuthContext } from '../../../services/Context/AuthContext';
import BaseUrl from '../../../services/BaseUrl';
import ImagePicker from 'react-native-image-crop-picker';
import { DevSettings } from 'react-native';
import { GameHistory } from '../../models/GameHistory';

const useProfile = (navigation: any) => {
  const [userData, setUserData] = useState<User | null >(null);
  const [gameHistory, setGameHistory] = useState<GameHistory []>([]);
  const { signOut } = useContext(AuthContext);
  const [password, setPassword] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  
  const getUserData = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await axios.get(`${BaseUrl}/users/${userId}`);
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
  
  const getGameHistory=async ()=>{
    const userId = await AsyncStorage.getItem('userId');
    try {
        const res =await axios.get(`${BaseUrl}/gameHistoryUserId/${userId}`)
        console.log('resssssss',res.data.data);
        
        setGameHistory(res.data.data)
    } catch (error) {
      
    }
  }

  const choosePhotoFromLibrary = async () => {
    // try {
    //   const image = await ImagePicker.openPicker({
    //     width: 300,
    //     height: 400,
    //     cropping: true,
    //   });
    //   const uri = image.path;
    //   const name = image.modificationDate;
    //   const type = image.mime;
    //   const source = {
    //     uri,
    //     name,
    //     type,
    //   };
    //   await handleUpload(source);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  
//   const changeImageFromCamera = async () => {
//     try {
//       const image = await ImagePicker.openCamera({
//         width: 300,
//         height: 400,
//         cropping: true,
//       });
//       const uri = image.path;
//       const name = image.modificationDate;
//       const type = image.mime;
//       const source = {
//         uri,
//         name,
//         type,
//       };
//       await handleUpload(source);
//     } catch (err) {
//       console.log(err);
//     }
//   };
  const handleUpload = async (photo:any) => {
    const userId = await AsyncStorage.getItem('userId');

    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'dourbina');
    data.append('cloud_name', 'dqoutfci8');
    await fetch('https://api.cloudinary.com/v1_1/dqoutfci8/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(async data => {
        await axios
          .put(`${BaseUrl}/user/${userId}`, {image: data.url})
          .then(() => {
            DevSettings.reload()
        });
      })
      .catch(err => {
        console.log(err);
        
    });
  };



  useEffect(() => {
    getUserData();
    getGameHistory()
  }, []);

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
    choosePhotoFromLibrary,
    gameHistory
  };
};

export default useProfile;
