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
  TextButton
} from './styledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
const SignUpScreen = ({navigation}: any) => {
  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerScreen>
        <HeaderRegisterScreen>
          <HeaderText>S'inscrire</HeaderText>
          <HeaderText>Rapide et facile</HeaderText>
        </HeaderRegisterScreen>
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
          <SeperateLine></SeperateLine>
          <ContainerInput>
            <ContainerContentInput>
              <IconStyle>{/* <UsernameIconSVG color='white'/> */}</IconStyle>
              <ContentInput>
                <TextTitleInput>PRENOM :</TextTitleInput>
                <TextInputStyle
                  placeholder="Votre prénom"
                  placeholderTextColor={'grey'}></TextInputStyle>
              </ContentInput>
            </ContainerContentInput>
          </ContainerInput>
          <ContainerInput>
            <ContainerContentInput>
              <IconStyle>{/* <UsernameIconSVG color='white'/> */}</IconStyle>
              <ContentInput>
                <TextTitleInput>NOM :</TextTitleInput>
                <TextInputStyle
                  placeholder="Votre nom"
                  placeholderTextColor={'grey'}></TextInputStyle>
              </ContentInput>
            </ContainerContentInput>
          </ContainerInput>
          <ContainerInput>
            <ContainerContentInput>
              <IconStyle>{/* <UsernameIconSVG color='white'/> */}</IconStyle>
              <ContentInput>
                <TextTitleInput>AGE :</TextTitleInput>
                <TextInputStyle
                  placeholder="Ex : 09.11.2000"
                  placeholderTextColor={'grey'}></TextInputStyle>
              </ContentInput>
            </ContainerContentInput>
          </ContainerInput>
          <ContainerInput>
            <ContainerContentInput>
              <IconStyle>{/* <UsernameIconSVG color='white'/> */}</IconStyle>
              <ContentInput>
                <TextTitleInput>REGION :</TextTitleInput>
                <TextInputStyle
                  placeholder="Genéve"
                  placeholderTextColor={'grey'}></TextInputStyle>
              </ContentInput>
            </ContainerContentInput>
          </ContainerInput>
          <ButtonStyle>
            <TextButton>Créer un compte</TextButton>
          </ButtonStyle>
        </ContainerForm>
      </ContainerScreen>
    </ContainerApp>
  );
};

export default SignUpScreen;
