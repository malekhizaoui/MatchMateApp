import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { ContainerAppDetailGame, ContainerDetailScreen,TextNameProfile } from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';
import { GameHistory } from '../../models/GameHistory';
import ImageSlideComponent from '../../../Components/HomeComponents/ImageSlideComponent';
import GameHistoryMatchComponent from '../../../Components/ProfileComponents/GameHistoryMatchComponent';
import { handleRequests } from '../../../services/HandleRequests';

const GameHistoryDetailScreen = ({ navigation, route }: any) => {
  const [gameHistoryDetail, setGameHistoryDetail] = useState<GameHistory | null>(null);
  const { gameHistoryId } = route.params;
  const palette = usePalette();

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
    <ContainerAppDetailGame palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Game history detail'}
        color={palette.primaryColor}
      />
      <ContainerDetailScreen>
        {gameHistoryDetail ? (
          <>
            <TextNameProfile palette={palette}>Stadium : {gameHistoryDetail.stadium.stadiumName}</TextNameProfile>
             <ImageSlideComponent stadium={gameHistoryDetail.stadium} />
             <TextNameProfile palette={palette}>Match detail</TextNameProfile>

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
