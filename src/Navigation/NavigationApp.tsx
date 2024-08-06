import React, { useMemo, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext, AuthContextProps } from '../services/Context/AuthContext';
import UnauthenticatedStack from './Stacks/UnauthenticatedStack';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingSectionStack from './Stacks/BookingSectionStack';
import ProfileSectionStack from './Stacks/ProfileSectionStack';
import HomeSectionStack from './Stacks/HomeSectionStack';
import LeaderboardSectionStack from './Stacks/LeaderboardSectionStack';
import { ScreenOptions } from './ScreenOptions';
import LoadingScreen from '../App/Screens/Splach-screen/LoadingScreen';
import { usePalette } from '../assets/color-palette/ThemeApp';
import { StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';

function NavigationApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [barColor, setBarColor] = useState<string>('');
  const [signed, setSigned] = useState(true);
  const [routeName, setRouteName] = useState<string | undefined>();
  const [lightModeStatus, setLightModeStatus] = useState<string | null>(null);
  const palette = usePalette();
  const {i18n} = useTranslation();
  const [language, setLanguage] = useState(null);

  const retrieveUserSession = async () => {
    try {
      const res = await AsyncStorage.getItem('token');
      setSigned(!res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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

  const getLanguage = async () => {
    try {
      await AsyncStorage.getItem('language').then((res:any) => {
        console.log("resss",res);

        if(res){
          setLanguage(res)
          i18n.changeLanguage(res);

        }else{
          i18n.changeLanguage("en");
        }

        // setLanguage("en");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const retrievePaletteApp = async () => {
    try {
      const lightningModeCheck = await AsyncStorage.getItem('lightningMode');
      setLightModeStatus(lightningModeCheck);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveUserSession();
    retrievePaletteApp();
    getLanguage()
  }, []);

  const authContext: AuthContextProps = useMemo(() => ({
    signIn: () => {
      retrieveUserSession();
      setSigned(false);
    },
    signOut: () => {
      removeUserSession();
    },
    setBarColorCntxt: (color: string) => {
      setBarColor(color);
    },
    setLightModeStatusContext: (mode: string |null) => {
      setLightModeStatus(mode);

    },
    lightModeStatus,
  }), [lightModeStatus]);

  const SplashApp = createNativeStackNavigator();
  const TabBarDourbia = createBottomTabNavigator();
  const ref = createNavigationContainerRef();

  const TabNav = ({ routeName, authenticated = false }: any) => {
    const hide = routeName === 'MatchDetail';
  
    return (
      <TabBarDourbia.Navigator
        initialRouteName={authenticated ? 'Home' : 'ProfileTab'}
        screenOptions={({ navigation, route }: any) => {
          const palette = usePalette(); // Ensure this is up-to-date
  
          return {
            ...ScreenOptions({ navigation, route }),
            tabBarStyle: {
              backgroundColor: palette.lightBackgroundColor,
              padding: 10,
              height: '8%',
              width: '100%',
              alignSelf: 'center',
              borderColor: palette.blackColor,
              borderWidth: 1,
            },
          };
        }}>
        <TabBarDourbia.Screen name="HomeTab" component={HomeSectionStack} />
        <TabBarDourbia.Screen name="LeaderboardTab" component={LeaderboardSectionStack} />
        {authenticated ? (
          <>
            <TabBarDourbia.Screen name="BookingTab" component={BookingSectionStack} />
            <TabBarDourbia.Screen name="ProfileTab" component={ProfileSectionStack} />
          </>
        ) : (
          <TabBarDourbia.Screen name="ProfileTab" component={UnauthenticatedStack} />
        )}
      </TabBarDourbia.Navigator>
    );
  };
  

  if (!language) {
    return <LoadingScreen />;
  }
console.log("lightModeStatus",lightModeStatus);

  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar 
        barStyle={lightModeStatus==="light"?"dark-content":"light-content"}
        backgroundColor={palette.darkBackgroundColor}
      />
      <NavigationContainer>
        <TabNav routeName={routeName} authenticated={!signed} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default NavigationApp;
