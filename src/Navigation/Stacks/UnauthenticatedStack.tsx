import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnexionMethodScreen from '../../App/Screens/Authentication-screen/ConnexionMethodScreen';
import SignUpScreen from '../../App/Screens/Authentication-screen/SignUpScreen';
import SignInScreen from '../../App/Screens/Authentication-screen/SignInScreen';
import CodeVerificationScreen from '../../App/Screens/Authentication-screen/CodeVerificationScreen';
import PasswordForgottenScreen from '../../App/Screens/Authentication-screen/PasswordForgottenScreen';
import DemoScreen from '../../App/Screens/Splach-screen/DemoScreen';
import AddPictureScreen from '../../App/Screens/Authentication-screen/AddPictureScreen';
import LanguageScreen from '../../App/Screens/Splach-screen/LanguageScreen';
const AuthStack = createNativeStackNavigator();

const UnauthenticatedStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="ConnexionMethod">
      {/* <AuthStack.Screen name="LanguageSelection" component={LanguageScreen} options={{ headerShown: false }} /> */}
      <AuthStack.Screen name="ConnexionMethod" component={ConnexionMethodScreen} options={{ headerShown: false }} />
      {/* <AuthStack.Screen name="Demo" component={DemoScreen} options={{ headerShown: false }} /> */}
      <AuthStack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Signin" component={SignInScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="CodeVerification" component={CodeVerificationScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="PasswordForgotten" component={PasswordForgottenScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="AddPicture" component={AddPictureScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

export default UnauthenticatedStack;
