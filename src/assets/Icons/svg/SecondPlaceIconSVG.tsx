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
  Circle,G
} from 'react-native-svg';
import { MatchMatePalette } from '../../color-palette';
interface SecondPlaceIconSVG {
  color: string;
}
const SecondPlaceIconSVG = ({color}: SecondPlaceIconSVG) => {
  return (
    <Svg width="50" height="50" viewBox="0 0 35 39" fill="none" style={{position:"absolute",bottom:50}}>
    <Circle cx="18" cy="20" r="14" fill={color}/>
    <G filter="url(#filter0_d_72_1660)">
    <Path d="M13.9626 26V24.352L17.1946 20.976C17.8346 20.304 18.3252 19.7707 18.6666 19.376C19.0186 18.9707 19.2639 18.624 19.4026 18.336C19.5412 18.048 19.6106 17.7547 19.6106 17.456C19.6106 16.9547 19.4506 16.56 19.1306 16.272C18.8212 15.984 18.4212 15.84 17.9306 15.84C17.4186 15.84 16.9759 15.9893 16.6026 16.288C16.2292 16.576 15.9572 17.0027 15.7866 17.568L13.8826 16.976C14.0106 16.3467 14.2719 15.8027 14.6666 15.344C15.0612 14.8747 15.5412 14.5173 16.1066 14.272C16.6826 14.016 17.2906 13.888 17.9306 13.888C18.6986 13.888 19.3706 14.0267 19.9466 14.304C20.5332 14.5813 20.9866 14.9707 21.3066 15.472C21.6372 15.9733 21.8026 16.56 21.8026 17.232C21.8026 17.6587 21.7226 18.08 21.5626 18.496C21.4026 18.912 21.1626 19.3387 20.8426 19.776C20.5226 20.2027 20.1066 20.6827 19.5946 21.216L16.7946 24.16H21.9626V26H13.9626Z" fill={MatchMatePalette.whiteColor}/>
    </G>
    <Defs>
    </Defs>
    </Svg>
  );
};

export default SecondPlaceIconSVG;
