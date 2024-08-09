import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';

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
import { AuthContext } from '../../../services/Context/AuthContext';

const ConnexionMethodScreen = ({ navigation }: any) => {
  // Use palette for theming
  const palette = usePalette();
  
  // Get the current color scheme (light or dark mode)
  const colorScheme = useColorScheme();
  
  // Translation hook
  const { t } = useTranslation();
  
  // Context for authentication state
  const { lightModeStatus } = useContext(AuthContext);
  
  // Destructure authentication hook
  const { googleSignInEvent } = useAuth(navigation);
  
  return (
    <ContainerApp palette={palette}>
      {/* StatusBar configuration based on theme and mode */}
      <StatusBar
        barStyle={
          lightModeStatus
            ? lightModeStatus === 'light'
              ? 'dark-content'
              : 'light-content'
            : colorScheme === 'light'
            ? 'dark-content'
            : 'light-content'
        }
        backgroundColor={palette.darkBackgroundColor}
      />
      
      <ContainerScreenMethod>
        <HeaderConnexionMethodScreen>
          {/* Logo with conditional source based on theme and mode */}
          <LogoApp
            source={
              !lightModeStatus
                ? colorScheme === 'light'
                  ? require('../../../assets/Logos/MatchMate.png')
                  : require('../../../assets/Logos/MatchMateDarkWhite.png')
                : lightModeStatus === 'light'
                ? require('../../../assets/Logos/MatchMate.png')
                : require('../../../assets/Logos/MatchMateDarkWhite.png')
            }
          />
          
          {/* Header title text */}
          <HeaderTitleText palette={palette}>
            {t("authentication.welcome")}
          </HeaderTitleText>
        </HeaderConnexionMethodScreen>
        
        <ContainerBtnMethod>
          {/* Description text */}
          <TextDescription>
            {t("authentication.signUpOrSignInWith")}
          </TextDescription>

          {/* Google Sign-In Button */}
          <ButtonAuthComponent
            btnText={t("authentication.signInWithGoogle")}
            backgroundColor={palette.blackColor}
            btnTextColor={palette.whiteColor}
            btnClicked={googleSignInEvent}
            iconComponent={<GoogleIconSVG color="" />}
          />
          
          {/* MatchMate Sign-In Button */}
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
