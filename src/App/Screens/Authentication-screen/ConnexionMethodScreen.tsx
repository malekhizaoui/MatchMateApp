import { StatusBar } from 'react-native';
import React from 'react';
import {
  ContainerApp,
  HeaderTitleText,
  HeaderConnexionMethodScreen,
  ContainerBtnMethod,
  ContainerScreenMethod,
  TextDescription,
  LogoApp,
} from './styledComponent/StyledComponent';

import { usePalette } from '../../../assets/color-palette/ThemeApp';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import GoogleIconSVG from '../../../assets/Icons/svg/GoogleIconSVG';
import useAuth from './useAuth/useAuth';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

const ConnexionMethodScreen = ({ navigation }:any) => {
  const palette = usePalette();
  const colorScheme = useColorScheme();
  const { t, i18n } = useTranslation();

  const { googleSignInEvent } = useAuth(navigation);
  return (
    <ContainerApp palette={palette}>
      <ContainerScreenMethod>
        <HeaderConnexionMethodScreen>
          <LogoApp
            source={colorScheme === "light" ? require('../../../assets/Logos/MatchMate.png') : require('../../../assets/Logos/MatchMateDarkWhite.png')}
          />
          <HeaderTitleText palette={palette}>{t("authentication.welcome")}</HeaderTitleText>
        </HeaderConnexionMethodScreen>
        <ContainerBtnMethod>
          <TextDescription>
            {t("authentication.signUpOrSignInWith")}
          </TextDescription>

          <ButtonAuthComponent
            btnText={t("authentication.signInWithGoogle")}
            backgroundColor={palette.blackColor}
            btnTextColor={palette.whiteColor}
            btnClicked={googleSignInEvent}
            iconComponent={<GoogleIconSVG color="" />}
          />
          <ButtonAuthComponent
            btnText={t("authentication.signInWithMatchMate")}
            backgroundColor={palette.primaryColor}
            btnTextColor={palette.whiteColor}
            btnClicked={() => navigation.navigate('Signin')}
            iconComponent={''}
          />
        </ContainerBtnMethod>
      </ContainerScreenMethod>
    </ContainerApp>
  );
};

export default ConnexionMethodScreen;
