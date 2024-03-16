import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../App/Tabs/Home-Tab/HomeScreen';
import { StadiumAvailabilityScreen } from '../../App/Tabs/Home-Tab/StadiumAvailabilityScreen';
import { StadiumDetailScreen } from '../../App/Tabs/Home-Tab/StadiumDetailScreen';
import { StadiumListScreen } from '../../App/Tabs/Home-Tab/StadiumListScreen';
import { MatchDetailScreen } from '../../App/Tabs/Home-Tab/MatchDetailScreen';
import { FieldListScreen } from '../../App/Tabs/Home-Tab/FieldListScreen';
const HomeStack = createNativeStackNavigator();

export const HomeSectionStack = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="FieldList"
        component={FieldListScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="StadiumList"
        component={StadiumListScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="StadiumDetail"
        component={StadiumDetailScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="StadiumAvailability"
        component={StadiumAvailabilityScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MatchDetail"
        component={MatchDetailScreen}
        options={{ headerShown: false }}
      />

    </HomeStack.Navigator>
  );
}

export default HomeSectionStack;
