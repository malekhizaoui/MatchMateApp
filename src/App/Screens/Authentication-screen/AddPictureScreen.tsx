import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {
  ContainerPass,
  HeaderStepText,
  HeaderConnexionScreen,
  LogoAppStyle,
  ContainerScreen,
  TextAddPicture,
  ImageProfile,
} from './styledComponent/StyledComponent';
import NavigateBack from '../../../Components/NavigateBack';
import TickIconSVG from '../../../assets/Icons/svg/TickIconSVG';
import {usePalette} from '../../../assets/color-palette/ThemeApp';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';

import useAuth from './useAuth/useAuth';

const AddPictureScreen = ({navigation, route}: any) => {
  const palette = usePalette();
  const {handleCameraLaunch, openImagePicker} = useAuth(navigation, route);
  return (
    <ContainerPass palette={palette}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.primaryColor}
      />
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}>
          <NavigateBack navigation={navigation} />
        </View>
        <HeaderConnexionScreen>
          <ImageProfile
            source={{uri: 'https://images.alphacoders.com/752/752287.jpg'}}
          />
          <HeaderStepText>
            Choisissez une belle photo de profile ou prenez un selfie !
          </HeaderStepText>
        </HeaderConnexionScreen>

        <TextAddPicture palette={palette}>
          Match Mate est avant tout une communauté ou règne la confiance et la
          sécurité dans les échanges. Nous tenons, donc, à
          ce que tous les membres soient identifiés par une photo de profil !
        </TextAddPicture>
        <ButtonAuthComponent
          btnText="Take a selfie"
          backgroundColor={palette.whiteColor}
          btnTextColor={palette.primaryColor}
          btnClicked={handleCameraLaunch}
          iconComponent={''}
        />
        <ButtonAuthComponent
          btnText="Choose a picture"
          backgroundColor={palette.whiteColor}
          btnTextColor={palette.primaryColor}
          btnClicked={openImagePicker}
          iconComponent={''}
        />
        <ButtonAuthComponent
          btnText="Skip"
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
