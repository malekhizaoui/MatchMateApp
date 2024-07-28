import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { usePalette } from '../../assets/color-palette/ThemeApp';

const SkeletonHeaderLeaderBoard = () => {
  const palette=usePalette()

  return (
    <SkeletonPlaceholder borderRadius={4} highlightColor={palette.whiteColor} backgroundColor={palette.lightBackgroundColor}>
    <SkeletonPlaceholder.Item flexDirection="column" alignItems="center"   >
      <SkeletonPlaceholder.Item width={80}  borderRadius={60} height={80} marginTop={80}/>
      <SkeletonPlaceholder.Item  marginTop={10} justifyContent='center' alignItems='center'>
        <SkeletonPlaceholder.Item width={120} height={20} marginBottom={10}/>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
  );
};

export default SkeletonHeaderLeaderBoard