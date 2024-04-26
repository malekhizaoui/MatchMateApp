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
import CodeVerificationScreen from './App/Screens/Authentication-screen/CodeVerificationScreen';
import { HomeScreen } from './App/Tabs/Home-Tab/HomeScreen';
import MatchDetailScreen from './App/Tabs/Home-Tab/MatchDetailScreen';
import StadiumListMapScreen from './App/Tabs/Home-Tab/StadiumListMapScreen';
function App(): React.JSX.Element {
  return <NavigationApp/>;
}

export default App;
