import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SignUpScreen from './App/Screens/Authentication-screen/SignUpScreen';
import NavigationApp from './Navigation/NavigationApp';
import SignInScreen from './App/Screens/Authentication-screen/SignInScreen';
import ConnexionMethodScreen from './App/Screens/Authentication-screen/ConnexionMethodScreen';
function App(): React.JSX.Element {
  return <SignUpScreen/>;
}

export default App;
