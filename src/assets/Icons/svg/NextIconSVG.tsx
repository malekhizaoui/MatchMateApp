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
}
const NextIconSVG = ({color}: NextIconSVG) => {
  return (
    <Svg
      height="15"
      viewBox="0 -960 960 960"
      width="15">
      <Path
      fill={color}
      d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </Svg>
  );
};

export default NextIconSVG;
