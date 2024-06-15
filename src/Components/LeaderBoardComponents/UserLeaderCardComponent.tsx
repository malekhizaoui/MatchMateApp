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

interface UserLeaderCardComponentProps {
  rank: number;
  name: string;
  backgroundColor?: string;
  event: any;
  profileHoveres: any;
}

const UserLeaderCardComponent = ({
  rank,
  name,
  backgroundColor,
  event,
  profileHoveres
}: UserLeaderCardComponentProps) => {
  return (
    <ContainerRankBoard
      backgroundColor={
        profileHoveres===name
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
            uri: 'https://media.licdn.com/dms/image/D4E03AQF9mGOMHjgeFw/profile-displayphoto-shrink_800_800/0/1691514563140?e=2147483647&v=beta&t=Dtl8CXMfr032HwoVz3eo6slKJ-KUKFzGAocaqZMnvIw',
          }}
        />
        <TextNameLeader>{name}</TextNameLeader>
      </ImageRankContainer>
      <TextPointLeader>36 pts</TextPointLeader>
    </ContainerRankBoard>
  );
};

export default UserLeaderCardComponent;
