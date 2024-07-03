import React from 'react';
import {
  Defs,
  LinearGradient,
  Stop,
  Text,
  Ellipse,
  TSpan,
  Svg,
  Path,
} from 'react-native-svg';
import { MatchMatePalette } from '../../color-palette';
interface CloseIconSVG {
//   color: string;
}
const CloseIconSVG = ({}: CloseIconSVG) => {
  return (
    <Svg
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={MatchMatePalette.whiteColor}> 
      <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </Svg>
  );
};

export default CloseIconSVG;
