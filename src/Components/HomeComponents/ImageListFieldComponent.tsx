import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import {
  Container,
  ImageContainer,
  StadiumImageField,
  PreviousButton,
  NextButton,
  CourtNumberContainer,
  NumberOfCourt,
  RentalContainer,
  RentalText,
  RentalPrice,
  StadiumTitle,
  StadiumImageContainer
} from './StyledComponent/StyledComponent';
import { Field } from '../../App/models/Field';
import { usePalette } from '../../assets/color-palette/ThemeApp';

interface ImageListFieldComponentProps {
    field: Field;
  btnClicked: () => void;
}

const ImageListFieldComponent = ({
  field,
  btnClicked,
}: ImageListFieldComponentProps) => {
  const palette=usePalette()

  return (
    <Container onPress={btnClicked}>
      <ImageContainer>
        <StadiumImageField palette={palette} source={{uri:field.imageURL}}/>
        {/* <PreviousButton>
          <PreviousIconSVG color={.whiteColor} />
        </PreviousButton>
        <NextButton>
          <NextIconSVG color={.whiteColor} />
        </NextButton>
        <CourtNumberContainer>
          <NumberOfCourt>1/4</NumberOfCourt>
        </CourtNumberContainer>
        <RentalContainer>
          <RentalText>Rental</RentalText>
          <RentalPrice>150 CHF</RentalPrice>
        </RentalContainer> */}
      </ImageContainer>
      <StadiumTitle palette={palette}>{field.fieldName}</StadiumTitle>
    </Container>
  );
};

export default ImageListFieldComponent;
