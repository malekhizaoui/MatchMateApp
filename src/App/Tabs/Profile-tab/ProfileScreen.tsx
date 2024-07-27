import React,{useContext, useEffect, useState} from 'react';
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
import { AuthContext } from '../../../services/Context/AuthContext';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import GameHistoryIconSVG from '../../../assets/Icons/svg/GameHistoryIconSVG';
import InfoPersoIconSVG from '../../../assets/Icons/svg/InfoPersoIconSVG';
import SettingsIconSVG from '../../../assets/Icons/svg/SettingsIconSVG';
import LogoutIconSVG from '../../../assets/Icons/svg/LogoutIconSVG';
import ProfilePropertyComponent from '../../../Components/ProfileComponents/ProfilePropertyComponent';
import useProfile from './useProfile';
import ReviewsIconSVG from '../../../assets/Icons/svg/ReviewsIconSVG';
import SkeletonHeaderProfileUser from '../../../Components/SkeletonLoadingComponents/SkeletonHeaderProfileUser';
const ProfileScreen = ({navigation}: any) => {
const {userData,signOut}=useProfile(navigation)
const palette = usePalette();

  return (
    <ContainerApp palette={palette}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.primaryColor}
      />
      <TextHeader palette={palette}>Profile</TextHeader>
      {userData?.image?(<ProfileHeaderContainer palette={palette}>
        <ImageProfile palette={palette}
          source={{uri:userData.image}}/>

        <HeaderTitleContainer>
          <TextNameProfile palette={palette}>{userData?.firstName} {userData?.lastName}</TextNameProfile>
          <TextNameProfile palette={palette}>{userData?.email}</TextNameProfile>
        </HeaderTitleContainer>
      </ProfileHeaderContainer>):<SkeletonHeaderProfileUser/>}
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
            propertyText="Settings"
            icon={<SettingsIconSVG color={palette.secondaryTextColor} />}
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
              navigation.navigate('GameHistory');
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

        {/* <TouchableOpacity style={{backgroundColor:palette.primaryColor,width:'70%',height:50,display:"flex",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                <Text  style={{
                  fontSize: 16,
                  color: '${palette.whiteColor}',
                  fontWeight: '600',
                }}>Logout</Text>
                </TouchableOpacity> */}
      </ProfilePropertiesContainer>
    </ContainerApp>
  );
};

export default ProfileScreen;
