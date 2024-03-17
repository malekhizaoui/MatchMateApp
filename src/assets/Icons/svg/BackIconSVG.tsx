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
interface BackIconSVG {
  color: string;
  btnClicked:()=>void
}
const BackIconSVG = ({color,btnClicked}: BackIconSVG) => {
  return (
    <Svg
    onPress={btnClicked}
      height="24"
      viewBox="0 -960 960 960"
      width="24">
      <Path
      fill={color}
      d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
    </Svg>
  );
};

export default BackIconSVG;
