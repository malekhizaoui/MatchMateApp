
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { MatchMatePalette } from '../../assets/color-palette';


const SkeletonImageStadiumDetail = () => {
    return (
      <SkeletonPlaceholder borderRadius={4} highlightColor={MatchMatePalette.whiteColor} backgroundColor={MatchMatePalette.lightBackgroundColor}>
      <SkeletonPlaceholder.Item flexDirection="column" alignItems="center" >
        <SkeletonPlaceholder.Item width={"100%"} height={"100%"} borderRadius={5} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
    );
  };
  
  export default SkeletonImageStadiumDetail