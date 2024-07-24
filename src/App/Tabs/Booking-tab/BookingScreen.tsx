// BookingScreen.js

import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import CardBookingComponents from '../../../Components/HomeComponents/CardBookingComponents';
import SkeletonBookingCard from '../../../Components/SkeletonLoadingComponents/SkeletonBookingCard';
export const BookingScreen = ({navigation, route}: any) => {
  const {BookingList, removeBookingFromUser} = useBooking(route);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const navigate = (timeSlotId: string) => {
    navigation.navigate('BookingDetail', {
      timeSlotId: timeSlotId,
    });
  };
  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <Text
        style={{
          fontSize: 17,
          color: MatchMatePalette.secondaryTextColor,
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
        {BookingList
          ? BookingList.map((el, i) => {
              return (
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  key={i}
>
                  <CardBookingComponents
                    img={el.stadium.imageURL}
                    name={el.stadium.stadiumName}
                    day={formatDate(el.startTime)}
                    time={`${extractTimeFromDate(
                      el.startTime,
                    )}-${extractTimeFromDate(el.endTime)}`}
                    navigation={() => {
                      navigation.navigate('BookingDetail', {timeSlotId: el.id});
                    }}
                    showQrCode={() => {
                      setModalVisible(true);
                    }}
                    removeBooking={() => {
                      removeBookingFromUser(el.id);
                    }}
                  />
                  {modalVisible && (
                    <ModalQrCodeGenerateComponent
                      qrCode={el.qrCodeUrl}
                      modalVisible={modalVisible}
                      setModalVisible={setModalVisible}
                      stadiumId={el.stadium?.id}
                    />
                  )}
                </View>
              );
            })
          : [1, 2, 3, 4].map((_, index) => (
              <View
                key={index}
                style={{width: '90%', marginBottom: 10, height: 260}}>
                <SkeletonBookingCard />
              </View>
            ))}
      </ScrollView>
    </ContainerApp>
  );
};
