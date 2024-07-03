import {useCallback, useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { TimeSlot } from '../../models/TimeSlot';
import { handleRequests } from '../../../services/HandleRequests';

const useBooking = (route:any) => {
    const [bookingDetail, setBookingDetail] = useState<TimeSlot | null>(null);
    const [BookingList, setBookingList] = useState<TimeSlot[] | null>(null);
    const timeSlotId = route.params&&route.params.timeSlotId;
    
    const getBookingDetail = async () => {
      try {
        const res = await handleRequests('get',`timeSlot/${timeSlotId}`)
        setBookingDetail(res.data);
      } catch (error) {
        console.log('err', error);
      }
    };
  
 

  const getUserBooking = async () => {    
    const userId = await AsyncStorage.getItem('userId');
    try {
      const res = await handleRequests('get',`users/${userId}`)
      setBookingList(res.data.timeSlots);
    } catch (error) {
      console.log('err', error);
    }
  };

  const removeBookingFromUser = async (timeSlotsId:number) => {    
    const userId = await AsyncStorage.getItem('userId');
    try {
      handleRequests('delete',`users/${userId}/timeSlots/${timeSlotsId}`)
      getUserBooking();
    } catch (error) {
      console.log('err', error);

    }
  };
  useEffect(() => {
    getBookingDetail();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getUserBooking();
    }, []),
  );

  return {
    removeBookingFromUser,
    BookingList,
    bookingDetail
  };
};

export default useBooking;
