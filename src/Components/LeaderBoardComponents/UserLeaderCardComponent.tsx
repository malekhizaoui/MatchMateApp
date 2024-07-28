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
import {palette} from '../../assets/color-palette';
import {User} from '../../App/models/User';
import {usePalette} from '../../assets/color-palette/ThemeApp';

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
  profileHovered,
}: UserLeaderCardComponentProps) => {
  const palette = usePalette();
  return (
    <ContainerRankBoard
      palette={palette}
      backgroundColor={
        profileHovered === user.id
          ? palette.secondaryColor
          : palette.darkBackgroundColor
      }
      onPress={() => {
        event();
      }}>
      <ImageRankContainer>
        <TextNameLeader palette={palette}>{rank + 4}</TextNameLeader>
        <ImageUser
          source={{
            uri: user.image,
          }}
        />
        <TextNameLeader palette={palette}>
          {user.firstName} {user.lastName}
        </TextNameLeader>
      </ImageRankContainer>
      <TextPointLeader palette={palette}>
        {user.gameHistories.length} pts
      </TextPointLeader>
    </ContainerRankBoard>
  );
};

export default UserLeaderCardComponent;
