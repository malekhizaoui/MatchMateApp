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
import {MatchMatePalette} from '../../../assets/color-palette';
import GameHistoryIconSVG from '../../../assets/Icons/svg/GameHistoryIconSVG';
import InfoPersoIconSVG from '../../../assets/Icons/svg/InfoPersoIconSVG';
import SettingsIconSVG from '../../../assets/Icons/svg/SettingsIconSVG';
import LogoutIconSVG from '../../../assets/Icons/svg/LogoutIconSVG';
import ProfilePropertyComponent from '../../../Components/ProfileComponents/ProfilePropertyComponent';
import useProfile from './useProfile';
const ProfileScreen = ({navigation}: any) => {
const {userData,signOut}=useProfile(navigation)
  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <TextHeader>Profile</TextHeader>
      <ProfileHeaderContainer>
        <ImageProfile
          source={
            userData?.image?{uri:userData.image}:require('../../../assets/Images/userAnonymousImage.png')
            // {uri:"https://media.licdn.com/dms/image/D4E03AQF9mGOMHjgeFw/profile-displayphoto-shrink_800_800/0/1691514563140?e=2147483647&v=beta&t=Dtl8CXMfr032HwoVz3eo6slKJ-KUKFzGAocaqZMnvIw"}
            }/>

        <HeaderTitleContainer>
          <TextNameProfile>{userData?.firstName} {userData?.lastName}</TextNameProfile>
          <TextNameProfile>{userData?.email}</TextNameProfile>
        </HeaderTitleContainer>
      </ProfileHeaderContainer>
      <ProfilePropertiesContainer>
        <ProfilePropertyContent>
          <ProfilePropertyComponent
            propertyText="Personal information"
            icon={<InfoPersoIconSVG color={MatchMatePalette.primaryColor} />}
            toNavigate={() => {
              navigation.navigate('EditProfile');
            }}
          />
          <LineSperator></LineSperator>
          <ProfilePropertyComponent
            propertyText="Settings"
            icon={<SettingsIconSVG color={MatchMatePalette.primaryColor} />}
            toNavigate={() => {
              navigation.navigate('EditProfile');
            }}
          />
          <LineSperator></LineSperator>
          <ProfilePropertyComponent
            propertyText="Game history"
            icon={<GameHistoryIconSVG color={MatchMatePalette.primaryColor} />}
            toNavigate={() => {
              navigation.navigate('GameHistory');
            }}
          />
          <LineSperator></LineSperator>
          <ProfilePropertyComponent
            propertyText="Log out"
            icon={<LogoutIconSVG color={MatchMatePalette.primaryColor} />}
            toNavigate={signOut}
          />
          <LineSperator></LineSperator>
        </ProfilePropertyContent>

        {/* <TouchableOpacity style={{backgroundColor:MatchMatePalette.primaryColor,width:'70%',height:50,display:"flex",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                <Text  style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: '600',
                }}>Logout</Text>
                </TouchableOpacity> */}
      </ProfilePropertiesContainer>
    </ContainerApp>
  );
};

export default ProfileScreen;
