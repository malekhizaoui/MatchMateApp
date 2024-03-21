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
  ContainerStadiumAvailability,
  DaysContainer,
  DayContent,
  DayText,
  MonthText,
  ImageConainer,
  ImagesContent,
  ImageStyle,
  TextCheckAllList
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import ImageSlideComponent from '../../../Components/HomeComponents/ImageSlideComponent';
import DescriptionStadiumComponent from '../../../Components/HomeComponents/DescriptionStadiumComponent';
import FacilityCardComponent from '../../../Components/HomeComponents/FacilityCardComponent';
import PreviousIconSVG from '../../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';
import DayIconSVG from '../../../assets/Icons/svg/DayIconSVG';
import DurationIconSVG from '../../../assets/Icons/svg/DurationIconSVG';
import PlayersIconSVG from '../../../assets/Icons/svg/PlayersIconSVG';
const scheduleData = {
  days: [
    {
      day: 'Today',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
      month: '13 juin',
    },
    {
      day: 'Tomorrow',
      startTime: '10:00 AM',
      endTime: '6:00 PM',
      month: '13 juin',
    },
    {
      day: 'Wednesday',
      startTime: '8:30 AM',
      endTime: '4:30 PM',
      month: '13 juin',
    },
    {
      day: 'Thursday',
      startTime: '9:30 AM',
      endTime: '5:30 PM',
      month: '13 juin',
    },
    {
      day: 'Friday',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
      month: '13 juin',
    },
    {
      day: 'Saturday',
      startTime: '11:00 AM',
      endTime: '7:00 PM',
      month: '13 juin',
    },
    {
      day: 'Sunday',
      startTime: '12:00 PM',
      endTime: '6:00 PM',
      month: '13 juin',
    },
  ],
};

