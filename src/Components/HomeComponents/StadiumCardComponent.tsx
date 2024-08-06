import React from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
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
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface StadiumCardComponentProps {
  titleDescription: string;
  backgroundImage?: string;
  btnClicked: () => void;
  isLoading?: boolean; // Add isLoading prop
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
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpusOZAX4leJSqoJ6grIZPYdoDTgNfgKZXAA&s'; // Provide a valid default image URL

  return (
    <>
      {isLoading ? ( // Render skeleton or placeholder when isLoading is true
        <SkeletonStadiumCard />
      ) : (
        <>
          <StadiumContainer palette={palette} onPress={btnClicked}>
            <StadiumImage palette={palette} source={{ uri: backgroundImage || defaultImage }} />
            <StadiumDescription>
              <TitleDescription palette={palette}>{t('home.homeScreen.explore')} {titleDescription}</TitleDescription>
              <TextDescription palette={palette}>{t('home.homeScreen.nearCourt')}</TextDescription>
            </StadiumDescription>
            <StarsReviewContainer palette={palette}>
              <StarIconSVG color='yellow' size='17' />
              <Text style={{ color: palette.whiteColor }}>{getStarsReviw(feedback)}</Text>
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
