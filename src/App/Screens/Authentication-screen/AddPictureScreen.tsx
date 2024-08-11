import { View } from 'react-native';
import React from 'react';
import {
  ContainerPass,
  HeaderStepText,
  HeaderConnexionScreen,
  ContainerScreen,
  TextAddPicture,
  ImageProfile,
} from './styledComponent/StyledComponent';
import NavigateBack from '../../../Components/NavigateBack';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import useAuth from './useAuth/useAuth';
import { useTranslation } from 'react-i18next';

// Functional component for the AddPictureScreen
const AddPictureScreen = ({ navigation, route }: any) => {
  // Retrieve color palette and translation functions
  const palette = usePalette();
  const { handleCameraLaunch, openImagePicker } = useAuth(navigation, route);
  const { t } = useTranslation();

  return (
    // Main container with styling
    <ContainerPass palette={palette}>
      <ContainerScreen showsVerticalScrollIndicator={false}>
        {/* Back navigation button */}
        <View style={{ marginTop: 20 }}>
          <NavigateBack navigation={navigation} />
        </View>

        {/* Header section with profile image and title */}
        <HeaderConnexionScreen>
          <ImageProfile
            // Placeholder profile image
            source={{ uri: 'https://images.alphacoders.com/752/752287.jpg' }}
          />
          <HeaderStepText>
            {/* Translated text for choosing a profile picture */}
            {t("authentication.chooseProfilePicture")}
          </HeaderStepText>
        </HeaderConnexionScreen>

        {/* Description text below the header */}
        <TextAddPicture palette={palette}>
          {/* Translated text for community trust and safety */}
          {t("authentication.communityTrustSafety")}
        </TextAddPicture>

        {/* Button to take a selfie */}
        <ButtonAuthComponent
          btnText={t("authentication.takeSelfie")}
          backgroundColor={palette.whiteColor}
          btnTextColor={palette.primaryColor}
          btnClicked={handleCameraLaunch}
          iconComponent={''}
        />

        {/* Button to choose a picture from gallery */}
        <ButtonAuthComponent
          btnText={t("authentication.choosePicture")}
          backgroundColor={palette.whiteColor}
          btnTextColor={palette.primaryColor}
          btnClicked={openImagePicker}
          iconComponent={''}
        />

        {/* Button to skip the profile picture step */}
        <ButtonAuthComponent
          btnText={t("authentication.skip")}
          backgroundColor={palette.secondaryColor}
          btnTextColor={palette.whiteColor}
          btnClicked={() => {
            // Navigate to Signin screen
            navigation.navigate('Signin');
          }}
          iconComponent={''}
        />
      </ContainerScreen>
    </ContainerPass>
  );
};

export default AddPictureScreen;
