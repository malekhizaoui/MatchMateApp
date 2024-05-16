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

interface StadiumCardMapComponentProps {}

const StadiumCardMapComponent = ({}: StadiumCardMapComponentProps) => {
  return (
    <StadiumCardContainer>
      <ImageContainerCard
        source={{
          uri: 'https://www.geneve.ch/sites/default/files/2022-06/asphalte-ville-geneve-cover-01%281%29.jpg',
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
          Sunset evening
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
