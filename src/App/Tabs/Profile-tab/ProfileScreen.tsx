import React from 'react';
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
import {MatchMatePalette} from '../../../assets/color-palette';
import GameHistoryIconSVG from '../../../assets/Icons/svg/GameHistoryIconSVG';
import InfoPersoIconSVG from '../../../assets/Icons/svg/InfoPersoIconSVG';
import SettingsIconSVG from '../../../assets/Icons/svg/SettingsIconSVG';
import LogoutIconSVG from '../../../assets/Icons/svg/LogoutIconSVG';
import ProfilePropertyComponent from '../../../Components/ProfileComponents/ProfilePropertyComponent';
const ProfileScreen = ({navigation}: any) => {
  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <TextHeader>Profile</TextHeader>
      <ProfileHeaderContainer>
        <ImageProfile
          source={require('../../../assets/Images/yasmine.jpg')}></ImageProfile>

        <HeaderTitleContainer>
          <TextNameProfile>Yasmine ghali</TextNameProfile>
          <TextNameProfile>YasmineGhali@gmail.com</TextNameProfile>
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
              navigation.navigate('EditProfile');
            }}
          />
          <LineSperator></LineSperator>
          <ProfilePropertyComponent
            propertyText="Log out"
            icon={<LogoutIconSVG color={MatchMatePalette.primaryColor} />}
            toNavigate={() => {
              navigation.navigate('EditProfile');
            }}
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
