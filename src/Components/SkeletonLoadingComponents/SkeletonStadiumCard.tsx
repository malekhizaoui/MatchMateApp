import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { usePalette } from '../../assets/color-palette/ThemeApp';


const SkeletonStadiumCard = () => {
  const palette=usePalette()

  return (
    <SkeletonPlaceholder borderRadius={4} highlightColor={palette.darkBackgroundColor} backgroundColor={palette.lightBackgroundColor}>
    <SkeletonPlaceholder.Item flexDirection="column" alignItems="center" marginLeft={20}>
      <SkeletonPlaceholder.Item width={130} height={"60%"} borderRadius={5} />
      <SkeletonPlaceholder.Item  marginTop={20}>
        <SkeletonPlaceholder.Item width={120} height={20} />
        <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
  );
};

export default SkeletonStadiumCard ;
