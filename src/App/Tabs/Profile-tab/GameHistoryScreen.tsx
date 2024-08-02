import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ContainerApp,
  TextNameProfile,
  ProfileHeaderContainer,
  ImageProfile,
  GameHistoryHeaderContainer,
  GameHistoryPropertiesContainer,
  GamePropertyContent,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';
import useProfile from './useProfile';
import GameHistoryCardComponent from '../../../Components/ProfileComponents/GameHistoryCardComponent';
import SkeletonBookingCard from '../../../Components/SkeletonLoadingComponents/SkeletonBookingCard';

const GameHistoryScreen = ({ navigation, route }: any) => {
  const { userData, gameHistory, loadMoreGameHistory, isLoading } = useProfile(navigation); // Add isLoading from useProfile
  const palette = usePalette();
  const { user } = route.params;

  return (
    <ContainerApp palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Game history'}
        color={palette.darkBackgroundColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.primaryColor}
      />
      <ProfileHeaderContainer palette={palette}>
        <ImageProfile palette={palette}
          source={
            user.image
              ? { uri: user.image }
              : require('../../../assets/Images/userAnonymousImage.png')
          }></ImageProfile>

        <GameHistoryHeaderContainer palette={palette}>
          <TextNameProfile palette={palette}>
            {user.firstName} {user.lastName}
          </TextNameProfile>
          <TextNameProfile palette={palette}>{user?.email}</TextNameProfile>
        </GameHistoryHeaderContainer>
      </ProfileHeaderContainer>
      <GameHistoryPropertiesContainer palette={palette}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <GamePropertyContent style={{ alignContent: "center" }}>
          {isLoading ? (
            [1, 2, 3, 4].map((_, index) => (
              <View
                key={index}
                style={{ width: '90%', marginBottom: 10, height: 260 }}>
                <SkeletonBookingCard />
              </View>
            ))
          ) : gameHistory && gameHistory.length > 0 ? (
            gameHistory.map((game, index) => (
              <GameHistoryCardComponent
                key={index}
                navigation={navigation}
                gameHistory={game}
                gameHistoryId={game.id}
              />
            ))
          ) : (
            <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                marginTop: 50,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: palette.secondaryTextColor,
                  fontWeight: '600',
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                No Game History Yet
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: palette.secondaryTextColor,
                  marginTop: 10,
                  textAlign: 'center',
                  paddingHorizontal: 20,
                }}>
                You haven't played any games yet. Start exploring our stadiums and book your favorite time slot now!
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  backgroundColor: palette.primaryColor,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}
                onPress={() => navigation.navigate('HomeTab', { Screen: "Home" })}
              >
                <Text style={{ color: 'white', fontSize: 16 }}>Explore Stadiums</Text>
              </TouchableOpacity>
            </View>
          )}
          {!isLoading && gameHistory && gameHistory.length > 0 && gameHistory.length % 4 === 0 && (
            <TouchableOpacity onPress={loadMoreGameHistory}>
              <Text style={{ color: palette.primaryColor, marginBottom: 60, fontSize: 18, fontWeight: "600" }}>More detail...</Text>
            </TouchableOpacity>
          )}
        </GamePropertyContent>
      </GameHistoryPropertiesContainer>
    </ContainerApp>
  );
};

export default GameHistoryScreen;
