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
    ContainerScreen,
    HeaderRegisterScreen,
    HeaderTitleText,
    HeaderText,
    ContainerForm,
    ContainerInput,
    ContentInput,
    ContainerContentInput,
    TextTitleInput,
    TextInputStyle,
    IconStyle,
    SeperateLine,
    ButtonStyle,
    TextButton,
    HeaderConnexionScreen,
    LogoAppStyle,
    TextpasswordForgotten,
    ContainerDivideText,
    LineStyle,
    TextDivide,
    ContainerBtnMethod,
    ContainerScreenMethod,
    TextDescription,
    ButtonStyleFacebook,
    ButtonStyleGoogle,
    TextButtonGoogle
  } from './styledComponent/StyledComponent';
  import {MatchMatePalette} from '../../../assets/color-palette';
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
            <ButtonStyleFacebook>
              <TextButton>Connexion avec Facebook</TextButton>
            </ButtonStyleFacebook>
            <ButtonStyleGoogle>
              <TextButtonGoogle>Connexion avec Google</TextButtonGoogle>
            </ButtonStyleGoogle>
            <ButtonStyle>
              <TextButton>Connextion avec MatchMate</TextButton>
            </ButtonStyle>
          </ContainerBtnMethod>
        </ContainerScreenMethod>
      </ContainerApp>
    );
  };
  
  export default ConnexionMethodScreen;

  