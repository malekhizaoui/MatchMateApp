import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View,TouchableOpacity} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium
} from './StyledComponent/StyledComponent';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
interface ImageSlideComponentProps {
  stadium:any;
  btnClicked: () => void;
}

const ImageSlideComponent = ({
  stadium,
  btnClicked,
}: ImageSlideComponentProps) => {
  return (
    <ImagesStadiumContainer>
          
          <ImageStadium source={{uri: stadium.backgroundImage}}></ImageStadium>
          <TouchableOpacity style={{position:'absolute',top:"50%",left:15,backgroundColor:"#262626",alignItems:"center",display:"flex",justifyContent:"center",width:"8%",height:30,borderRadius:15}}>
            <PreviousIconSVG color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{position:'absolute',top:"50%",right:15,backgroundColor:"#262626",alignItems:"center",display:"flex",justifyContent:"center",width:"8%",height:30,borderRadius:15}}>
            <NextIconSVG color="white" />
          </TouchableOpacity>
        </ImagesStadiumContainer>
  );
};

export default ImageSlideComponent;
