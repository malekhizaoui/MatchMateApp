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
interface ThirdPlaceIconSVG {
  color: string;
}
const ThirdPlaceIconSVG = ({color}: ThirdPlaceIconSVG) => {
  const palette = usePalette();

  return (
    <Svg width="50" height="50" viewBox="0 0 36 39" fill="none" style={{position:"absolute",bottom:50}}>
      <Circle cx="18" cy="18" r="14" fill={color} />
      <G filter="url(#filter0_d_72_1666)">
        <Path
          d="M17.7974 25.192C17.1467 25.192 16.528 25.0747 15.9414 24.84C15.3654 24.5947 14.8694 24.2533 14.4534 23.816C14.048 23.368 13.7707 22.84 13.6214 22.232L15.5254 21.56C15.7174 22.104 16.0107 22.52 16.4054 22.808C16.8 23.0853 17.264 23.224 17.7974 23.224C18.224 23.224 18.592 23.144 18.9014 22.984C19.2214 22.824 19.472 22.5947 19.6534 22.296C19.8347 21.9867 19.9254 21.624 19.9254 21.208C19.9254 20.792 19.8347 20.44 19.6534 20.152C19.4827 19.8533 19.2374 19.624 18.9174 19.464C18.5974 19.304 18.2187 19.224 17.7814 19.224C17.5787 19.224 17.3654 19.2453 17.1414 19.288C16.928 19.3307 16.736 19.3947 16.5654 19.48L16.0694 18.44L19.1574 14.92H14.2934V13.08H21.6054V14.792L18.5014 18.424L18.5334 17.608C19.248 17.6187 19.872 17.7733 20.4054 18.072C20.9387 18.3707 21.3547 18.7813 21.6534 19.304C21.952 19.8267 22.1014 20.44 22.1014 21.144C22.1014 21.912 21.9147 22.6053 21.5414 23.224C21.168 23.832 20.656 24.312 20.0054 24.664C19.3547 25.016 18.6187 25.192 17.7974 25.192Z"
          fill={palette.whiteColor}
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default ThirdPlaceIconSVG;
