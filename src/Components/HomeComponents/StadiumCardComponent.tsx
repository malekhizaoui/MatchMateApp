import React from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import {
  StadiumContainer,
  StadiumImage,
  StadiumDescription,
  TitleDescription,
  TextDescription,
  StarsReviewContainer
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../assets/color-palette';
import SkeletonStadiumCard from '../SkeletonLoadingComponents/SkeletonStadiumCard';
import { getStarsReviw } from '../../services/HelperFunctions';
import { Feedback } from '../../App/models/Feedback';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
interface StadiumCardComponentProps {
  titleDescription: string;
  backgroundImage?: string;
  btnClicked: () => void;
  isLoading?: boolean; // Add isLoading prop
  feedback:Feedback[]
}

const StadiumCardComponent = ({
  titleDescription,
  backgroundImage,
  btnClicked,
  isLoading = false,
  feedback
}: StadiumCardComponentProps) => {
  const defaultImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpusOZAX4leJSqoJ6grIZPYdoDTgNfgKZXAA&s'; // Provide a valid default image URL

  return (
    <>
      {isLoading ? ( // Render skeleton or placeholder when isLoading is true
        <SkeletonStadiumCard/>
      ) : (
        <>
          <StadiumContainer onPress={btnClicked}>
            <StadiumImage source={{uri: backgroundImage || defaultImage}} />
            <StadiumDescription>
              <TitleDescription>Explore {titleDescription}</TitleDescription>
              <TextDescription>Near court</TextDescription>
            </StadiumDescription>
            <StarsReviewContainer>
            <StarIconSVG color='yellow' size='17'/>
            <Text style={{color: MatchMatePalette.whiteColor}}>{getStarsReviw(feedback)}</Text>
            </StarsReviewContainer>
          </StadiumContainer>
             
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, // Adjust height as needed
  },
});

export default StadiumCardComponent;
