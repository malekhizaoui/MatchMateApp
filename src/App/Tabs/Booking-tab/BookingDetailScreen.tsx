import React ,{useState}from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import {
  ContainerAppDetailGame,
  ContainerDetailScreen,
  BtnCheck,
  TextButton,
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import ImageSlideComponent from '../../../Components/HomeComponents/ImageSlideComponent';
import GameHistoryMatchComponent from '../../../Components/ProfileComponents/GameHistoryMatchComponent';
import MatchDetailBoardComponent from '../../../Components/HomeComponents/MatchDetailBoardComponent';
import useBooking from './useBooking';
import ModalQrCodeGenerateComponent from '../../../Components/HomeComponents/ModalQrCodeGenerateComponent';
const BookingDetailScreen = ({navigation, route}: any) => {
  const {bookingDetail, removeBookingFromUser} = useBooking(route);
  console.log("bookingDetail",bookingDetail);
  
  return (
    <ContainerAppDetailGame>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Booking detail'}
        color={MatchMatePalette.primaryColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
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
      <BtnCheck
        onPress={() => {
            bookingDetail&&removeBookingFromUser(bookingDetail?.id);
            navigation.navigate('Booking')
        }}>
        <TextButton>Cancel booking</TextButton>
      </BtnCheck>
     
    </ContainerAppDetailGame>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '8%',
    height: 30,
    borderRadius: 15,
  },
  qrCodeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  qrCodeLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: MatchMatePalette.whiteColor,
  },
  qrCodeImage: {
    width: 200,
    height: 200,
  },
});
export default BookingDetailScreen;
