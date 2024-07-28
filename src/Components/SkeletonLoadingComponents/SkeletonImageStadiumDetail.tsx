
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { usePalette } from '../../assets/color-palette/ThemeApp';


const SkeletonImageStadiumDetail = () => {
  const palette=usePalette()
    return (
      <SkeletonPlaceholder borderRadius={4} highlightColor={palette.whiteColor} backgroundColor={palette.lightBackgroundColor}>
      <SkeletonPlaceholder.Item flexDirection="column" alignItems="center" >
        <SkeletonPlaceholder.Item width={"100%"} height={"100%"} borderRadius={5} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
    );
  };
  
  export default SkeletonImageStadiumDetail