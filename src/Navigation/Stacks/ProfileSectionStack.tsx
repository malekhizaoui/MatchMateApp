import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../App/Tabs/Profile-tab/ProfileScreen';
import EditProfileScreen from '../../App/Tabs/Profile-tab/EditProfileScreen';
import GameHistoryScreen from '../../App/Tabs/Profile-tab/GameHistoryScreen';
const HomeStack = createNativeStackNavigator();

export const ProfileSectionStack = () => {
  return (
    <HomeStack.Navigator initialRouteName='Profile'>
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="GameHistory"
        component={GameHistoryScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

export default ProfileSectionStack;
