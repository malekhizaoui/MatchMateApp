import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
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
import axios from 'axios';
import BaseUrl from '../../../services/BaseUrl';
import { User } from '../../models/User';

const LeaderBoardScreen = ({ navigation }: any) => {
  const [profileHovered, setProfileHovered] = useState<number | null>(null);
  const [usersRank, setUsersRank] = useState<User[] | null>(null);

  const getAllRankedUsers = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/users`);
      const sortedUser = displayUsersByGameHistories(res.data.data);
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

  if (!usersRank) {
    return (
      <ContainerApp>
        <Text>Loading...</Text>
      </ContainerApp>
    );
  }

  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <TextHeader>LeaderBoard</TextHeader>
      <LeaderHeaderContainer>
        {usersRank[0] && (
          <ConatinerLeaders>
            <UserConatinerLeaders>
              <ImageLeader
                source={{
                  uri: usersRank[0].image,
                }}
              />
              <KingIconSVG />
              <FirstPlaceIconSVG color="#262626" />
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
        )}

        {usersRank[1] && (
          <UserConatinerLeadersA>
            <ImageLeaderA
              source={{
                uri: usersRank[1].image,
              }}
            />
            <SecondPlaceIconSVG color="#262626" />
            <HeaderTitleContainer>
              <TextNameLeader>{usersRank[1].firstName} {usersRank[1].lastName}</TextNameLeader>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <PointsIconSVG color={MatchMatePalette.darkBackgroundColor} />
                <TextPointLeader> {usersRank[1].gameHistories.length} pts</TextPointLeader>
              </View>
            </HeaderTitleContainer>
          </UserConatinerLeadersA>
        )}

        {usersRank[2] && (
          <UserConatinerLeadersB>
            <ImageLeaderA
              source={{
                uri: usersRank[2].image,
              }}
            />
            <ThirdPlaceIconSVG color="#262626" />
            <HeaderTitleContainer>
              <TextNameLeader>{usersRank[2].firstName} {usersRank[2].lastName}</TextNameLeader>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <PointsIconSVG color={MatchMatePalette.darkBackgroundColor} />
                <TextPointLeader> {usersRank[2].gameHistories.length} pts</TextPointLeader>
              </View>
            </HeaderTitleContainer>
          </UserConatinerLeadersB>
        )}
      </LeaderHeaderContainer>

      <LeaderPropertiesContainer
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <LeaderPropertyContent>
          {usersRank.slice(3).map((el, i) => {
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
          })}
        </LeaderPropertyContent>
      </LeaderPropertiesContainer>
    </ContainerApp>
  );
};

export default LeaderBoardScreen;
