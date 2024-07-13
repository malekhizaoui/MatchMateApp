import React, { useMemo, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext, AuthContextProps } from '../services/Context/AuthContext';
import UnauthenticatedStack from './Stacks/UnauthenticatedStack';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingSectionStack from './Stacks/BookingSectionStack';
import ProfileSectionStack from './Stacks/ProfileSectionStack';
import HomeSectionStack from './Stacks/HomeSectionStack';
import LeaderboardSectionStack from './Stacks/LeaderboardSectionStack';
import { ScreenOptions } from './ScreenOptions';
import ImmersiveMode from 'react-native-immersive-mode';
import { MatchMatePalette } from '../assets/color-palette';

import LoadingScreen from '../App/Screens/Splach-screen/LoadingScreen';

function NavigationApp() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [choix, setChoix] = useState<string>('');
  const [barColor, setBarColor] = useState<string>('');
  const [signed, setSigned] = useState(true);
  const [routeName, setRouteName] = useState<string | undefined>();

  const retrieveUserSession = async () => {
    try {
      const res = await AsyncStorage.getItem('token');
      setSigned(!res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Update loading state when finished retrieving
    }
  };

  const removeUserSession = async () => {
    try {
      await AsyncStorage.removeItem('token');
      retrieveUserSession();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveUserSession();
  }, []);

  useEffect(() => {
    // ComponentDidMount equivalent
    ImmersiveMode.setBarMode('Normal');
    ImmersiveMode.setBarColor(MatchMatePalette.lightBackgroundColor);

    // componentWillUnmount equivalent
    return () => {
      ImmersiveMode.fullLayout(false);
    };
  }, []);

  const authContext: AuthContextProps = useMemo(() => {
    return {
      signIn: () => {
        retrieveUserSession();
        setSigned(false);
      },
      signOut: () => {
        removeUserSession();
      },
      setChoix: setChoix,
      choix,
      setBarColorCntxt: (color: string) => {
        setBarColor(color);
      },
    };
  }, [choix]);

  const SplashApp = createNativeStackNavigator();
  const TabBarDourbia = createBottomTabNavigator();
  const ref = createNavigationContainerRef();

  const TabNav = ({ routeName, authenticated = false }: any) => {
    const hide = routeName === 'MatchDetail';

    return (
      <TabBarDourbia.Navigator
        initialRouteName={'Home'}
        screenOptions={({ navigation, route }: any) => ({
          ...ScreenOptions({ navigation, route }),
          tabBarStyle: {
            backgroundColor: MatchMatePalette.lightBackgroundColor,
            padding: 10,
            height: '8%',
            width: '100%',
            alignSelf: 'center',
            borderColor: MatchMatePalette.whiteColor,
            border: 1,
          },
        })}>
        <TabBarDourbia.Screen name="HomeTab" component={HomeSectionStack} />
        <TabBarDourbia.Screen name="LeaderboardTab" component={LeaderboardSectionStack} />
        {authenticated ? (
          <>
            <TabBarDourbia.Screen name="BookingTab" component={BookingSectionStack} />
            <TabBarDourbia.Screen name="ProfileTab" component={ProfileSectionStack} />
          </>
        ) : (
          <TabBarDourbia.Screen name="ProfileTab" component={UnauthenticatedStack}  />
        )}
      </TabBarDourbia.Navigator>
    );
  };

  if (isLoading) {
    return <LoadingScreen />; // Show loading screen while retrieving user session
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <TabNav routeName={routeName} authenticated={!signed} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default NavigationApp;
