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
interface DirectionIconSVG {
  color?: string;
}
const DirectionIconSVG = ({color}: DirectionIconSVG) => {
  return (
    <Svg
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={color}>
      <Path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z" />
    </Svg>
  );
};

export default DirectionIconSVG;
