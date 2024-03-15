import React, {useMemo, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, AuthContextProps} from '../services/Context/AuthContext';
import UnauthenticatedStack from './Stacks/UnauthenticatedStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function NavigationApp() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [choix, setChoix] = useState<string>('');

  const retrieveUserSession = async () => {
    try {
      await AsyncStorage.getItem('token').then(res => {
        setIsLoggedin(!!res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveUserSession();
  }, []);

  const authContext: AuthContextProps = useMemo(() => {
    return {
      setChoix: setChoix,
      choix,
    };
  }, [choix]);

  const SplashApp = createNativeStackNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <SplashApp.Navigator>
          <SplashApp.Screen
            name="unauthenticated"
            component={UnauthenticatedStack}
            options={{headerShown: false}}
          />
        </SplashApp.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default NavigationApp;
