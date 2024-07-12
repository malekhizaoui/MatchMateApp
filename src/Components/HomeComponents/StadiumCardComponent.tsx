import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {
  StadiumContainer,
  StadiumImage,
  StadiumDescription,
  TitleDescription,
  TextDescription,
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../assets/color-palette';
import SkeletonStadiumCard from '../SkeletonLoadingComponents/SkeletonStadiumCard';

interface StadiumCardComponentProps {
  titleDescription: string;
  backgroundImage?: string;
  btnClicked: () => void;
  isLoading?: boolean; // Add isLoading prop
}

const StadiumCardComponent = ({
  titleDescription,
  backgroundImage,
  btnClicked,
  isLoading = false,
}: StadiumCardComponentProps) => {
  const defaultImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpusOZAX4leJSqoJ6grIZPYdoDTgNfgKZXAA&s'; // Provide a valid default image URL
  console.log('isLoadingStadiumCard', isLoading);

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
