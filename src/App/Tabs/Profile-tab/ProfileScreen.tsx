import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
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
import {usePalette} from '../../../assets/color-palette/ThemeApp';
import GameHistoryIconSVG from '../../../assets/Icons/svg/GameHistoryIconSVG';
import InfoPersoIconSVG from '../../../assets/Icons/svg/InfoPersoIconSVG';
import SettingsIconSVG from '../../../assets/Icons/svg/SettingsIconSVG';
import LogoutIconSVG from '../../../assets/Icons/svg/LogoutIconSVG';
import ProfilePropertyComponent from '../../../Components/ProfileComponents/ProfilePropertyComponent';
import useProfile from './useProfile';
import ReviewsIconSVG from '../../../assets/Icons/svg/ReviewsIconSVG';
import SkeletonHeaderProfileUser from '../../../Components/SkeletonLoadingComponents/SkeletonHeaderProfileUser';
import InfoIconSVG from "../../../assets/Icons/svg/InfoIconSVG"
const ProfileScreen = ({navigation}: any) => {
  const {userData, signOut, gameHistory} = useProfile(navigation);
  const palette = usePalette();

  return (
    <ContainerApp palette={palette}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.primaryColor}
      />
      <TextHeader palette={palette}>Profile</TextHeader>
      <TouchableOpacity style={{position:"absolute",top:25,right:20}} onPress={()=>{navigation.navigate('Settings')}}>
          <SettingsIconSVG color={palette.whiteColor} />
          </TouchableOpacity>
      {userData?.image ? (
        <ProfileHeaderContainer palette={palette}>
          <ImageProfile palette={palette} source={{uri: userData.image}} />

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
            propertyText="Personal information"
            icon={<InfoPersoIconSVG color={palette.secondaryTextColor} />}
            toNavigate={() => {
              navigation.navigate('EditProfile');
            }}
          />
         
          <LineSperator palette={palette}></LineSperator>
          <ProfilePropertyComponent
            propertyText="Your reviews"
            icon={<ReviewsIconSVG color={palette.secondaryTextColor} />}
            toNavigate={() => {
              navigation.navigate('Reviews');
            }}
          />
          <LineSperator palette={palette}></LineSperator>
          <ProfilePropertyComponent
            propertyText="Game history"
            icon={<GameHistoryIconSVG color={palette.secondaryTextColor} />}
            toNavigate={() => {
              navigation.navigate('GameHistory', {user: userData, gameHistory});
            }}
          />
          <LineSperator palette={palette}></LineSperator>
          <ProfilePropertyComponent
            propertyText="Log out"
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
