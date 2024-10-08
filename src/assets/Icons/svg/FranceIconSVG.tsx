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
  interface FranceIconSVG {
    color?: string;
  }
const FranceIconSVG = ({color}: FranceIconSVG) => {
  return (
    <Svg 
    width="24" height="24" viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet">
   
   <G transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
   fill="#000000" stroke="none">
   <Path d="M1635 4943 c-291 -120 -495 -242 -722 -430 -498 -415 -814 -1005
   -894 -1668 -15 -129 -15 -441 0 -570 99 -818 553 -1513 1261 -1927 52 -31 127
   -70 165 -88 68 -32 255 -110 262 -110 1 0 3 1085 3 2410 0 1326 -3 2410 -7
   2409 -5 0 -35 -12 -68 -26z"/>
   <Path d="M3419 4965 c0 -3 -1 -1086 -1 -2407 -1 -2296 0 -2403 17 -2400 23 4
   213 86 287 123 555 280 1021 803 1233 1385 111 303 158 569 158 894 0 413 -83
   770 -263 1135 -284 573 -771 1017 -1377 1254 -29 11 -53 19 -54 16z"/>
   </G>
   </Svg>
  );
};

export default FranceIconSVG;
