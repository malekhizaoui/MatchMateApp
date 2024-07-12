import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { MatchMatePalette } from '../../assets/color-palette';

const SkeletonHeaderProfileUser = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} highlightColor={MatchMatePalette.whiteColor} backgroundColor={MatchMatePalette.lightBackgroundColor} >
    <SkeletonPlaceholder.Item flexDirection="column" alignItems="center" height={"30%"}  >
      <SkeletonPlaceholder.Item width={120} height={120} borderRadius={60} />
      <SkeletonPlaceholder.Item  marginTop={60} justifyContent='center' alignItems='center'>
        <SkeletonPlaceholder.Item width={120} height={20} marginBottom={20}/>
        <SkeletonPlaceholder.Item width={180} height={20} marginBottom={20} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
  );
};

export default SkeletonHeaderProfileUser