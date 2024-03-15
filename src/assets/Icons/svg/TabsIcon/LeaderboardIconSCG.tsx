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
interface LeaderboardIconSCG {
  color: string;
}
const LeaderboardIconSCG = ({color}: LeaderboardIconSCG) => {
  return (
    <Svg
      height="30"
      viewBox="0 -960 960 960"
      width="30">
      <Path
      
      fill={color}
      d="M80-120v-480h220v480H80Zm290 0v-720h220v720H370Zm290 0v-400h220v400H660Z" />
    </Svg>
  );
};

export default LeaderboardIconSCG;
