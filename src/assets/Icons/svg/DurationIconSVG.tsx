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
  G
} from 'react-native-svg';
interface DurationIconSVG {
  color: string;
  size:string
}
const DurationIconSVG = ({color,size}: DurationIconSVG) => {
  return (
    <Svg 
    width={size} height={size} viewBox="0 0 50.000000 50.000000"
    preserveAspectRatio="xMidYMid meet">
   
   <G transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
   fill={color} stroke="none">
   <Path d="M379 470 c-13 -20 -16 -20 -51 -6 -72 31 -175 10 -237 -47 -36 -33
   -71 -115 -71 -167 0 -49 29 -122 63 -159 33 -36 115 -71 167 -71 52 0 134 35
   167 71 61 67 78 171 41 249 -12 25 -24 67 -27 95 -7 56 -28 70 -52 35z m31
   -50 l0 -50 -52 0 c-52 0 -58 14 -8 22 23 4 21 6 -20 26 -54 26 -97 28 -148 7
   -49 -21 -81 -52 -103 -100 -24 -51 -24 -99 0 -150 45 -98 151 -139 246 -96 94
   42 137 150 99 245 -5 14 -3 17 7 14 19 -6 32 -71 25 -123 -13 -84 -91 -160
   -176 -171 -158 -21 -285 139 -224 284 47 114 178 164 287 108 l47 -23 0 22 c0
   19 7 35 17 35 2 0 3 -22 3 -50z m-158 -95 c0 -41 1 -78 2 -83 2 -12 -84 -86
   -91 -79 -3 4 11 25 31 47 35 39 36 43 36 115 0 99 20 99 22 0z"/>
   </G>
   </Svg>
  );
};

export default DurationIconSVG;
