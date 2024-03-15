import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LeaderBoardScreen from '../../App/Tabs/LeaderBoard-tab/LeaderBoardScreen';
const HomeStack = createNativeStackNavigator();

export const LeaderboardSectionStack = () => {
  return (
    <HomeStack.Navigator initialRouteName='LeaderBoard'>
      <HomeStack.Screen
        name="LeaderBoard"
        component={LeaderBoardScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

export default LeaderboardSectionStack;
