import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {AuthContext} from '../../../../services/Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../../../services/BaseUrl';
import {handleRequests} from '../../../../services/HandleRequests';
const CELL_COUNT = 6;
export const useAuth = (navigation: any, route: any = false) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const {userId, codeVerification} = route && route.params;
  const {signIn} = useContext(AuthContext);

  const loginUser = async () => {
    AsyncStorage.setItem('token', "res.data.token");

    if (email !== '' && password !== '') {
      await axios
        .post(`http://192.168.1.112:3009/api/v1/login`, {email, password})
        .then(res => {
          if (res.data.token) {
            console.log('resszvdv', res.data);
            AsyncStorage.setItem('token', res.data.token);
            AsyncStorage.setItem('userId',JSON.stringify(res.data.findUser.id))
            signIn();
          }
        })
        .catch((err: any) => {
          console.log('err', err);
        });
    }
  };
  const registerUser = async () => {
    console.log('ssd');

    await axios
      .post(`http://192.168.1.112:3009/api/v1/register`, {
        email,
        password,
        firstName,
        lastName,
        age,
      })
      .then(res => {
        navigation.navigate('CodeVerification', {
          userId: res.data.user.id,
          codeVerification: res.data.user.code_verification,
        });
      })
      .catch((err: any) => {
        console.log('err', err);
      });
  };

  const verifyCode = async () => {
    
    if (Number(value) == Number(codeVerification)) {
      console.log("dsdsdsdsdsdsdsd");

      await axios
        .put(`http://192.168.1.112:3009/api/v1/user/${userId}`, {
          is_verified: true,
        })
        .then(res => {
          
          navigation.navigate('Signin');
        });
    } else {
      console.log('verification code is wrong');
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    age,
    setAge,
    loginUser,
    registerUser,
    verifyCode,
    ref,
    props,
    value,
    setValue,
    getCellOnLayoutHandler,
    CELL_COUNT,
    signIn,
    
  };
};

export default useAuth;
