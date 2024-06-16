import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  TextPointLeader,
  TextNameLeader,
  ImageUser,
  ImageRankContainer,
  ContainerRankBoard,
} from './StyledComponent/styledComponent';
import {MatchMatePalette} from '../../assets/color-palette';
import { User } from '../../App/models/User';

interface UserLeaderCardComponentProps {
  rank: number;
  user: User;
  backgroundColor?: string;
  event: any;
  profileHovered: any;
}

const UserLeaderCardComponent = ({
  rank,
  user,
  backgroundColor,
  event,
  profileHovered
}: UserLeaderCardComponentProps) => {
  return (
    <ContainerRankBoard
      backgroundColor={
        profileHovered===user.id
          ? MatchMatePalette.secondaryColor
          : MatchMatePalette.darkBackgroundColor
      }
      onPress={() => {
        event();
      }}>
      <ImageRankContainer>
        <TextNameLeader>{rank + 4}</TextNameLeader>
        <ImageUser
          source={{
            uri: user.image,
          }}
        />
        <TextNameLeader>{user.firstName} {user.lastName}</TextNameLeader>
      </ImageRankContainer>
      <TextPointLeader>{user.gameHistories.length} pts</TextPointLeader>
    </ContainerRankBoard>
  );
};

export default UserLeaderCardComponent;
