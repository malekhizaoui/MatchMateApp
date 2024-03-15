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
interface ExpandIconSVG {
  color: string;
}
const ExpandIconSVG = ({color}: ExpandIconSVG) => {
  return (
    <Svg
      height="24"
      viewBox="0 -960 960 960"
      width="24">
      <Path
      fill={color}
      d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </Svg>
  );
};

export default ExpandIconSVG;
