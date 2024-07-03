import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { ContainerAppDetailGame, ContainerDetailScreen,TextNameProfile } from './StyledComponent/StyledComponent';
import { MatchMatePalette } from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import { GameHistory } from '../../models/GameHistory';
import ImageSlideComponent from '../../../Components/HomeComponents/ImageSlideComponent';
import GameHistoryMatchComponent from '../../../Components/ProfileComponents/GameHistoryMatchComponent';
import { handleRequests } from '../../../services/HandleRequests';

const GameHistoryDetailScreen = ({ navigation, route }: any) => {
  const [gameHistoryDetail, setGameHistoryDetail] = useState<GameHistory | null>(null);
  const { gameHistoryId } = route.params;

  const getGameHistoryDetail = async () => {
    try {
      const res =await handleRequests('get',`GameHistoryById/${gameHistoryId}`)
      setGameHistoryDetail(res.data);
    } catch (error) {
      console.log('err', error);
    }
  };

  useEffect(() => {
    getGameHistoryDetail();
  }, []);

  return (
    <ContainerAppDetailGame>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Game history detail'}
        color={MatchMatePalette.primaryColor}
      />
      <StatusBar barStyle={'light-content'} backgroundColor={MatchMatePalette.darkBackgroundColor} />
      <ContainerDetailScreen>
        {gameHistoryDetail ? (
          <>
            <TextNameProfile>Stadium : {gameHistoryDetail.stadium.stadiumName}</TextNameProfile>
             <ImageSlideComponent stadium={gameHistoryDetail.stadium} />
             <TextNameProfile>Match detail</TextNameProfile>

            <GameHistoryMatchComponent
              team={gameHistoryDetail.team}
              fieldName={gameHistoryDetail.stadium.field.fieldName}
            />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ContainerDetailScreen>
    </ContainerAppDetailGame>
  );
};

export default GameHistoryDetailScreen;
