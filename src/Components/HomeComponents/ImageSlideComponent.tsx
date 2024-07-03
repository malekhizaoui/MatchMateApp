import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View,TouchableOpacity} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium
} from './StyledComponent/StyledComponent';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import { Stadium } from '../../App/models/Stadium';
import { MatchMatePalette } from '../../assets/color-palette';
interface ImageSlideComponentProps {
  stadium:Stadium;
}

const ImageSlideComponent = ({
  stadium,
}: ImageSlideComponentProps) => {
  return (
    <ImagesStadiumContainer>
          <ImageStadium source={{uri: stadium.imageURL}}></ImageStadium>
          <TouchableOpacity style={{position:'absolute',top:"50%",left:15,backgroundColor:MatchMatePalette.lightBackgroundColor,alignItems:"center",display:"flex",justifyContent:"center",width:"8%",height:30,borderRadius:15}}>
            <PreviousIconSVG color={MatchMatePalette.whiteColor} />
          </TouchableOpacity>
          <TouchableOpacity style={{position:'absolute',top:"50%",right:15,backgroundColor:MatchMatePalette.lightBackgroundColor,alignItems:"center",display:"flex",justifyContent:"center",width:"8%",height:30,borderRadius:15}}>
            <NextIconSVG color={MatchMatePalette.whiteColor} />
          </TouchableOpacity>
        </ImagesStadiumContainer>
  );
};

export default ImageSlideComponent;
