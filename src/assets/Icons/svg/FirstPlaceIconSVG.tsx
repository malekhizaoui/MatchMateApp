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
  Circle,
  G,
} from 'react-native-svg';
import { usePalette } from '../../color-palette/ThemeApp';
interface FirstPlaceIconSVG {
  color: string;
}
const FirstPlaceIconSVG = ({color}: FirstPlaceIconSVG) => {
  const palette = usePalette();

  return (
    <Svg width="50" height="50" viewBox="0 0 32 38" fill="none" style={{position:"absolute",bottom:-10}}>
      <Circle cx="16" cy="18" r="14" fill={color} />
      <G filter="url(#filter0_d_72_1654)">
        <Path
          d="M16.0414 25V14.936H13.7374V13.08H18.2174V25H16.0414Z"
          fill={palette.whiteColor}
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default FirstPlaceIconSVG;
