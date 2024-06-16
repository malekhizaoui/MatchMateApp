import React, {useMemo, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, AuthContextProps} from '../services/Context/AuthContext';
import UnauthenticatedStack from './Stacks/UnauthenticatedStack';
import {
  NavigationContainer,
  createNavigationContainerRef,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
  const [routeName, setRouteName] = useState<string | undefined>();

  const retrieveUserSession = async () => {
    try {
      const res = await AsyncStorage.getItem('token');
      setSign(!res);
    } catch (error) {
      console.log(error);
    }
  };
  const removeUserSession = async () => {
    try {
      const res = await AsyncStorage.removeItem('token');
      retrieveUserSession();
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
      signOut: () => {
        removeUserSession();
      },
      setChoix: setChoix,
      choix,

    };
  }, [choix]);

  

  const SplashApp = createNativeStackNavigator();
  const TabBarDourbia = createBottomTabNavigator();
  const ref = createNavigationContainerRef();

  const TabNav = ({routeName}: {routeName: string | undefined}) => {
    const hide = routeName === 'MatchDetail';

    return (
      <TabBarDourbia.Navigator
        initialRouteName={'Home'}
        screenOptions={({navigation, route}: any) => ({
          ...ScreenOptions({navigation, route}),
          tabBarStyle: {
            // display: hide ? 'none' : 'flex',
            backgroundColor: '#262626',
            padding: 10,
            height: '8%',
            width: '100%',
            alignSelf: 'center',
            borderColor: 'white',
            border: 1,
          },
        })}>
        <TabBarDourbia.Screen
          name="HomeTab"
          component={HomeSectionStack}
          options={({route}) => ({
            tabBarStyle: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (routeName === 'MatchDetail' || routeName === 'StadiumAvailability' ) {
                return {
                  display: 'none',
                  backgroundColor: '#262626',
                 
                };
              }
              return {
                backgroundColor: '#262626',
                padding: 10,
                height: '8%',
                width: '100%',
                alignSelf: 'center',
                borderColor: 'white',
              }
              ;  
            })(route),
          })}
        />
        
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
    );
  };

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
          <TabNav routeName={routeName} />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default NavigationApp;
