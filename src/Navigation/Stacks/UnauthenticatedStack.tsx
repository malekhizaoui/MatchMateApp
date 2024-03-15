import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnexionMethodScreen from '../../App/Screens/Authentication-screen/ConnexionMethodScreen';
import SignUpScreen from '../../App/Screens/Authentication-screen/SignUpScreen';
import SignInScreen from '../../App/Screens/Authentication-screen/SignInScreen';

const AuthStack = createNativeStackNavigator();

export const UnauthenticatedStack = () => {
  return (
    <AuthStack.Navigator initialRouteName='connexionMethod'>
      <AuthStack.Screen
        name="ConnexionMethod"
        component={ConnexionMethodScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signin"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

export default UnauthenticatedStack;
