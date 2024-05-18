import React from 'react';
import {
  StadiumContainer,
  StadiumImage,
  StadiumDescription,
  TitleDescription,
  TextDescription,
} from './StyledComponent/StyledComponent';

interface StadiumCardComponentProps {
  titleDescription: string;
  backgroundImage?: string;
  btnClicked: () => void;
}

const StadiumCardComponent = ({
  titleDescription,
  backgroundImage,
  btnClicked,
}: StadiumCardComponentProps) => {
  const defaultImage = 'https://example.com/default-image.jpg'; // Provide a valid default image URL
  return (
    <StadiumContainer onPress={btnClicked}>
      <StadiumImage
        source={{uri: backgroundImage || defaultImage}}></StadiumImage>
      <StadiumDescription>
        <TitleDescription>Explore {titleDescription}</TitleDescription>
        <TextDescription>Near court</TextDescription>
      </StadiumDescription>
    </StadiumContainer>
  );
};

export default StadiumCardComponent;
