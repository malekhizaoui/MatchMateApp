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
interface NextIconSVG {
  color: string;
  size?:string
}
const NextIconSVG = ({color,size}: NextIconSVG) => {
  return (
    <Svg
      height={size?size:"15"}
      viewBox="0 -960 960 960"
      width={size?size:"15"}>
      <Path
      fill={color}
      d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </Svg>
  );
};

export default NextIconSVG;
