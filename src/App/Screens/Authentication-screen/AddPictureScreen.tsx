import {View } from 'react-native';
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

const AddPictureScreen = ({ navigation, route }:any) => {
  const palette = usePalette();
  const { handleCameraLaunch, openImagePicker } = useAuth(navigation, route);
  const { t, i18n } = useTranslation();

  return (
    <ContainerPass palette={palette}>
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 20 }}>
          <NavigateBack navigation={navigation} />
        </View>
        <HeaderConnexionScreen>
          <ImageProfile
            source={{ uri: 'https://images.alphacoders.com/752/752287.jpg' }}
          />
          <HeaderStepText>
            {t("authentication.chooseProfilePicture")}
          </HeaderStepText>
        </HeaderConnexionScreen>

        <TextAddPicture palette={palette}>
          {t("authentication.communityTrustSafety")}
        </TextAddPicture>
        <ButtonAuthComponent
          btnText={t("authentication.takeSelfie")}
          backgroundColor={palette.whiteColor}
          btnTextColor={palette.primaryColor}
          btnClicked={handleCameraLaunch}
          iconComponent={''}
        />
        <ButtonAuthComponent
          btnText={t("authentication.choosePicture")}
          backgroundColor={palette.whiteColor}
          btnTextColor={palette.primaryColor}
          btnClicked={openImagePicker}
          iconComponent={''}
        />
        <ButtonAuthComponent
          btnText={t("authentication.skip")}
          backgroundColor={palette.secondaryColor}
          btnTextColor={palette.whiteColor}
          btnClicked={() => {
            navigation.navigate('Signin');
          }}
          iconComponent={''}
        />
      </ContainerScreen>
    </ContainerPass>
  );
};

export default AddPictureScreen;
