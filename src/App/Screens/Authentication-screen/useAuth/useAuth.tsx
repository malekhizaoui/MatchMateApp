import { useState, useContext } from 'react';
import { ToastAndroid } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera, OptionsCommon } from 'react-native-image-picker';

import { AuthContext } from '../../../../services/Context/AuthContext';
import { handleRequests } from '../../../../services/HandleRequests';
import { usePalette } from '../../../../assets/color-palette/ThemeApp';

const CELL_COUNT = 6;

export const useAuth = (navigation: any, route: any = false) => {
  const { t } = useTranslation();
  const palette = usePalette();
  const toast = useToast();
  const { signIn, setBarColorCntxt } = useContext(AuthContext);

  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [value, setValue] = useState('');
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  // Confirmation code field hooks
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  // Destructuring from route params
  const { userId, codeVerification, cameFrom } = route.params || {};

  // Function to handle API requests
  const handleApiRequest = async (method: string, endpoint: string, data?: object) => {
    try {
      setLoading(true);
      const response = await handleRequests(method, endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`Error in ${endpoint}:`, error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const loginUser = async () => {
    if (email && password) {
      try {
        const data = await handleApiRequest('post', 'login', { email, password });
        if (data.token) {
          await AsyncStorage.multiSet([
            ['token', data.token],
            ['userId', JSON.stringify(data.findUser.id)],
          ]);
          signIn();
        } else {
          showToast('authentication.errors.invalidEmailPassword', 'danger');
        }
      } catch {
        showToast('authentication.errors.invalidEmailPassword', 'danger');
      }
    } else {
      showToast('authentication.errors.enterEmailPassword', 'danger');
    }
  };

  // Register user
  const registerUser = async () => {
    try {
      const data = await handleApiRequest('post', 'register', { email, password, firstName, lastName, age });
      navigation.navigate('CodeVerification', { userId: data.user.id, codeVerification: data.user.code_verification });
      showToast('authentication.messages.confirmationCodeSent', 'custom');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  // Google Sign-In
  const googleSignInEvent = async () => {
    GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID',
      offlineAccess: true,
    });

    try {
      const hasPlayServices = await GoogleSignin.hasPlayServices();
      if (hasPlayServices) {
        const userInfo = await GoogleSignin.signIn();
        const tokenId = userInfo.idToken;
        console.log('Google Token ID:', tokenId);
        // Handle backend request with tokenId
      }
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  // Resend confirmation code
  const resentCode = async () => {
    try {
      const data = await handleApiRequest('put', 'resendCode', { email });
      navigation.navigate('CodeVerification', { userId: data.id, codeVerification: data.code_verification, cameFrom: 'forgetPass', email });
      showToast('authentication.messages.confirmationCodeSent', 'success');
    } catch (error) {
      console.error('Error resending code:', error);
    }
  };

  // Verify confirmation code
  const verifyCode = async () => {
    if (Number(value) === Number(codeVerification)) {
      try {
        await handleApiRequest('put', `user/${userId}`, { is_verified: true });
        navigation.navigate(cameFrom ? 'PasswordForgotten' : 'AddPicture', { userId });
        showToast('authentication.messages.accountCreated', 'success');
      } catch (error) {
        console.error('Error verifying code:', error);
      }
    } else {
      showToast('authentication.errors.verificationCodeWrong', 'danger');
    }
  };

  // Reset password
  const resetPassword = async () => {
    if (password === newPassword) {
      try {
        await handleApiRequest('put', 'resetpassword', { email, newPassword: password });
        setStep(3);
        showToast('authentication.messages.passwordChanged', 'success');
      } catch (error) {
        console.error('Error resetting password:', error);
      }
    } else {
      showToast('authentication.errors.passwordsDontMatch', 'danger');
    }
  };

  // Image picker functions
  const openImagePicker = () => {
    const options: OptionsCommon = { mediaType: 'photo', includeBase64: false, maxHeight: 2000, maxWidth: 2000 };
    _launchImageLibrary(options, handleImageResponse);
  };

  const handleCameraLaunch = () => {
    const options: OptionsCommon = { mediaType: 'photo', includeBase64: false, maxHeight: 2000, maxWidth: 2000 };
    _launchCamera(options, handleImageResponse);
  };

  const updateUserImage = async (imageUser?: string) => {
    try {
      await handleApiRequest('put', `user/${userId}`, { image: imageUser });
      navigation.navigate('Signin');
    } catch (error) {
      console.error('Error updating user image:', error);
    }
  };

  const handleImageResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.error('Image picker error:', response.error);
    } else {
      const imageUri = response.uri || response.assets?.[0]?.uri;
      updateUserImage(imageUri);
    }
  };

  // Utility function to show toast messages
  const showToast = (messageKey: string, type: 'success' | 'danger' | 'custom') => {
    toast.show(t(messageKey), {
      type,
      placement: 'top',
      duration: 4000,
      style: type === 'success' ? { backgroundColor: palette.primaryColor } : {},
    });
  };

  // Return hook values and functions
  return {
    email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName, age, setAge,
    loginUser, registerUser, verifyCode, ref, props, value, setValue, getCellOnLayoutHandler, CELL_COUNT,
    signIn, googleSignInEvent, setBarColorCntxt, resetPassword, resentCode, newPassword, setNewPassword,
    step, loading, handleCameraLaunch, openImagePicker
  };
};

export default useAuth;
