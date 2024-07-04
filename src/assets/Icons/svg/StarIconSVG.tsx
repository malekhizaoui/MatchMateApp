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
interface StarIconSVG {
  color: string;
  size?:string
}
const StarIconSVG = ({color,size}: StarIconSVG) => {
  return (
    <Svg
      height={!size?"20px":size}
      viewBox="0 -960 960 960"
      width={!size?"20px":size}
      fill={color}>
      <Path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
    </Svg>
  );
};

export default StarIconSVG;
