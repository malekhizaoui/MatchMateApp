import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View,TouchableOpacity} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium,
  ImageContainer,
  StadiumImageContainer,
  NumberOfCourt,
  TitleStadiumName
} from './StyledComponent/StyledComponent';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import { Stadium } from '../../App/models/Stadium';
import { MatchMatePalette } from '../../assets/color-palette';
interface ImageListStadiumComponentProps {
  stadium:Stadium;
  btnClicked: () => void;
}

const ImageListStadiumComponent = ({
  stadium,
  btnClicked,
}: ImageListStadiumComponentProps) => {
  return (
    <TouchableOpacity
    onPress={btnClicked}>
    <ImageContainer>
      <StadiumImageContainer
        source={{
          uri: stadium.imageURL,
        }}></StadiumImageContainer>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: '50%',
          left: 15,
          backgroundColor: 'rgba(0, 0, 0, 0.54)',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          width: '8%',
          height: 30,
          borderRadius: 15,
        }}>
        <PreviousIconSVG color={MatchMatePalette.whiteColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: '50%',
          right: 15,
          backgroundColor: 'rgba(0, 0, 0, 0.54)',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          width: '8%',
          height: 30,
          borderRadius: 15,
        }}>
        <NextIconSVG color={MatchMatePalette.whiteColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 10,
          right: 15,
          backgroundColor: 'rgba(0, 0, 0, 0.54)',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          width: '8%',
          height: 18,
          borderRadius: 5,
        }}>
        <NumberOfCourt>1/4</NumberOfCourt>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 10,
          left: 15,
          backgroundColor: 'rgba(0, 0, 0, 0.54)',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          width: '18%',
          height: 32,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: MatchMatePalette.whiteColor,
            fontSize: 12,
          }}>
          Rental
        </Text>
        <Text
          style={{
            color: MatchMatePalette.whiteColor,
            fontSize: 12,
            fontWeight: '600',
          }}>
          150 CHF
        </Text>
      </TouchableOpacity>
    </ImageContainer>
    <TitleStadiumName>{stadium.stadiumName}</TitleStadiumName>
  </TouchableOpacity>
  );
};

export default ImageListStadiumComponent;
