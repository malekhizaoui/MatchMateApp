import {StatusBar} from 'react-native';
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


const ConnexionMethodScreen = ({navigation}: any) => {
  const palette = usePalette();
  const colorScheme = useColorScheme();
console.log("colorSchemesssss",colorScheme);


  const {googleSignInEvent} = useAuth(navigation);
  return (
    <ContainerApp palette={palette}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.darkBackgroundColor}
      />
      <ContainerScreenMethod>
        <HeaderConnexionMethodScreen>
          <LogoApp
            source={colorScheme==="light"?require('../../../assets/Logos/MatchMate.png'):require('../../../assets/Logos/MatchMateDarkWhite.png')}
            // source={require('../../../assets/Logos/MatchMateDarkWhite.png')}
          />
          <HeaderTitleText palette={palette}>Bienvenue à MatchMate</HeaderTitleText>
        </HeaderConnexionMethodScreen>
        <ContainerBtnMethod>
          <TextDescription>
            Inscrivez-vous ou connectez-vous en utilisant l'une de ces méthodes
            de connexion
          </TextDescription>

          {/* <ButtonAuthComponent btnText='Connexion avec Facebook' backgroundColor="#1d5dc4" btnTextColor={palette.whiteColor} btnClicked={()=>{}} iconComponent={<FacebookIconSVG color=''/>} /> */}
          <ButtonAuthComponent
            btnText="Connexion avec Google"
            backgroundColor={palette.blackColor}
            btnTextColor={palette.whiteColor}
            btnClicked={googleSignInEvent}
            iconComponent={<GoogleIconSVG color="" />}
          />
          <ButtonAuthComponent
            btnText="Connexion avec MatchMate"
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
