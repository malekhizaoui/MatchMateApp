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
interface PlayersIconSVG {
  color: string;
  size:string
}
const PlayersIconSVG = ({color,size}: PlayersIconSVG) => {
  return (
    <Svg 
    width={size} height={size} viewBox="0 0 50.000000 50.000000"
    preserveAspectRatio="xMidYMid meet">
   
   <G transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
   fill={color} stroke="none">
   <Path d="M337 404 c-3 -4 1 -17 10 -30 15 -23 15 -93 -1 -139 -6 -17 0 -24 29
   -38 19 -9 38 -24 41 -32 7 -17 64 -21 64 -4 0 23 -21 47 -50 59 -27 11 -31 17
   -25 39 19 73 17 108 -6 130 -22 21 -50 27 -62 15z"/>
   <Path d="M242 392 c-10 -7 -10 -14 3 -38 19 -36 19 -91 0 -124 -21 -37 -18
   -46 15 -60 17 -7 39 -23 49 -36 14 -18 29 -24 60 -24 23 0 41 4 41 9 0 25 -16
   44 -52 62 -37 19 -40 23 -33 52 3 18 9 53 12 78 4 43 2 48 -25 68 -32 22 -49
   26 -70 13z"/>
   <Path d="M116 369 c-22 -17 -26 -28 -26 -70 0 -28 7 -64 16 -82 16 -30 16 -32
   -6 -47 -42 -28 -80 -68 -80 -84 0 -14 20 -16 145 -16 96 0 145 4 145 11 0 24
   -23 50 -60 69 -43 22 -47 32 -29 77 6 15 13 45 16 66 3 33 0 42 -28 67 -37 35
   -57 37 -93 9z"/>
   </G>
   </Svg>
  );
};

export default PlayersIconSVG;
