import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {BookingDetailText} from './StyledComponent/StyledComponent';

import FeatherIcon from 'react-native-vector-icons/Feather';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import StarIconNotFilledIconSVG from '../../assets/Icons/svg/StarIconNotFilledIconSVG';
import {User} from '../../App/models/User';
import {formatDate} from '../../services/HelperFunctions';
import {MatchMatePalette} from '../../assets/color-palette';


interface CardBookingComponentsProps {
  img : string |undefined;
  name: string;
  day : string;
  time: string;
  showQrCode:()=>void;
  navigation:()=>void;
  removeBooking:()=>void
}

const CardBookingComponents = ({
  img ,
  name,
  day ,
  time,
  navigation,
  showQrCode,
  removeBooking
}: CardBookingComponentsProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardLikeWrapper}>
        <TouchableOpacity onPress={removeBooking}>
          <View style={styles.cardLike}>
            <MaterialCommunityIcons
              color={MatchMatePalette.primaryColor}
              name="delete"
              size={20}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cardTop}>

      <Image
          alt=""
          resizeMode="cover"
          style={styles.cardImg}
          source={{uri: img}}
        />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{name}</Text>
          <TouchableOpacity onPress={navigation}>
            <BookingDetailText>Detail</BookingDetailText>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardDates}>{day}</Text>
        <Text style={styles.cardDates}>{time}</Text>
        <Text style={styles.cardPrice}>

          <TouchableOpacity onPress={showQrCode}>
            <BookingDetailText>show qrcode</BookingDetailText>
          </TouchableOpacity>

        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  content: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  /** Header */
  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  headerTop: {
    marginHorizontal: -6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  /** Card */
  card: {
    borderRadius: 8,
    backgroundColor: MatchMatePalette.darkBackgroundColor,
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: '90%',
    borderWidth:2,
    borderColor:MatchMatePalette.lightBackgroundColor
  },
  cardLikeWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    right: 12,
  },
  cardLike: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: MatchMatePalette.lightBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardImg: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding:12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: MatchMatePalette.secondaryTextColor,
    marginRight: 'auto',

  },
  cardStars: {
    marginLeft: 2,
    marginRight: 4,
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  cardDates: {
    marginTop: 4,
    fontSize: 16,
    color: '#595a63',
  },
  cardPrice: {
    marginTop: 6,
    fontSize: 16,
    color: '#232425',
  },
});

export default CardBookingComponents;
