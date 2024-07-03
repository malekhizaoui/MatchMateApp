import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';
import { GameHistoryDetailContainer, FieldStyleContainer, FieldImage } from './StyledComponent/StyledComponent';
import { MatchMatePalette } from '../../assets/color-palette';

const GameHistoryMatchComponent = ({ team, fieldName }: any) => {
  const TeamPositionsFootball: ViewStyle[] = [
    { top: '5%', left: '45%' }, { top: '15%', left: '10%' }, { top: '15%', right: '10%' },
    { top: '25%', right: '25%' }, { top: '25%', left: '25%' }, { top: '35%', left: '45%' },
    { bottom: '5%', left: '45%' }, { bottom: '15%', left: '10%' }, { bottom: '15%', right: '10%' },
    { bottom: '25%', right: '25%' }, { bottom: '25%', left: '25%' }, { bottom: '35%', left: '45%' },
  ];

  const TeamPositionsBasketball: ViewStyle[] = [
    { top: '5%', left: '20%' }, { top: '5%', right: '20%' }, { top: '17%', left: '25%' },
    { top: '17%', right: '25%' }, { top: '27%', right: '45%' }, { bottom: '5%', left: '20%' },
    { bottom: '5%', right: '20%' }, { bottom: '17%', left: '25%' }, { bottom: '17%', right: '25%' },
    { bottom: '27%', right: '45%' },
  ];

  const TeamPositionsVolleyBall: ViewStyle[] = [
    { bottom: '15%', left: '20%' }, { bottom: '15%', right: '20%' }, { bottom: '30%', left: '45%' },
    { top: '15%', left: '20%' }, { top: '15%', right: '20%' }, { top: '30%', left: '45%' },
  ];

  const currentSport =
    fieldName === 'Basketball' ? TeamPositionsBasketball :
    fieldName === 'FootBall' ? TeamPositionsFootball :
    TeamPositionsVolleyBall;

  const renderPlayerIcons = (players: any) => {
    return currentSport.map((position, index) => (
      <View key={index} style={[styles.playerIcon, position]}>
        <View style={styles.playerIconImageContainer}>
          <Image
            source={team[index]?.image ? { uri: team[index].image } : require('../../assets/Images/userAnonymousImage.png')}
            style={styles.playerIconImage}
          />
        </View>
        <Text style={styles.playerIconText}>
          {team[index]?.firstName || ''}
        </Text>
      </View>
    ));
  };

  return (
    <GameHistoryDetailContainer>
      <FieldStyleContainer>
        {renderPlayerIcons(team)}
        <FieldImage
          source={
            fieldName === 'Basketball'
              ? require('../../assets/Images/BasketballFieldImage.png')
              : fieldName === 'FootBall'
              ? require('../../assets/Images/FootballFieldImage.png')
              : require('../../assets/Images/VolleyballFieldImage.png')
          }
        />
      </FieldStyleContainer>
    </GameHistoryDetailContainer>
  );
};

const styles = StyleSheet.create({
  playerIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
    zIndex:9999
  },
  playerIconImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: MatchMatePalette.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerIconImage: {
    width: 48,
    height: 48,
    borderRadius: 25,
  },
  playerIconText: {
    color: MatchMatePalette.whiteColor,
  },
});

export default GameHistoryMatchComponent;
