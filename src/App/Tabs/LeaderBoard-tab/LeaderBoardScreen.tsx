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
  TextNameLeader,
  LineSperator,
  LeaderHeaderContainer,
  ImageLeader,
  HeaderTitleContainer,
  LeaderPropertiesContainer,
  LeaderPropertyContent,
  UserConatinerLeadersA,
  UserConatinerLeadersB,
  UserConatinerLeaders,
  ImageLeaderA,
  ConatinerLeaders,
  TextPointLeader,
} from './StyleComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import KingIconSVG from '../../../assets/Icons/svg/KingIconSVG';
import FirstPlaceIconSVG from '../../../assets/Icons/svg/FirstPlaceIconSVG';
import SecondPlaceIconSVG from '../../../assets/Icons/svg/SecondPlaceIconSVG';
import ThirdPlaceIconSVG from '../../../assets/Icons/svg/ThirdPlaceIconSVG';
import PointsIconSVG from '../../../assets/Icons/svg/PointsIconSVG';
import UserLeaderCardComponent from '../../../Components/LeaderBoardComponents/UserLeaderCardComponent';
const LeaderBoardScreen = ({navigation}: any) => {
  const [profileHoveres, setProfileHovered] = useState("");

  const names = [
    "Alice Smith",
    "Bob Johnson",
    "Charlie Williams",
    "David Brown",
    "Eve Jones",
    "Frank Garcia",
    "Grace Miller",
    "Heidi Davis",
    "Ivan Wilson"
  ];  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <TextHeader>LeaderBoard</TextHeader>
      <LeaderHeaderContainer>
        <ConatinerLeaders>
          <UserConatinerLeaders>
            <ImageLeader
              source={{uri:"https://media.licdn.com/dms/image/D4E03AQF9mGOMHjgeFw/profile-displayphoto-shrink_800_800/0/1691514563140?e=2147483647&v=beta&t=Dtl8CXMfr032HwoVz3eo6slKJ-KUKFzGAocaqZMnvIw"}}
            />
            <KingIconSVG />
            <FirstPlaceIconSVG color="#262626" />
          </UserConatinerLeaders>
          <UserConatinerLeaders></UserConatinerLeaders>
          <HeaderTitleContainer>
            <TextNameLeader>Yasmine Ghali</TextNameLeader>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <PointsIconSVG color={MatchMatePalette.darkBackgroundColor} />
              <TextPointLeader> 60 pts</TextPointLeader>
            </View>
          </HeaderTitleContainer>
        </ConatinerLeaders>

        <UserConatinerLeadersA>
          <ImageLeaderA
            source={{uri:"https://media.licdn.com/dms/image/D4E03AQF9mGOMHjgeFw/profile-displayphoto-shrink_800_800/0/1691514563140?e=2147483647&v=beta&t=Dtl8CXMfr032HwoVz3eo6slKJ-KUKFzGAocaqZMnvIw"}}></ImageLeaderA>
          <SecondPlaceIconSVG color="#262626" />
          <HeaderTitleContainer>
            <TextNameLeader>Yasmine Ghali</TextNameLeader>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <PointsIconSVG color={MatchMatePalette.darkBackgroundColor} />
              <TextPointLeader> 50 pts</TextPointLeader>
            </View>
          </HeaderTitleContainer>
        </UserConatinerLeadersA>

        <UserConatinerLeadersB>
          <ImageLeaderA
            source={{uri:"https://media.licdn.com/dms/image/D4E03AQF9mGOMHjgeFw/profile-displayphoto-shrink_800_800/0/1691514563140?e=2147483647&v=beta&t=Dtl8CXMfr032HwoVz3eo6slKJ-KUKFzGAocaqZMnvIw"}}></ImageLeaderA>
          <ThirdPlaceIconSVG color="#262626" />
          <HeaderTitleContainer>
            <TextNameLeader>Yasmine Ghali</TextNameLeader>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <PointsIconSVG color={MatchMatePalette.darkBackgroundColor} />
              <TextPointLeader> 46 pts</TextPointLeader>
            </View>
          </HeaderTitleContainer>
        </UserConatinerLeadersB>
      </LeaderHeaderContainer>

      <LeaderPropertiesContainer contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <LeaderPropertyContent >
          {names.map((el,i)=>{
            return(
              <UserLeaderCardComponent key={i} rank={i} name={el} event={()=>{setProfileHovered(el)}} profileHoveres={profileHoveres}/>

            )
          })}
       
        </LeaderPropertyContent>
      </LeaderPropertiesContainer>
    </ContainerApp>
  );
};

export default LeaderBoardScreen;
