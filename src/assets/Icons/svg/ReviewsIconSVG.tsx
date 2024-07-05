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
interface ReviewsIconSVG {
  color: string;
}
const ReviewsIconSVG = ({color}: ReviewsIconSVG) => {
  return (
    <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill={color}>
      <Path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
    </Svg>
  );
};

export default ReviewsIconSVG;
