import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {
  StadiumContainer,
  StadiumImage,
  StadiumDescription,
  TitleDescription,
  TextDescription,
  StadiumCardContainer,
  ImageContainerCard,
} from './StyledComponent/StyledComponent';
import { Stadium } from '../../App/models/Stadium';
interface StadiumCardMapComponentProps {
  stadium:Stadium,
  navigation:any
}

const StadiumCardMapComponent = ({stadium,navigation}: StadiumCardMapComponentProps) => {
  return (
    <StadiumCardContainer onPress={()=>{navigation.navigate('StadiumDetail',{stadium})}}>
      <ImageContainerCard
        source={{
          uri: stadium.imageURL,
        }}></ImageContainerCard>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop:10
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
            flexWrap: 'wrap',
          }}>
          {stadium.stadiumName}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
            flexWrap: 'wrap',
          }}>
          Sunset evening
        </Text>
      </View>
    </StadiumCardContainer>
  );
};

export default StadiumCardMapComponent;
