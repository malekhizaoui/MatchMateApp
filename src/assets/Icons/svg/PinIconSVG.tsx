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
interface PinIconSVG {
  color: string;
}
const PinIconSVG = ({color}: PinIconSVG) => {
  return (
    <Svg
    style={{margin:4}}
      height="15"
      viewBox="0 -960 960 960"
      width="15">
      <Path
        fill={color}
      d="M480-200Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Z" />
    </Svg>
  );
};

export default PinIconSVG;
