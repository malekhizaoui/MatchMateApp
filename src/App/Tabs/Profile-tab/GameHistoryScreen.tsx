import React from 'react';
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

const GameHistoryScreen = ({ navigation, route }:any) => {
  const { userData, gameHistory, loadMoreGameHistory } = useProfile(navigation);
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
          {
            gameHistory.map((game, index) => (
              <GameHistoryCardComponent
                key={index}
                navigation={navigation}
                gameHistory={game}
                gameHistoryId={game.id}
              />
            ))
          }
          {gameHistory && gameHistory.length % 4 === 0 && (
            <TouchableOpacity onPress={loadMoreGameHistory}>
              <Text style={{ color: palette.primaryColor, marginBottom: 60,fontSize:18,fontWeight:"600" }}>More detail...</Text>
            </TouchableOpacity>
          )}
        </GamePropertyContent>
      </GameHistoryPropertiesContainer>
    </ContainerApp>
  );
};

export default GameHistoryScreen;
