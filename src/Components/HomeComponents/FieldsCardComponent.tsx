import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {
  FieldContent,
  ImageField,
  TitleCard,
  TxtTitle,
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../assets/color-palette';
import SkeletonFieldCard from '../SkeletonLoadingComponents/SkeletonFieldCard';

interface FieldsCardComponentProps {
  titleText: string;
  backgroundImage: string;
  btnClicked: () => void;
  isSelected: boolean;
  isLoading?: boolean; // Add isLoading prop
}

const FieldsCardComponent = ({
  titleText,
  backgroundImage,
  btnClicked,
  isSelected = false,
  isLoading = false,
}: FieldsCardComponentProps) => {
  console.log('isLoadingFieldCard', isLoading);

  return (
    <>
      {isLoading ? (
        <SkeletonFieldCard />
      ) : (
        <FieldContent
          onPress={btnClicked}
          style={isLoading ? {borderColor: 'white', borderWidth: 1} : {}}>
          <ImageField
            style={[
              styles.imageField,
              isSelected
                ? {height: '95%', borderColor: MatchMatePalette.primaryColor}
                : {borderColor: MatchMatePalette.whiteColor},
            ]}
            source={{
              uri: backgroundImage,
            }}
          />
          <TitleCard>
            <TxtTitle>{titleText}</TxtTitle>
          </TitleCard>
        </FieldContent> 
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
  imageField: {
    borderWidth: 1,
    borderRadius: 8,
    height: '100%', // Ensure the image field covers the entire area
    borderColor: 'white',
  },
});

export default FieldsCardComponent;
