import {useState, useContext} from 'react';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {AuthContext} from '../../../../services/Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {handleRequests} from '../../../../services/HandleRequests';
const CELL_COUNT = 6;
export const useAuth = (navigation: any, route: any = false) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [step,setStep]=useState<number>(0)
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const {userId, codeVerification, cameFrom} = route && route.params;
  const {signIn, setBarColorCntxt} = useContext(AuthContext);

  const loginUser = async () => {
    if (email !== '' && password !== '') {
      handleRequests('post', 'login', {email, password})
        .then(res => {
          if (res.data.token) {
            AsyncStorage.setItem('token', res.data.token);
            AsyncStorage.setItem(
              'userId',
              JSON.stringify(res.data.findUser.id),
            );
            signIn();
          }
        })
        .catch((err: any) => {
          console.log('err', err);
        });
    }
  };
  const registerUser = async () => {
    handleRequests('post', 'register', {
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
  const googleSignInEvent = async () => {
    GoogleSignin.configure({
      webClientId:
        '597756036187-tlrpf1jnr3l5fg7575uj4qjelg8062es.apps.googleusercontent.com',
      offlineAccess: true,
    });
    GoogleSignin.hasPlayServices()
      .then(async hasPlayService => {
        hasPlayService &&
          GoogleSignin.signIn()
            .then(async userInfo => {
              console.log('jgfdfgd');

              const tokenId = userInfo.idToken;
              userInfo && console.log('tokenId', tokenId);

              // handleRequests('post', 'user/google', {tokenId})
              //     .then(async response => {
              //       await AsyncStorage.setItem('idUser', response.userId);
              //       await AsyncStorage.setItem('token', response.token);
              //     })
              //     .then(eventSucces)
            })
            .catch(err => console.log('erroro google', err));
      })

      .catch(error => {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.error('user cancelled the login flow');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.error('operation (e.g. sign in) is in progress already');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.error('play services not available or outdated');
        } else {
          console.error(error);
          console.log('ldsqjhglsqjhgdlsqhj');

          // some other error happened
        }
      });
  };

  const resentCode = async () => {
    try {
      const res = await handleRequests('put', 'resendCode', {email});

      navigation.navigate('CodeVerification', {
        userId: res.data.id,
        codeVerification: res.data.code_verification,
        cameFrom: 'forgetPass',
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const verifyCode = async () => {
    if (Number(value) == Number(codeVerification)) {
      handleRequests('put', `user/${userId}`, {
        is_verified: true,
      }).then(res => {
        console.log('cameFrom', cameFrom);

        !cameFrom
          ? navigation.navigate('Signin')
          : navigation.navigate('PasswordForgotten', {step: 2});
      });
    } else {
      console.log('verification code is wrong');
    }
  };

  const resetPassword = async () => {
    try {
      if (password === newPassword) {

        await handleRequests('put', 'resetpassword', {
          email,
          newPassword: password,
        });
        setStep(3)
      } else {
        console.log("paswwordds doesn't match");
      }
    } catch (error) {
      console.log('erroe', error);
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
    googleSignInEvent,
    setBarColorCntxt,
    resetPassword,
    resentCode,
    newPassword,
    setNewPassword,
    step
  };
};

export default useAuth;
