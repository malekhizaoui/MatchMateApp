import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();  // i18next hook
  const { userData, gameHistory, loadMoreGameHistory, isLoading } = useProfile(navigation);
  const palette = usePalette();
  const { user } = route.params;

  return (
    <ContainerApp palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={t('profile.gameHistory.header')}
        color={palette.darkBackgroundColor}
      />
      
      <ProfileHeaderContainer palette={palette}>
        <ImageProfile
          palette={palette}
          source={
            user.image
              ? { uri: user.image }
              : require('../../../assets/Images/userAnonymousImage.png')
          }
        />
        <GameHistoryHeaderContainer palette={palette}>
          <TextNameProfile palette={palette}>
            {user.firstName} {user.lastName}
          </TextNameProfile>
          <TextNameProfile palette={palette}>{user?.email}</TextNameProfile>
        </GameHistoryHeaderContainer>
      </ProfileHeaderContainer>
      <GameHistoryPropertiesContainer
        palette={palette}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
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
                {t('profile.gameHistory.noGameHistory')}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: palette.secondaryTextColor,
                  marginTop: 10,
                  textAlign: 'center',
                  paddingHorizontal: 20,
                }}>
                {t('profile.gameHistory.noGameHistoryDetail')}
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
                <Text style={{ color: 'white', fontSize: 16 }}>{t('profile.gameHistory.exploreStadiums')}</Text>
              </TouchableOpacity>
            </View>
          )}
          {!isLoading && gameHistory && gameHistory.length > 0 && gameHistory.length % 4 === 0 && (
            <TouchableOpacity onPress={loadMoreGameHistory}>
              <Text style={{ color: palette.primaryColor, marginBottom: 60, fontSize: 18, fontWeight: "600" }}>
                {t('profile.gameHistory.moreDetail')}
              </Text>
            </TouchableOpacity>
          )}
        </GamePropertyContent>
      </GameHistoryPropertiesContainer>
    </ContainerApp>
  );
};

export default GameHistoryScreen;
