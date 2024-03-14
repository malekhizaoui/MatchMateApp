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
    TextDivide
  } from './styledComponent/StyledComponent';
  import {MatchMatePalette} from '../../../assets/color-palette';
  const SignInScreen = ({navigation}: any) => {
    return (
      <ContainerApp>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={MatchMatePalette.darkBackgroundColor}
        />
        <ContainerScreen>
          <HeaderConnexionScreen>
            <LogoAppStyle></LogoAppStyle>
            <HeaderTitleText>Se Connecter à MatchMate</HeaderTitleText>
          </HeaderConnexionScreen>
          <ContainerForm>
            <ContainerInput>
              <ContainerContentInput>
                <IconStyle>{/* <UsernameIconSVG color='white'/> */}</IconStyle>
                <ContentInput>
                  <TextTitleInput>Adresse mail :</TextTitleInput>
                  <TextInputStyle
                    placeholder="Ex : email@example.com"
                    placeholderTextColor={'grey'}></TextInputStyle>
                </ContentInput>
              </ContainerContentInput>
            </ContainerInput>
            <ContainerInput>
              <ContainerContentInput>
                <IconStyle>{/* <UsernameIconSVG color='white'/> */}</IconStyle>
                <ContentInput>
                  <TextTitleInput>MOT DE PASSE :</TextTitleInput>
                  <TextInputStyle
                    placeholder="Choisissez un mot de passe"
                    placeholderTextColor={'grey'}></TextInputStyle>
                </ContentInput>
              </ContainerContentInput>
            </ContainerInput>        
            <ButtonStyle>
              <TextButton>Connexion</TextButton>
            </ButtonStyle>
            <TextpasswordForgotten>Mot de passe oublié ?</TextpasswordForgotten>
            <ContainerDivideText>
                <LineStyle></LineStyle>
                <TextDivide>ou</TextDivide>
                <LineStyle></LineStyle>
            </ContainerDivideText>
            <ButtonStyle>
              <TextButton>Créer un compte</TextButton>
            </ButtonStyle>
          </ContainerForm>
        </ContainerScreen>
      </ContainerApp>
    );
  };
  
  export default SignInScreen;

  