export const StadiumAvailabilityScreen = ({navigation, route}: any) => {
  const [selectedDay, setSelectedDay] = useState(scheduleData.days[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentImageIndex, fadeAnim]);

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const images = [
    'https://as2.ftcdn.net/v2/jpg/05/25/69/95/1000_F_525699565_AHJx01vmP1vonyzhGZ6aRuAWL9s9yEp2.jpg',
    'https://wallpapers.com/images/hd/4k-basketball-background-91g80k94qh7y7hlj.jpg',
  ];

  return (
    <ContainerApp>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Stadium Availability'}
      />
      <DaysContainer horizontal showsHorizontalScrollIndicator={false}>
        {scheduleData.days.map((item, index) => (
          <DayContent key={index} onPress={() => setSelectedDay(item)}>
            <DayText>{item.day}</DayText>
            <MonthText>{item.month}</MonthText>
            <View
              style={[
                selectedDay === item && styles.selectedDayContainer,
              ]}></View>
          </DayContent>
        ))}
      </DaysContainer>
      <ImageConainer>
        <ImagesContent>
          <Animated.Image
            source={{uri: images[currentImageIndex]}}
            style={[styles.image, {opacity: fadeAnim}]}
          />
          <TouchableOpacity
            onPress={handlePrevImage}
            style={styles.arrowButton}>
            <PreviousIconSVG color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNextImage}
            style={[styles.arrowButton, {right: 0}]}>
            <NextIconSVG color="white" />
          </TouchableOpacity>
        </ImagesContent>
      </ImageConainer>
      {selectedDay && (
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 20,
            justifyContent: 'center',
          }}
          style={{maxHeight: '55%', width: '100%', display: 'flex'}}>
          <View style={styles.dayDetailsContainer}>
            <View
              style={{
                width: '100%',
                backgroundColor: "#262626",
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom:15
              }}>
              {/* <DayIconSVG color="white" size={'25'} /> */}
              <Text style={styles.dayText}>{`${selectedDay.startTime} - ${selectedDay.endTime}`}</Text>
            </View>
            <View style={{width: '90%'}}>
              {/* <Text
                style={
                  styles.timeText
                }>{`${selectedDay.startTime} - ${selectedDay.endTime}`}</Text> */}
              <View style={styles.detailRow}>
                <DurationIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
                <Text style={styles.detailLabel}>Duration:</Text>
                <Text style={styles.detailValue}>1H30</Text>
              </View>
        
              <View style={styles.detailRow}>
                <PlayersIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
                <Text style={styles.detailLabel}>Players Left:</Text>
                <Text style={styles.detailValue}>5</Text>
              </View>
              <View style={styles.detailRow}>
              <PlayersIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>

                <Text style={styles.detailLabel}>Teams:</Text>
                <Text style={styles.detailValue}>2 teams of 5</Text>
              </View>
              <View style={styles.separator}></View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom:15
                }}>
                  <TextCheckAllList>Join Team</TextCheckAllList>
                  <TextCheckAllList>Match Detail</TextCheckAllList>
                </View>
              {/* Add more details as needed */}
            </View>
          </View>
          <View style={styles.dayDetailsContainer}>
            <View
              style={{
                width: '100%',
                backgroundColor: "#262626",
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom:15
              }}>
              {/* <DayIconSVG color="white" size={'25'} /> */}
              <Text style={styles.dayText}>{`${selectedDay.startTime} - ${selectedDay.endTime}`}</Text>
            </View>
            <View style={{width: '90%'}}>
              {/* <Text
                style={
                  styles.timeText
                }>{`${selectedDay.startTime} - ${selectedDay.endTime}`}</Text> */}
              <View style={styles.detailRow}>
                <DurationIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
                <Text style={styles.detailLabel}>Duration:</Text>
                <Text style={styles.detailValue}>1H30</Text>
              </View>
        
              <View style={styles.detailRow}>
                <PlayersIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
                <Text style={styles.detailLabel}>Players Left:</Text>
                <Text style={styles.detailValue}>5</Text>
              </View>
              <View style={styles.detailRow}>
              <PlayersIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>

                <Text style={styles.detailLabel}>Teams:</Text>
                <Text style={styles.detailValue}>2 teams of 5</Text>
              </View>
              <View style={styles.separator}></View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom:15
                }}>
                  <TextCheckAllList>Join Team</TextCheckAllList>
                  <TextCheckAllList>Match Detail</TextCheckAllList>
                </View>
              {/* Add more details as needed */}
            </View>
          </View>
          <View style={styles.dayDetailsContainer}>
            <View
              style={{
                width: '100%',
                backgroundColor: "#262626",
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom:15
              }}>
              {/* <DayIconSVG color="white" size={'25'} /> */}
              <Text style={styles.dayText}>{`${selectedDay.startTime} - ${selectedDay.endTime}`}</Text>
            </View>
            <View style={{width: '90%'}}>
              {/* <Text
                style={
                  styles.timeText
                }>{`${selectedDay.startTime} - ${selectedDay.endTime}`}</Text> */}
              <View style={styles.detailRow}>
                <DurationIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
                <Text style={styles.detailLabel}>Duration:</Text>
                <Text style={styles.detailValue}>1H30</Text>
              </View>
        
              <View style={styles.detailRow}>
                <PlayersIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>
                <Text style={styles.detailLabel}>Players Left:</Text>
                <Text style={styles.detailValue}>5</Text>
              </View>
              <View style={styles.detailRow}>
              <PlayersIconSVG color={MatchMatePalette.secondaryColor} size={"25"}/>

                <Text style={styles.detailLabel}>Teams:</Text>
                <Text style={styles.detailValue}>2 teams of 5</Text>
              </View>
              <View style={styles.separator}></View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom:15
                }}>
                  <TextCheckAllList>Join Team</TextCheckAllList>
                  <TextCheckAllList>Match Detail</TextCheckAllList>
                </View>
              {/* Add more details as needed */}
            </View>
          </View>
        </ScrollView>
      )}
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
  selectedDayContainer: {
    width: '80%',
    height: 2,
    backgroundColor: '#04ADB3',
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
  dayDetailsContainer: {
    borderRadius: 10,
    width: '90%',
    elevation: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },
  dayText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    width:"100%"

  },
  timeText: {
    fontSize: 16,
    color: MatchMatePalette.lightBackgroundColoe,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems:"center"
  },
  detailLabel: {
    fontWeight: 'bold',
    color: 'white',
    marginRight: 5,
    marginLeft: 5,
  },
  detailValue: {
    color: 'white',
  },
});

export default StadiumAvailabilityScreen;
