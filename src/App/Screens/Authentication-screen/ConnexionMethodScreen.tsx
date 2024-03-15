import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ToastAndroid,
    Dimensions,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React, {useState, useEffect, useRef, useContext} from 'react';
  import UsernameIconSVG from '../../../assets/Icons/svg/usernameIconSVG';
  import {
    ContainerApp,
    HeaderTitleText,
    HeaderConnexionScreen,
    LogoAppStyle,
    ContainerBtnMethod,
    ContainerScreenMethod,
    TextDescription,
  } from './styledComponent/StyledComponent';
  
  import {MatchMatePalette} from '../../../assets/color-palette';
  import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
  import FacebookIconSVG from '../../../assets/Icons/svg/FacebookIconSVG';
  import GoogleIconSVG from '../../../assets/Icons/svg/GoogleIconSVG';
  const ConnexionMethodScreen = ({navigation}: any) => {
    return (
      <ContainerApp>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={MatchMatePalette.darkBackgroundColor}
        />
        <ContainerScreenMethod>
          <HeaderConnexionScreen>
            <LogoAppStyle></LogoAppStyle>
            <HeaderTitleText>Bienvenue à MatchMate</HeaderTitleText>
          </HeaderConnexionScreen>
          <ContainerBtnMethod>  
            <TextDescription>Inscrivez-vous ou connectez-vous en utilisant l'une de ces méthodes de connexion</TextDescription>

             <ButtonAuthComponent btnText='Connexion avec Facebook' backgroundColor="#1d5dc4" btnTextColor='white' btnClicked={()=>{}} iconComponent={<FacebookIconSVG color=''/>} />
             <ButtonAuthComponent btnText='Connexion avec Google' backgroundColor="white" btnTextColor='black' btnClicked={()=>{}} iconComponent={<GoogleIconSVG color=''/>}/>
             <ButtonAuthComponent btnText='Connexion avec MatchMate' backgroundColor={MatchMatePalette.primaryColor} btnTextColor='white' btnClicked={()=>navigation.navigate('Signin')} iconComponent={""}/>

          </ContainerBtnMethod>
        </ContainerScreenMethod>
      </ContainerApp>
    );
  };
  
  export default ConnexionMethodScreen;

  