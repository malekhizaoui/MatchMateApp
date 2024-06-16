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
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import useProfile from './useProfile';
import GameHistoryCardComponent from '../../../Components/ProfileComponents/GameHistoryCardComponent';
const GameHistoryScreen = ({navigation}: any) => {
  const {userData, gameHistory} = useProfile(navigation);
  
  return (
    <ContainerApp>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Game history'}
        color={MatchMatePalette.darkBackgroundColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <ProfileHeaderContainer>
        <ImageProfile
          source={
            userData?.image
              ? {uri: userData.image}
              : require('../../../assets/Images/userAnonymousImage.png')
          }></ImageProfile>

        <GameHistoryHeaderContainer>
          <TextNameProfile>
            {userData?.firstName} {userData?.lastName}
          </TextNameProfile>
          <TextNameProfile>{userData?.email}</TextNameProfile>
        </GameHistoryHeaderContainer>
      </ProfileHeaderContainer>
      <GameHistoryPropertiesContainer
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
