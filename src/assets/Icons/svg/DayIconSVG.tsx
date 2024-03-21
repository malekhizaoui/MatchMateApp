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
interface DayIconSVG {
  color: string;
  size:string
}
const DayIconSVG = ({color,size}: DayIconSVG) => {
  return (
    <Svg
    style={{marginLeft:20,marginRight:10}}
      width={size}
      height={size}
      viewBox="0 0 50.000000 50.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none">
        <Path
          d="M103 481 c-4 -14 -15 -21 -42 -23 -35 -3 -36 -4 -39 -45 l-3 -43 231
0 231 0 -3 43 c-3 41 -4 42 -39 45 -27 2 -38 9 -42 23 -7 26 -47 25 -54 -1 -5
-18 -14 -20 -93 -20 -79 0 -88 2 -93 20 -7 26 -47 27 -54 1z m37 -31 c0 -16
-4 -30 -10 -30 -5 0 -10 14 -10 30 0 17 5 30 10 30 6 0 10 -13 10 -30z m240 0
c0 -16 -4 -30 -10 -30 -5 0 -10 14 -10 30 0 17 5 30 10 30 6 0 10 -13 10 -30z"
        />
        <Path
          d="M22 188 l3 -163 225 0 225 0 3 163 2 162 -230 0 -230 0 2 -162z m318
96 c0 -4 -21 -39 -46 -80 -50 -80 -55 -82 -103 -30 -34 36 -17 46 19 11 16
-16 31 -27 33 -24 2 2 21 32 43 66 34 56 54 76 54 57z"
        />
      </G>
    </Svg>
  );
};

export default DayIconSVG;
