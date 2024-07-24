import { useState, useContext } from 'react';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { AuthContext } from '../../../../services/Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { handleRequests } from '../../../../services/HandleRequests';
import { ToastAndroid } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { MatchMatePalette } from '../../../../assets/color-palette';


const CELL_COUNT = 6;

export const useAuth = (navigation: any, route: any = false) => {
  
  // State variables using useState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [value, setValue] = useState('');
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState(false); // 1. Add loading state


  // Confirmation code field hooks
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  // Destructuring from route params and AuthContext
  const { userId, codeVerification, cameFrom } = route && route.params;
  const { signIn, setBarColorCntxt } = useContext(AuthContext);

  // Toast notification hook
  const toast = useToast();

  // Login user function
  const loginUser = async () => {
    if (email !== '' && password !== '') {
      try {
        setLoading(true); // Start loading when login process begins
        const res = await handleRequests('post', 'login', { email, password });
        if (res.data.token) {
          AsyncStorage.setItem('token', res.data.token);
          AsyncStorage.setItem('userId', JSON.stringify(res.data.findUser.id));
          signIn();
        }
      } catch (err) {
        toast.show('Email or Password is invalid', { type: 'danger', placement: 'bottom', duration: 4000 });
        console.log('err', err);
      } finally {
        setLoading(false); // Stop loading when login process completes
      }
    } else {
      toast.show('You should type your email and password please', { type: 'danger', placement: 'bottom', duration: 4000 });
    }
  };

  // Register user function
  const registerUser = async () => {
    try {
      setLoading(true); // Start loading when registration process begins
      const res = await handleRequests('post', 'register', { email, password, firstName, lastName, age });
      navigation.navigate('CodeVerification', { userId: res.data.user.id, codeVerification: res.data.user.code_verification });
      toast.show('A confirmation code has been sent to your email.', { type: 'custom', placement: 'top', duration: 4000 });
    } catch (err) {
      console.log('err', err);
    } finally {
      setLoading(false); // Stop loading when registration process completes
    }
  };

  // Google sign-in function
  const googleSignInEvent = async () => {
    GoogleSignin.configure({
      webClientId: '597756036187-tlrpf1jnr3l5fg7575uj4qjelg8062es.apps.googleusercontent.com',
      offlineAccess: true,
    });
    try {
      const hasPlayService = await GoogleSignin.hasPlayServices();
      if (hasPlayService) {
        const userInfo = await GoogleSignin.signIn();
        const tokenId = userInfo.idToken;
        console.log('tokenId', tokenId);
        // Handle backend request with tokenId
      }
    } catch (error) {
      console.log('erroro google', error);
    }
  };

  // Resend confirmation code function
  const resentCode = async () => {
    try {
      const res = await handleRequests('put', 'resendCode', { email });
      navigation.navigate('CodeVerification', { userId: res.data.id, codeVerification: res.data.code_verification, cameFrom: 'forgetPass' });
      toast.show('A confirmation code has been sent to your email.', { type: 'success', placement: 'top', duration: 4000, style: { backgroundColor: MatchMatePalette.primaryColor } });
    } catch (error) {
      console.log('error', error);
    }
  };

  // Verify confirmation code function
  const verifyCode = async () => {
    if (Number(value) === Number(codeVerification)) {
      try {
        await handleRequests('put', `user/${userId}`, { is_verified: true });
        if (!cameFrom) {
          navigation.navigate('Signin');
          toast.show('Your account is successfully created.', { type: 'success', placement: 'top', duration: 4000, style: { backgroundColor: MatchMatePalette.primaryColor } });
        } else {
          navigation.navigate('PasswordForgotten', { step: 2 });
        }
      } catch (error) {
        console.log('Error verifying code:', error);
      }
    } else {
      console.log('Verification code is wrong');
      ToastAndroid.show('Verification code is wrong', ToastAndroid.LONG);
    }
  };

  // Reset password function
  const resetPassword = async () => {
    try {
      if (password === newPassword) {
        await handleRequests('put', 'resetpassword', { email, newPassword: password });
        setStep(3);
        ToastAndroid.show('Your password has been successfully changed', ToastAndroid.LONG);
      } else {
        ToastAndroid.show("Your passwords don't match", ToastAndroid.LONG);
      }
    } catch (error) {
      console.log('Error resetting password:', error);
    }
  };

  // Returning necessary variables and functions
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
    googleSignInEvent,
    setBarColorCntxt,
    resetPassword,
    resentCode,
    newPassword,
    setNewPassword,
    step,
    loading
  };
};

export default useAuth;
