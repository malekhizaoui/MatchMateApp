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
  Button,
} from 'react-native';
import {
  ContainerApp,
  MatchDetailContainer,
  FieldStyleContainer,
  FieldImage,
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';
import {Image} from 'react-native-svg';
import PlayerIconSVG from '../../../assets/Icons/svg/PlayerIconSVG';
import PrimaryButtonComponant from '../../../Components/ButtonPrimaryComponent';
import MatchDetailBoardComponent from '../../../Components/HomeComponents/MatchDetailBoardComponent';
import axios from 'axios';
import BaseUrl from '../../../services/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const MatchDetailScreen = ({navigation, route}: any) => {
  const {stadiumFieldName,timeSlot} = route.params;
  const homeTeamPositionsFootball = [
    {top: '5%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '15%', left: '10%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '15%', right: '10%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '25%', right: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '25%', left: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '35%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '5%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '15%', left: '10%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '15%', right: '10%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '25%', right: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '25%', left: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '35%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  ];

  const homeTeamPositionsBasketball = [
    {top: '5%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '5%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '17%', left: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '17%', right: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '27%', right: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '5%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '5%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '17%', left: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '17%', right: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '27%', right: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  ];
 
  const awayTeamPositionsVolleyBall = [
    {bottom: '15%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '15%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '30%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '15%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '15%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '30%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  ];
 

  const currentSport =
    stadiumFieldName === 'Basketball'
      ? homeTeamPositionsBasketball
      : stadiumFieldName === 'FootBall'
      ? homeTeamPositionsFootball
      : awayTeamPositionsVolleyBall;


      const joinTeam=async()=>{   
        const userId=await AsyncStorage.getItem("userId")
        try {
            const res=await axios.put(`${BaseUrl}/user/${userId}`,{timeSlotId:timeSlot.id})
            console.log("resss",res);
            navigation.goBack()
        } catch (error) {
          console.log("err",error);
          
        }
      }

      console.log("timeSlot.team",timeSlot.team[0]);
      
  const renderPlayerIcons = (team: any) => {
    return team.map((el: object | any, index: number) => (
      <View key={index} style={el}>
        <PlayerIconSVG color={timeSlot.team[index]?"white":""} size="40" />
        <Text style={{color:"white"}}>{timeSlot.team[index]?timeSlot.team[index].firstName:""}</Text>
      </View>
    ));
  };

  return (
    <ContainerApp>
      <NavigateBack navigation={navigation} headerTitle={'Match Detail'} />
      <MatchDetailContainer>
        <MatchDetailBoardComponent/>
        <FieldStyleContainer>
          {renderPlayerIcons(currentSport)}
          <FieldImage
            source={
              stadiumFieldName === 'basketball'
                ? require('../../../assets/Images/BasketballFieldImage.png')
                : stadiumFieldName === 'footBall'
                ? require('../../../assets/Images/FootballFieldImage.png')
                : require('../../../assets/Images/VolleyballFieldImage.png')
            }
          />
        </FieldStyleContainer>
        <PrimaryButtonComponant
          colorTxtBtn={'white'}
          colorbtn={MatchMatePalette.primaryColor}
          event={joinTeam}
          radius={20}
          titlebtn="Join Team"
          widthPrimaryBtn={'95%'}
        />
      </MatchDetailContainer>
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
});

export default MatchDetailScreen;
