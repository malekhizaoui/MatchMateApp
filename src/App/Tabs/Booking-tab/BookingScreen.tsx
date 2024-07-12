// BookingScreen.js

import React, {useState} from 'react';
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
import useBooking from './useBooking';
import {
  formatDate,
  extractTimeFromDate,
} from '../../../services/HelperFunctions';
import ModalQrCodeGenerateComponent from '../../../Components/HomeComponents/ModalQrCodeGenerateComponent';
export const BookingScreen = ({navigation, route}: any) => {
  const {BookingList, removeBookingFromUser} = useBooking(route);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <Text
        style={{
          fontSize: 17,
          color: MatchMatePalette.whiteColor,
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
                    <BookingTitle>
                      {el.stadium.stadiumName} Stadium
                    </BookingTitle>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('BookingDetail', {
                          timeSlotId: el.id,
                        });
                      }}>
                      <BookingDetailText>Detail</BookingDetailText>
                    </TouchableOpacity>
                  </BookingRow>
                  <BookingDate>Day : {formatDate(el.startTime)}</BookingDate>
                  <BookingDate>
                    Time : {extractTimeFromDate(el.startTime)}h -{' '}
                    {extractTimeFromDate(el.endTime)}h
                  </BookingDate>
                  <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
                  <BookingDetailText>Show qrCode</BookingDetailText>
                  </TouchableOpacity>
                  <CancelButton
                    onPress={() => {
                      removeBookingFromUser(el.id);
                    }}>
                    <CancelButtonText>Cancel Booking</CancelButtonText>
                  </CancelButton>
                </BookingDetails>
                {modalVisible && (
                  <ModalQrCodeGenerateComponent
                    qrCode={el?.qrCodeUrl}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    stadiumId={el.stadium?.id}
                  />
                )}
              </BookingContainer>
            );
          })}
      </ScrollView>
    </ContainerApp>
  );
};
