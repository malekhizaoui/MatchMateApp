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
import {MatchMatePalette} from '../../assets/color-palette';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import SkeletonImageStadiumDetail from '../SkeletonLoadingComponents/SkeletonImageStadiumDetail';

interface ImageSlideComponentProps {
  stadium: Stadium | null;
  reviewStars?: string | null;
}

const ImageSlideComponent = ({
  stadium,
  reviewStars,
}: ImageSlideComponentProps) => {
  console.log('sssss', !!stadium?.imageURL);

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
          backgroundColor: MatchMatePalette.lightBackgroundColor,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: 40,
          borderRadius: 15,
          width: 50,
        }}>
        <Text style={{color: MatchMatePalette.whiteColor}}>1/1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: '5%',
          left: 15,
          backgroundColor: MatchMatePalette.lightBackgroundColor,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: 40,
          borderRadius: 15,
          width: 60,
          flexDirection: 'row',
        }}>
        <StarIconSVG color="yellow" />
        <Text style={{color: MatchMatePalette.whiteColor}}>{reviewStars}</Text>
      </TouchableOpacity>
    </ImagesStadiumContainer>
  );
};

export default ImageSlideComponent;
