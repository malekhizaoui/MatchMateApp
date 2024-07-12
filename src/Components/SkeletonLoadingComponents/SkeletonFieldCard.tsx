import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { MatchMatePalette } from '../../assets/color-palette';

const SkeletonFieldCard = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} highlightColor={MatchMatePalette.whiteColor} backgroundColor={MatchMatePalette.lightBackgroundColor}>
    <SkeletonPlaceholder.Item flexDirection="column" alignItems="center" marginLeft={20}>
      <SkeletonPlaceholder.Item width={130} height={200} borderRadius={5} />
      <SkeletonPlaceholder.Item  marginTop={20}>
        <SkeletonPlaceholder.Item width={120} height={20} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
  );
};

export default SkeletonFieldCard