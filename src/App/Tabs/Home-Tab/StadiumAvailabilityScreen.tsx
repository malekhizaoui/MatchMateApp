import React, {useState, useRef, useEffect} from 'react';
import {
  Animated,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  ContainerApp,
  DaysContainer,
  ImageConainer,
  ImagesContent,
} from './StyledComponent/StyledComponent';
import DaySelectedComponent from '../../../Components/HomeComponents/DaySelectedComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import { Stadium } from '../../models/Stadium';
import PreviousIconSVG from '../../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';

import MatchDetailComponent from '../../../Components/HomeComponents/MatchDetailComponent';
import axios from 'axios';
import BaseUrl from '../../../services/BaseUrl';

import NoTimeSlotsComponent from '../../../Components/HomeComponents/NoTimeSlotsComponent';
import { TimeSlot } from '../../models/TimeSlot';

const getWeekDaysInfo = () => {
  const today = new Date();
  const daysInfo = [];
  daysInfo.push({
    day: 'today',
    date: `${today.getDate()} ${today.toLocaleDateString('en-US', {
      month: 'long',
    })}`,
    realDay: today.toLocaleDateString('en-US', {weekday: 'long'}), // Actual day of the week
  });

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  daysInfo.push({
    day: 'tomorrow',
    date: `${tomorrow.getDate()} ${tomorrow.toLocaleDateString('en-US', {
      month: 'long',
    })}`,
    realDay: tomorrow.toLocaleDateString('en-US', {weekday: 'long'}), // Actual day of the week
  });

  for (let i = 2; i < 7; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    daysInfo.push({
      day: nextDay.toLocaleDateString('en-US', {
        weekday: 'long',
      }),
      date: `${nextDay.getDate()} ${nextDay.toLocaleDateString('en-US', {
        month: 'long',
      })}`,
      realDay: nextDay.toLocaleDateString('en-US', {weekday: 'long'}), // Actual day of the week
    });
  }

  return daysInfo;
};

const days = getWeekDaysInfo();


export const StadiumAvailabilityScreen = ({navigation, route}: any) => {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [stadium, setStadium] = useState<Stadium[]>([]);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const {stadiumId} = route.params;

  useEffect(() => {
    retrieveTimeSlots();
  }, [currentImageIndex, fadeAnim, selectedDay]);

  const retrieveTimeSlots = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/stadium/${stadiumId}`);
      setStadium(res.data.data);
    } catch (error) {
      console.log("err",error);
      
    }
  };

  return (
    <ContainerApp>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Stadium Availability'}
      />
      <DaysContainer
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {days.map((item, index) => (
          <DaySelectedComponent
            key={index}
            item={item}
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
          />
        ))}
      </DaysContainer>
      <ImageConainer>
        <ImagesContent>
          <Animated.Image
            source={{
              uri: stadium.imageURL
                ? stadium.imageURL
                : 'https://static.vecteezy.com/ti/vecteur-libre/p1/1824188-toile-de-fond-flou-abstrait-vector-gris-clair-vectoriel.jpg',
            }}
            style={[styles.image, {opacity: fadeAnim}]}
          />
          <TouchableOpacity onPress={() => {}} style={styles.arrowButton}>
            <PreviousIconSVG color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.arrowButton, {right: 0}]}>
            <NextIconSVG color="white" />
          </TouchableOpacity>
        </ImagesContent>
      </ImageConainer>
      <ScrollView
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}>
        {stadium?.timeSlots?.length > 0 ? (
          // Check if any time slots match the selected day
          stadium.timeSlots.some((timeSlot: any) => {
            const timeSlotDay = new Date(timeSlot.startTime).toLocaleDateString(
              'en-US',
              {
                weekday: 'long',
              },
            );
            return timeSlotDay === selectedDay.realDay;
          }) ? (
            // Render time slots
            stadium.timeSlots
              .filter((timeSlot: any) => {
                const timeSlotDay = new Date(
                  timeSlot.startTime,
                ).toLocaleDateString('en-US', {
                  weekday: 'long',
                });
                return timeSlotDay === selectedDay.realDay;
              })
              .map((timeSlot: any, i: number) => (
                <MatchDetailComponent
                  key={i}
                  navigation={navigation}
                  timeSlot={timeSlot}
                  stadium={stadium}
                />
              ))
          ) : (
            // Render NoTimeSlotsComponent if no time slots match the selected day
            <NoTimeSlotsComponent selectedDay={selectedDay} />
          )
        ) : (
          // Render NoTimeSlotsComponent if there are no time slots
          <NoTimeSlotsComponent selectedDay={selectedDay} />
        )}
      </ScrollView>
    </ContainerApp>
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
  noTimeSlotsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Adjust as needed
  },
  noTimeSlotsText: {
    fontSize: 16,
    color: 'red', // Adjust color as needed
  },
});

export default StadiumAvailabilityScreen;
