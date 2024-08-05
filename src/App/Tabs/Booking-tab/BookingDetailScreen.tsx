import React ,{useState}from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import {
  ContainerAppDetailGame,
  ContainerDetailScreen,
  BtnCheck,
  TextButton,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';
import ImageSlideComponent from '../../../Components/HomeComponents/ImageSlideComponent';
import GameHistoryMatchComponent from '../../../Components/ProfileComponents/GameHistoryMatchComponent';
import MatchDetailBoardComponent from '../../../Components/HomeComponents/MatchDetailBoardComponent';
import useBooking from './useBooking';
import ModalQrCodeGenerateComponent from '../../../Components/HomeComponents/ModalQrCodeGenerateComponent';
const BookingDetailScreen = ({navigation, route}: any) => {
  const {bookingDetail, removeBookingFromUser} = useBooking(route);
  console.log("bookingDetail",bookingDetail);
  const palette = usePalette();

  return (
    <ContainerAppDetailGame palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Booking detail'}
        color={palette.primaryColor}
      />
      
      <ContainerDetailScreen>
        {bookingDetail ? (
          <>
            <MatchDetailBoardComponent
              stadium={bookingDetail.stadium}
              timeSlot={bookingDetail}
            />
            <ImageSlideComponent stadium={bookingDetail.stadium} />

            <GameHistoryMatchComponent
              team={bookingDetail.team}
              fieldName={bookingDetail.stadium.field.fieldName}
            />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ContainerDetailScreen>
      <BtnCheck palette={palette}
        onPress={() => {
            bookingDetail&&removeBookingFromUser(bookingDetail?.id);
            navigation.navigate('Booking')
        }}>
        <TextButton palette={palette}>Cancel booking</TextButton>
      </BtnCheck>
     
    </ContainerAppDetailGame>
  );
};

export default BookingDetailScreen;
