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
  Button,Image
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
import PlayerIconSVG from '../../../assets/Icons/svg/PlayerIconSVG';
import PrimaryButtonComponant from '../../../Components/ButtonPrimaryComponent';
import MatchDetailBoardComponent from '../../../Components/HomeComponents/MatchDetailBoardComponent';
import axios from 'axios';
import BaseUrl from '../../../services/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const MatchDetailScreen = ({navigation, route}: any) => {
  const {stadium,timeSlot} = route.params;
  console.log("timeSlot",timeSlot);
  
  const TeamPositionsFootball = [
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

  const TeamPositionsBasketball = [
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
 
  const TeamPositionsVolleyBall = [
    {bottom: '15%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '15%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {bottom: '30%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '15%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '15%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
    {top: '30%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  ];
 

  const currentSport =
    stadium.field.fieldName === 'Basketball'
      ? TeamPositionsBasketball
      : stadium.field.fieldName === 'FootBall'
      ? TeamPositionsFootball
      : TeamPositionsVolleyBall;


      const joinTeam=async()=>{   
        const userId=await AsyncStorage.getItem("userId")
        try {
            const res=await axios.put(`${BaseUrl}/user/${userId}`,{timeSlotId:timeSlot.id})
            navigation.goBack()
        } catch (error) {
          console.log("err",error);
          
        }
      }

      
  const renderPlayerIcons = (team: any) => {
    return team.map((el: object | any, index: number) => (
      <View key={index} style={el}>
        {/* <PlayerIconSVG color={timeSlot.team[index]?"white":""} size="40" /> */}
        <View style={{width:50,height:50,borderRadius:25,borderWidth:2,borderColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Image source={timeSlot.team[index]?.image?{uri:timeSlot.team[index].image}:require('../../../assets/Images/userAnonymousImage.png')} style={{width:48,height:48,borderRadius:25}}/>
        </View>
        <Text style={{color:"white"}}>{timeSlot.team[index]?timeSlot.team[index].firstName:""}</Text>
      </View>
    ));
  };

  return (
    <ContainerApp>
      <NavigateBack navigation={navigation} headerTitle={'Match Detail'} />
      <MatchDetailContainer>
        <MatchDetailBoardComponent stadium={stadium} timeSlot={timeSlot}/>
        <FieldStyleContainer>
          {renderPlayerIcons(currentSport)}
          <FieldImage
            source={
              stadium.field.fieldName === 'basketball'
                ? require('../../../assets/Images/BasketballFieldImage.png')
                : stadium.field.fieldName === 'footBall'
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
