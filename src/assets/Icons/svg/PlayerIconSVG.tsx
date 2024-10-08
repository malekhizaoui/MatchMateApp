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
  Rect
} from 'react-native-svg';
interface PlayerIconSVG {
  color: string;
  size: string;
}
const PlayerIconSVG = ({color, size}: PlayerIconSVG) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 34 38"
      fill="none"
    >
      <Rect width="34" height="38" rx="10" fill={color} />
      <Ellipse
        cx="16.4036"
        cy="11.5236"
        rx="6.76888"
        ry="7.56522"
        stroke="#3B3B3B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.66677 29.6106C5.66495 29.0787 5.77137 28.5534 5.97798 28.0743C6.62634 26.625 8.45472 25.8569 9.97188 25.5091C11.0661 25.2481 12.1753 25.0738 13.2915 24.9874C15.3579 24.7845 17.4363 24.7845 19.5028 24.9874C20.6188 25.0748 21.728 25.2491 22.8224 25.5091C24.3395 25.8569 26.1679 26.5526 26.8163 28.0743C27.2318 29.0509 27.2318 30.1847 26.8163 31.1613C26.1679 32.683 24.3395 33.3787 22.8224 33.712C21.7295 33.9838 20.6198 34.163 19.5028 34.2482C17.8209 34.4076 16.1311 34.4366 14.4456 34.3352C14.0566 34.3352 13.6805 34.3352 13.2915 34.2482C12.1786 34.1641 11.0732 33.9848 9.98485 33.712C8.45472 33.3787 6.63931 32.683 5.97798 31.1613C5.77243 30.6766 5.66611 30.1469 5.66677 29.6106Z"
        stroke="#3B3B3B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PlayerIconSVG;
