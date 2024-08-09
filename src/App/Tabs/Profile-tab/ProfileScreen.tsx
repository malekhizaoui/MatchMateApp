import React, { useContext } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {
  ContainerApp,
  TextHeader,
  TextNameProfile,
  LineSperator,
  ProfileHeaderContainer,
  ImageProfile,
  HeaderTitleContainer,
  ProfilePropertiesContainer,
  ProfilePropertyContent,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import GameHistoryIconSVG from '../../../assets/Icons/svg/GameHistoryIconSVG';
import InfoPersoIconSVG from '../../../assets/Icons/svg/InfoPersoIconSVG';
import SettingsIconSVG from '../../../assets/Icons/svg/SettingsIconSVG';
import LogoutIconSVG from '../../../assets/Icons/svg/LogoutIconSVG';
import ProfilePropertyComponent from '../../../Components/ProfileComponents/ProfilePropertyComponent';
import useProfile from './useProfile';
import ReviewsIconSVG from '../../../assets/Icons/svg/ReviewsIconSVG';
import SkeletonHeaderProfileUser from '../../../Components/SkeletonLoadingComponents/SkeletonHeaderProfileUser';
import { AuthContext } from '../../../services/Context/AuthContext';
import { useTranslation } from 'react-i18next';

const ProfileScreen = ({ navigation }: any) => {
  const { userData, signOut, gameHistory } = useProfile(navigation);
  const palette = usePalette();
  const { lightModeStatus } = useContext(AuthContext);
  const { t } = useTranslation(); // Use the useTranslation hook
  const colorScheme=useColorScheme()
  
  return (
    <ContainerApp palette={palette}>
      <StatusBar
        barStyle={
          lightModeStatus
            ? lightModeStatus === 'light'
              ? 'dark-content'
              : 'light-content'
            : colorScheme === 'light'
            ? 'dark-content'
            : 'light-content'
        }
        backgroundColor={palette.darkBackgroundColor}
      />
      <TextHeader palette={palette}>{t('profile.profile.header')}</TextHeader>
      <TouchableOpacity style={{ position: "absolute", top: 25, right: 20 }} onPress={() => { navigation.navigate('Settings') }}>
        <SettingsIconSVG color={palette.whiteColor} />
      </TouchableOpacity>
      {userData?.image ? (
        <ProfileHeaderContainer palette={palette}>
          <ImageProfile palette={palette} source={{ uri: userData.image }} />
          <HeaderTitleContainer>
            <TextNameProfile palette={palette}>
              {userData?.firstName} {userData?.lastName}
            </TextNameProfile>
            <TextNameProfile palette={palette}>
              {userData?.email}
            </TextNameProfile>
          </HeaderTitleContainer>
        </ProfileHeaderContainer>
      ) : (
        <SkeletonHeaderProfileUser />
      )}
      <ProfilePropertiesContainer palette={palette}>
        <ProfilePropertyContent>
          <ProfilePropertyComponent
            propertyText={t('profile.profile.personalInfo')}
            icon={<InfoPersoIconSVG color={palette.secondaryTextColor} />}
            toNavigate={() => {
              navigation.navigate('EditProfile');
            }}
          />
          <LineSperator palette={palette}></LineSperator>
          <ProfilePropertyComponent
            propertyText={t('profile.profile.reviews')}
            icon={<ReviewsIconSVG color={palette.secondaryTextColor} />}
            toNavigate={() => {
              navigation.navigate('Reviews');
            }}
          />
          <LineSperator palette={palette}></LineSperator>
          <ProfilePropertyComponent
            propertyText={t('profile.profile.gameHistory')}
            icon={<GameHistoryIconSVG color={palette.secondaryTextColor} />}
            toNavigate={() => {
              navigation.navigate('GameHistory', { user: userData, gameHistory });
            }}
          />
          <LineSperator palette={palette}></LineSperator>
          <ProfilePropertyComponent
            propertyText={t('profile.profile.logout')}
            icon={<LogoutIconSVG color={palette.secondaryTextColor} />}
            toNavigate={signOut}
          />
          <LineSperator palette={palette}></LineSperator>
        </ProfilePropertyContent>
      </ProfilePropertiesContainer>
    </ContainerApp>
  );
};

export default ProfileScreen;
