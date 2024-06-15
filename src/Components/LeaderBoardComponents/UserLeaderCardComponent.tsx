import React, { useState } from 'react';
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
    ContainerRankBoard
} from './StyledComponent/styledComponent';


interface UserLeaderCardComponentProps {
    rank:number
    name:string
}

const UserLeaderCardComponent = ({
    rank,name
}: UserLeaderCardComponentProps) => {


  return (
    <ContainerRankBoard>
        <ImageRankContainer>
            <TextNameLeader>{rank+4}</TextNameLeader>
            <ImageUser source={{uri:"https://media.licdn.com/dms/image/D4E03AQF9mGOMHjgeFw/profile-displayphoto-shrink_800_800/0/1691514563140?e=2147483647&v=beta&t=Dtl8CXMfr032HwoVz3eo6slKJ-KUKFzGAocaqZMnvIw"}}/>
            <TextNameLeader>{name}</TextNameLeader>
        </ImageRankContainer>
        <TextPointLeader>36 pts</TextPointLeader>
    </ContainerRankBoard>
);  
};

export default UserLeaderCardComponent;
