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
interface PreviousIconSVG {
  color: string;
}
const PreviousIconSVG = ({color}: PreviousIconSVG) => {
  return (
    <Svg
    style={{alignSelf:"center"}}
      height="15"
      viewBox="0 -960 960 960"
      width="15">
      <Path
      fill={color}
      d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
    </Svg>
  );
};

export default PreviousIconSVG;
