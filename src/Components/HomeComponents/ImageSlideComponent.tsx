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
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
interface ImageSlideComponentProps {
  stadium:Stadium|null;
  reviewStars:number 
}

const ImageSlideComponent = ({
  stadium,
  reviewStars
}: ImageSlideComponentProps) => {
  return (
    <ImagesStadiumContainer>
          <ImageStadium source={{uri:stadium ?stadium?.imageURL:"https://www.geaves.com/media/catalog/product/cache/acd115faf6a75f6594ab269049b631ed/3/1/31552_5.webp"}}></ImageStadium>
          {/* <TouchableOpacity style={{position:'absolute',top:"50%",left:15,backgroundColor:MatchMatePalette.lightBackgroundColor,alignItems:"center",display:"flex",justifyContent:"center",width:"8%",height:30,borderRadius:15}}>
            <PreviousIconSVG color={MatchMatePalette.whiteColor} />
          </TouchableOpacity> */}
          <TouchableOpacity style={{position:'absolute',bottom:"5%",right:15,backgroundColor:MatchMatePalette.lightBackgroundColor,alignItems:"center",display:"flex",justifyContent:"center",height:40,borderRadius:15,width:50}}>
            <Text style={{color:MatchMatePalette.whiteColor}}>1/1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{position:'absolute',bottom:"5%",left:15,backgroundColor:MatchMatePalette.lightBackgroundColor,alignItems:"center",display:"flex",justifyContent:"center",height:40,borderRadius:15,width:60,flexDirection:"row"}}>
          <StarIconSVG color='yellow'/>
          <Text style={{color:MatchMatePalette.whiteColor}}>{reviewStars>0?reviewStars:0}</Text>
          </TouchableOpacity>
        </ImagesStadiumContainer>
  );
};

export default ImageSlideComponent;
