import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
} from 'react-native';
import {
  ContainerApp,
  TextHeader,
  TextNameLeader,
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
import { MatchMatePalette } from '../../../assets/color-palette';
import KingIconSVG from '../../../assets/Icons/svg/KingIconSVG';
import FirstPlaceIconSVG from '../../../assets/Icons/svg/FirstPlaceIconSVG';
import SecondPlaceIconSVG from '../../../assets/Icons/svg/SecondPlaceIconSVG';
import ThirdPlaceIconSVG from '../../../assets/Icons/svg/ThirdPlaceIconSVG';
import PointsIconSVG from '../../../assets/Icons/svg/PointsIconSVG';
import UserLeaderCardComponent from '../../../Components/LeaderBoardComponents/UserLeaderCardComponent';
import { User } from '../../models/User';
import { handleRequests } from '../../../services/HandleRequests';
import SkeletonHeaderLeaderBoard from '../../../Components/SkeletonLoadingComponents/SkeletonHeaderLeaderBoard';
import SkeletonLeaderBoardCard from '../../../Components/SkeletonLoadingComponents/SkeletonLeaderBoardCard';

const LeaderBoardScreen = ({ navigation }: any) => {
  const [profileHovered, setProfileHovered] = useState<number | null>(null);
  const [usersRank, setUsersRank] = useState<User[] >([]);

  const getAllRankedUsers = async () => {
    try {
      const res = await handleRequests('get','users');
      const sortedUser = displayUsersByGameHistories(res.data);
      setUsersRank(sortedUser);
    } catch (error) {
      console.log("error", error);
    }
  };

  const displayUsersByGameHistories = (users: User[]) => {
    const sortedUsers = users.sort((a, b) => b.gameHistories.length - a.gameHistories.length);
    return sortedUsers;
  };

  useEffect(() => {
    getAllRankedUsers();
  }, []);

   
 

  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <TextHeader>LeaderBoard</TextHeader>
      <LeaderHeaderContainer>
        {usersRank.length>0 ?usersRank[0] && (
          <ConatinerLeaders>
            <UserConatinerLeaders>
              <ImageLeader
                source={{
                  uri: usersRank[0].image,
                }}
              />
              <KingIconSVG />
              <FirstPlaceIconSVG color={MatchMatePalette.lightBackgroundColor} />
            </UserConatinerLeaders>
            <UserConatinerLeaders></UserConatinerLeaders>
            <HeaderTitleContainer>
              <TextNameLeader>{usersRank[0].firstName} {usersRank[0].lastName}</TextNameLeader>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <PointsIconSVG color={MatchMatePalette.darkBackgroundColor} />
                <TextPointLeader> {usersRank[0].gameHistories.length} pts</TextPointLeader>
              </View>
            </HeaderTitleContainer>
          </ConatinerLeaders>
        ):(<ConatinerLeaders>
          <UserConatinerLeaders>
          <SkeletonHeaderLeaderBoard/>
          </UserConatinerLeaders>
        </ConatinerLeaders>)}

        {usersRank.length>0 ?usersRank[1] && (
          <UserConatinerLeadersA>
            <ImageLeaderA
              source={{
                uri: usersRank[1].image,
              }}
            />
            <SecondPlaceIconSVG color={MatchMatePalette.lightBackgroundColor} />
            <HeaderTitleContainer>
              <TextNameLeader>{usersRank[1].firstName} {usersRank[1].lastName}</TextNameLeader>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <PointsIconSVG color={MatchMatePalette.darkBackgroundColor} />
                <TextPointLeader> {usersRank[1].gameHistories.length} pts</TextPointLeader>
              </View>
            </HeaderTitleContainer>
          </UserConatinerLeadersA>
        ):(<UserConatinerLeadersA>
          {/* <UserConatinerLeaders> */}
          <SkeletonHeaderLeaderBoard/>
          {/* </UserConatinerLeaders> */}
        </UserConatinerLeadersA>)}

        {usersRank.length>0?usersRank[2] && (
          <UserConatinerLeadersB>
            <ImageLeaderA
              source={{
                uri: usersRank[2].image,
              }}
            />
            <ThirdPlaceIconSVG color={MatchMatePalette.lightBackgroundColor} />
            <HeaderTitleContainer>
              <TextNameLeader>{usersRank[2].firstName} {usersRank[2].lastName}</TextNameLeader>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <PointsIconSVG color={MatchMatePalette.darkBackgroundColor} />
                <TextPointLeader> {usersRank[2].gameHistories.length} pts</TextPointLeader>
              </View>
            </HeaderTitleContainer>
          </UserConatinerLeadersB>
        ):(<UserConatinerLeadersB>
          {/* <UserConatinerLeaders> */}
          <SkeletonHeaderLeaderBoard/>
          {/* </UserConatinerLeaders> */}
        </UserConatinerLeadersB>)}
      </LeaderHeaderContainer>

      <LeaderPropertiesContainer
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <LeaderPropertyContent>
          {usersRank.length>0?usersRank.slice(3).map((el, i) => {
            return (
              <UserLeaderCardComponent
                key={i} // Adjusted key to ensure unique keys
                rank={i} // Adjust rank to reflect starting from the fourth user
                user={el}
                event={() => {
                  setProfileHovered(el.id);
                }}
                profileHovered={profileHovered}
              />
            );
          }):([1,2,3,4,5,6,7,8,9].map((item,index)=><View key={index} style={{marginTop:20}}><SkeletonLeaderBoardCard/></View>))}
        </LeaderPropertyContent>
      </LeaderPropertiesContainer>
    </ContainerApp>
  );

};

export default LeaderBoardScreen;
