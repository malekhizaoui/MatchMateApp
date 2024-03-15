import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../App/Tabs/Profile-tab/ProfileScreen';
const HomeStack = createNativeStackNavigator();

export const ProfileSectionStack = () => {
  return (
    <HomeStack.Navigator initialRouteName='Profile'>
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

export default ProfileSectionStack;
