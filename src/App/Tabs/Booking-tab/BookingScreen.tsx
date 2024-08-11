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
import { usePalette } from '../../../assets/color-palette/ThemeApp';import useBooking from './useBooking';
import {
  formatDate,
  extractTimeFromDate,
} from '../../../services/HelperFunctions';
import ModalQrCodeGenerateComponent from '../../../Components/HomeComponents/ModalQrCodeGenerateComponent';
import CardBookingComponents from '../../../Components/HomeComponents/CardBookingComponents';
import SkeletonBookingCard from '../../../Components/SkeletonLoadingComponents/SkeletonBookingCard';
import BookingIconSVG from '../../../assets/Icons/svg/TabsIcon/BookingIconSVG';
import { useTranslation } from 'react-i18next';
export const BookingScreen = ({navigation, route}: any) => {
  const {BookingList, removeBookingFromUser} = useBooking(route);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const palette = usePalette();
  const {t} =useTranslation()
  const navigate = (timeSlotId: string) => {

    navigation.navigate('BookingDetail', {
      timeSlotId: timeSlotId,
    });
  };
  return (
    <ContainerApp palette={palette}>
      
      <Text
        style={{
          fontSize: 17,
          color: palette.secondaryTextColor,
          marginTop: 30,
          fontWeight: '700',
          paddingBottom: 20,
        }}>
       {t('booking.bookingScreen.title')}
      </Text>
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {BookingList
          ?BookingList.length!==0? BookingList.map((el, i) => {
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
            }):(  <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                marginTop: 50,
              }}
            >
              <BookingIconSVG size={"100"}  color={palette.primaryColor} />
              <Text
                style={{
                  fontSize: 18,
                  color: palette.secondaryTextColor,
                  fontWeight: '600',
                  marginTop: 20,
                  textAlign: 'center',
                }}
              >
                       {t('booking.bookingScreen.noBookingsTitle')}

              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: palette.secondaryTextColor,
                  marginTop: 10,
                  textAlign: 'center',
                  paddingHorizontal: 20,
                }}
              >
                       {t('booking.bookingScreen.noBookingsMessage')}
                       </Text>
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  backgroundColor: palette.primaryColor,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}
                onPress={() => navigation.navigate('HomeTab',{Screen:"Home"})}
              >
                <Text style={{ color: 'white', fontSize: 16 }}>{t('booking.bookingScreen.exploreButton')}</Text>
              </TouchableOpacity>
            </View>)
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
