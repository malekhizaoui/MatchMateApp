import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { MatchMatePalette } from '../../assets/color-palette';

const SkeletonLeaderBoardCard = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} highlightColor={MatchMatePalette.lightBackgroundColor} backgroundColor={MatchMatePalette.whiteColor}>
    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between'   >
    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center"   >
      <SkeletonPlaceholder.Item width={40}  borderRadius={20} height={40} marginRight={20}/>
      <SkeletonPlaceholder.Item width={100} height={20} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item  justifyContent='center' alignItems='center'>
        <SkeletonPlaceholder.Item width={70} height={20} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
  );
};

export default SkeletonLeaderBoardCard