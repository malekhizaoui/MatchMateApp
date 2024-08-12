import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium,
} from './StyledComponent/StyledComponent';
import {Stadium} from '../../App/models/Stadium';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import SkeletonImageStadiumDetail from '../SkeletonLoadingComponents/SkeletonImageStadiumDetail';
import { usePalette } from '../../assets/color-palette/ThemeApp';

interface ImageSlideComponentProps {
  stadium: Stadium | null;
  reviewStars?: string | null;
}

const ImageSlideComponent = ({
  stadium,
  reviewStars,
}: ImageSlideComponentProps) => {
  const palette=usePalette()

  return (
    <ImagesStadiumContainer>
      {stadium && stadium.imageURL ? (
        <ImageStadium
          source={{uri: stadium ? stadium.imageURL : 'qsq;knsq;,'}}
        />
      ) : (
        <SkeletonImageStadiumDetail />
      )}

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: '5%',
          right: 15,
          backgroundColor: palette.blackColor,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: 40,
          borderRadius: 15,
          width: 50,
        }}>
        <Text style={{color: palette.whiteColor}}>1/1</Text>
      </TouchableOpacity>
      {stadium?.status!=="Public"&&<TouchableOpacity
        style={{
          position: 'absolute',
          bottom: '5%',
          left: 15,
          backgroundColor: palette.blackColor,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: 40,
          borderRadius: 15,
          width: 80,
          flexDirection: 'row',
        }}>
        {/* <StarIconSVG color={palette.primaryColor} /> */}
        <Text style={{color: palette.whiteColor,textAlign:"center"}}>Rental {stadium?.price} CHF</Text>
      </TouchableOpacity>}
    </ImagesStadiumContainer>
  );
};

export default ImageSlideComponent;
