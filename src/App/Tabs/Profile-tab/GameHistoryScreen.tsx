import React from 'react';
import {
  StatusBar,
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
const GameHistoryScreen = ({navigation}: any) => {
  const {userData, gameHistory} = useProfile(navigation);
  const palette = usePalette();

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
            userData?.image
              ? {uri: userData.image}
              : require('../../../assets/Images/userAnonymousImage.png')
          }></ImageProfile>

        <GameHistoryHeaderContainer palette={palette}>
          <TextNameProfile palette={palette}>
            {userData?.firstName} {userData?.lastName}
          </TextNameProfile>
          <TextNameProfile palette={palette}>{userData?.email}</TextNameProfile>
        </GameHistoryHeaderContainer>
      </ProfileHeaderContainer>
      <GameHistoryPropertiesContainer palette={palette}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <GamePropertyContent style={{alignContent:"center"}}>
            {gameHistory?.map((gameHistory,index)=>{
                return (
                    <GameHistoryCardComponent
                 key={index}
                 navigation={navigation}
                 gameHistory={gameHistory}
                 gameHistoryId={gameHistory.id}
                //  stadium={stadium}
            />
                )
            })}
        </GamePropertyContent>
      </GameHistoryPropertiesContainer>
    </ContainerApp>
  );
};

export default GameHistoryScreen;
