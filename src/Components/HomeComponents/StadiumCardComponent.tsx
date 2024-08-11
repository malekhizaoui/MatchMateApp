import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  StadiumContainer,
  StadiumImage,
  StadiumDescription,
  TitleDescription,
  TextDescription,
  StarsReviewContainer
} from './StyledComponent/StyledComponent';
import SkeletonStadiumCard from '../SkeletonLoadingComponents/SkeletonStadiumCard';
import { getStarsReviw } from '../../services/HelperFunctions';
import { Feedback } from '../../App/models/Feedback';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next'; 

interface StadiumCardComponentProps {
  titleDescription: string;
  backgroundImage?: string;
  btnClicked: () => void;
  isLoading?: boolean; 
  feedback: Feedback[];
}

const StadiumCardComponent = ({
  titleDescription,
  backgroundImage,
  btnClicked,
  isLoading = false,
  feedback
}: StadiumCardComponentProps) => {
  const palette = usePalette();
  const { t } = useTranslation(); // Initialize useTranslation

  const defaultImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpusOZAX4leJSqoJ6grIZPYdoDTgNfgKZXAA&s'; 
  const starsReview = getStarsReviw(feedback);
  
  return (
    <>
      {isLoading ? ( 
        <SkeletonStadiumCard />
      ) : (
        <>
          <StadiumContainer palette={palette} onPress={btnClicked}>
            <StadiumImage palette={palette} source={{ uri: backgroundImage || defaultImage }} />
            <StadiumDescription>
              <TitleDescription palette={palette}>{t('home.homeScreen.explore')} {titleDescription}</TitleDescription>
              <TextDescription palette={palette}>{t('home.homeScreen.nearCourt')}</TextDescription>
            </StadiumDescription>
            {starsReview!=="NaN"&&<StarsReviewContainer palette={palette}>
              <StarIconSVG color='yellow' size='17' />
              <Text style={{ color: palette.whiteColor }}>{starsReview}</Text>
            </StarsReviewContainer>}
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
    height: 200, 
  },
});

export default StadiumCardComponent;
