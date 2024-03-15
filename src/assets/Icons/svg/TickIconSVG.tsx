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
interface TickIconSVG {
  color: string;
}
const TickIconSVG = ({color}: TickIconSVG) => {
  return (
    <Svg
      height="80"
      viewBox="0 -960 960 960"
      width="80">
      <Path
      fill={color}
      d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </Svg>
  );
};

export default TickIconSVG;
