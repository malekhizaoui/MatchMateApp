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
interface StarIconNotFilledIconSVG {
  color: string;
  size?:string

}
const StarIconNotFilledIconSVG = ({color,size}: StarIconNotFilledIconSVG) => {
  return (
    <Svg
      height={!size?"20px":size}
      viewBox="0 -960 960 960"
      width={!size?"20px":size}
      fill={color}>
      <Path d="M350-281.5 480-360l130 79-34.5-148 115-99-151-13.5-59.5-140L420.5-542l-151 13 115 99.5-34.5 148ZM236.5-125 301-402 86-588l283.5-24.5 110.5-261 110.5 261L874-588 659-402l64.5 277L480-272 236.5-125ZM480-471Z" />
    </Svg>
  );
};

export default StarIconNotFilledIconSVG;
