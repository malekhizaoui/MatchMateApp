import React from 'react';
import {StatusBar, Text} from 'react-native';
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
const BookingDetailScreen = ({navigation, route}: any) => {
  const {bookingDetail, removeBookingFromUser} = useBooking(route);

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

export default BookingDetailScreen;
