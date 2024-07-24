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

import {MatchMatePalette} from '../../../assets/color-palette';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import GoogleIconSVG from '../../../assets/Icons/svg/GoogleIconSVG';
import useAuth from './useAuth/useAuth';


const ConnexionMethodScreen = ({navigation}: any) => {
  const {googleSignInEvent} = useAuth(navigation);
  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerScreenMethod>
        <HeaderConnexionMethodScreen>
          <LogoApp
            source={require('../../../assets/Logos/MatchMate.png')}
            // source={require('../../../assets/Logos/MatchMateDarkWhite.png')}
          />
          <HeaderTitleText>Bienvenue à MatchMate</HeaderTitleText>
        </HeaderConnexionMethodScreen>
        <ContainerBtnMethod>
          <TextDescription>
            Inscrivez-vous ou connectez-vous en utilisant l'une de ces méthodes
            de connexion
          </TextDescription>

          {/* <ButtonAuthComponent btnText='Connexion avec Facebook' backgroundColor="#1d5dc4" btnTextColor={MatchMatePalette.whiteColor} btnClicked={()=>{}} iconComponent={<FacebookIconSVG color=''/>} /> */}
          <ButtonAuthComponent
            btnText="Connexion avec Google"
            backgroundColor={MatchMatePalette.blackColor}
            btnTextColor={MatchMatePalette.whiteColor}
            btnClicked={googleSignInEvent}
            iconComponent={<GoogleIconSVG color="" />}
          />
          <ButtonAuthComponent
            btnText="Connexion avec MatchMate"
            backgroundColor={MatchMatePalette.primaryColor}
            btnTextColor={MatchMatePalette.whiteColor}
            btnClicked={() => navigation.navigate('Signin')}
            iconComponent={''}
          />
        </ContainerBtnMethod>
      </ContainerScreenMethod>
    </ContainerApp>
  );
};

export default ConnexionMethodScreen;
