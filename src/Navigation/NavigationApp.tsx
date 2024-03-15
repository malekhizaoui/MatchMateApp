import React, {useMemo, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, AuthContextProps} from '../services/Context/AuthContext';
import UnauthenticatedStack from './Stacks/UnauthenticatedStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../App/Tabs/Home-Tab/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookingSectionStack from './Stacks/BookingSectionStack';
import ProfileSectionStack from './Stacks/ProfileSectionStack';
import HomeSectionStack from './Stacks/HomeSectionStack';
import LeaderboardSectionStack from './Stacks/LeaderboardSectionStack';
import {ScreenOptions} from './ScreenOptions';
function NavigationApp() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [choix, setChoix] = useState<string>('');
  const [sign, setSign] = useState(true);

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
      signIn: () => {
        retrieveUserSession();
        setSign(false);
      },
      setChoix: setChoix,
      choix,
    };
  }, [choix]);

  const SplashApp = createNativeStackNavigator();
  const TabBarDourbia = createBottomTabNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {sign ? (
          <SplashApp.Navigator>
            <SplashApp.Screen
              name="unauthenticated"
              component={UnauthenticatedStack}
              options={{headerShown: false}}
            />
          </SplashApp.Navigator>
        ) : (
          
          <TabBarDourbia.Navigator
            initialRouteName={'Home'}
            screenOptions={({navigation, route}: any) => ({
              ...ScreenOptions({navigation, route}),
              tabBarStyle: {
                backgroundColor: '#262626',
                padding: 10,
                height: '8%',
                width: '100%',
                alignSelf: 'center',
                borderColor:'white',
                border:1,
              },
              })}>
            <TabBarDourbia.Screen name="HomeTab" component={HomeSectionStack} />
            <TabBarDourbia.Screen
              name="BookingTab"
              component={BookingSectionStack}
            />
            <TabBarDourbia.Screen
              name="LeaderboardTab"
              component={LeaderboardSectionStack}
            />
            <TabBarDourbia.Screen
              name="ProfileTab"
              component={ProfileSectionStack}
            />
          </TabBarDourbia.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default NavigationApp;
