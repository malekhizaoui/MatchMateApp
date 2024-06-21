// BookingScreen.js

import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, Text, TouchableOpacity} from 'react-native';
import {
  ContainerApp,
  BookingContainer,
  BookingImage,
  BookingDetails,
  BookingRow,
  BookingTitle,
  BookingDetailText,
  BookingDate,
  CancelButton,
  CancelButtonText,
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import axios from 'axios';
import BaseUrl from '../../../services/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TimeSlot} from '../../models/TimeSlot';
export const BookingScreen = ({navigation}: any) => {
  const [BookingList, setBookingList] = useState<TimeSlot[] | null>(null);

  const getUserBooking = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await axios.get(`${BaseUrl}/users/${userId}`);
      console.log('res.data.data', res.data.data.timeSlots);
      setBookingList(res.data.data.timeSlots)
    } catch (error) {
      console.log('err', error);
    }
  };
console.log("BookingList",BookingList);

  useEffect(() => {
    getUserBooking();
  }, []);

  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <Text
        style={{
          fontSize: 17,
          color: 'white',
          marginTop: 30,
          fontWeight: '700',
          paddingBottom: 20,
        }}>
        Stadiums Booking
      </Text>
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {BookingList &&
          BookingList.map((el, i) => {
            return (
              <BookingContainer key={i}>
                <BookingImage source={{uri: el.stadium.imageURL}} />
                <BookingDetails>
                  <BookingRow>
                    <BookingTitle>{el.stadium.stadiumName} Stadium</BookingTitle>
                    <TouchableOpacity onPress={() => {}}>
                      <BookingDetailText>Detail</BookingDetailText>
                    </TouchableOpacity>
                  </BookingRow>
                  <BookingDate>Day : 20 Wednesday, 2024</BookingDate>
                  <BookingDate>Time : 15:00 - 15:00</BookingDate>
                  <CancelButton>
                    <CancelButtonText>Cancel Booking</CancelButtonText>
                  </CancelButton>
                </BookingDetails>
              </BookingContainer>
            );
          })}
      </ScrollView>
    </ContainerApp>
  );
};
