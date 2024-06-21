import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LeaderBoardScreen from '../../App/Tabs/LeaderBoard-tab/LeaderBoardScreen';
import { BookingScreen } from '../../App/Tabs/Booking-tab/BookingScreen';
const HomeStack = createNativeStackNavigator();

export const BookingSectionStack = () => {
  return (
    <HomeStack.Navigator initialRouteName='Booking'>
      <HomeStack.Screen
        name="Booking"
        component={BookingScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

export default BookingSectionStack;
