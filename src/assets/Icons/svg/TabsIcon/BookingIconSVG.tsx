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
interface BookingIconSVG {
  color: string;
}
const BookingIconSVG = ({color}: BookingIconSVG) => {
  return (
    <Svg
      height="30"
      viewBox="0 -960 960 960"
      width="30">
      <Path
      fill={color}
      d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
    </Svg>
  );
};

export default BookingIconSVG;
