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
export const MatchDetailScreen = ({navigation, route}: any) => {
  const {stadium} = route.params;

  const homeTeamPositionsFootball = [
    {top: '5%', left: '45%', position: 'absolute', zIndex: 999},
    {top: '15%', left: '10%', position: 'absolute', zIndex: 999},
    {top: '15%', right: '10%', position: 'absolute', zIndex: 999},
    {top: '25%', right: '25%', position: 'absolute', zIndex: 999},
    {top: '25%', left: '25%', position: 'absolute', zIndex: 999},
    {top: '35%', left: '45%', position: 'absolute', zIndex: 999},
  ];
  const awayTeamPositionsFootball = [
    {bottom: '5%', left: '45%', position: 'absolute', zIndex: 999},
    {bottom: '15%', left: '10%', position: 'absolute', zIndex: 999},
    {bottom: '15%', right: '10%', position: 'absolute', zIndex: 999},
    {bottom: '25%', right: '25%', position: 'absolute', zIndex: 999},
    {bottom: '25%', left: '25%', position: 'absolute', zIndex: 999},
    {bottom: '35%', left: '45%', position: 'absolute', zIndex: 999},
  ];
  const homeTeamPositionsBasketball = [
    {top: '5%', left: '20%', position: 'absolute', zIndex: 999},
    {top: '5%', right: '20%', position: 'absolute', zIndex: 999},
    {top: '15%', left: '25%', position: 'absolute', zIndex: 999},
    {top: '15%', right: '25%', position: 'absolute', zIndex: 999},
    {top: '25%', right: '45%', position: 'absolute', zIndex: 999},
  ];
  const awayTeamPositionsBasketball = [
    {bottom: '5%', left: '20%', position: 'absolute', zIndex: 999},
    {bottom: '5%', right: '20%', position: 'absolute', zIndex: 999},
    {bottom: '15%', left: '25%', position: 'absolute', zIndex: 999},
    {bottom: '15%', right: '25%', position: 'absolute', zIndex: 999},
    {bottom: '25%', right: '45%', position: 'absolute', zIndex: 999},
  ];
  const awayTeamPositionsVolleyBall = [
    {bottom: '15%', left: '20%', position: 'absolute', zIndex: 999},
    {bottom: '15%', right: '20%', position: 'absolute', zIndex: 999},
    {bottom: '30%', left: '45%', position: 'absolute', zIndex: 999},
  ];
  const homeTeamPositionsVolleyBall = [
    {top: '15%', left: '20%', position: 'absolute', zIndex: 999},
    {top: '15%', right: '20%', position: 'absolute', zIndex: 999},
    {top: '30%', left: '45%', position: 'absolute', zIndex: 999},
  ];

  const currentSport =
    stadium.field === 'basketball'
      ? [homeTeamPositionsBasketball, awayTeamPositionsBasketball]
      : stadium.field === 'footBall'
      ? [homeTeamPositionsFootball, awayTeamPositionsFootball]
      : [awayTeamPositionsVolleyBall, homeTeamPositionsVolleyBall];

  const renderPlayerIcons = (team: any) => {
    return team.map((el: object | any, index: number) => (
      <View key={index} style={el}>
        <PlayerIconSVG color="white" size="40" />
        <Text style={{color:"white"}}>Malek</Text>
      </View>
    ));
  };

  return (
    <ContainerApp>
      <NavigateBack navigation={navigation} headerTitle={'Match Detail'} />
      <MatchDetailContainer>
        <MatchDetailBoardComponent />
        <FieldStyleContainer>
          {renderPlayerIcons(currentSport[0])}
          {renderPlayerIcons(currentSport[1])}
          <FieldImage
            source={
              stadium.field === 'basketball'
                ? require('../../../assets/Images/BasketballFieldImage.png')
                : stadium.field === 'footBall'
                ? require('../../../assets/Images/FootballFieldImage.png')
                : require('../../../assets/Images/VolleyballFieldImage.png')
            }
          />
        </FieldStyleContainer>
        <PrimaryButtonComponant
          colorTxtBtn={'white'}
          colorbtn={MatchMatePalette.primaryColor}
          event={() => {}}
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
