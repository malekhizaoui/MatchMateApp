import {StatusBar, TouchableOpacity,View} from 'react-native';
import React from 'react';
import {
  ContainerApp,
  ContainerScreen,
  ContainerForm,
  HeaderConnexionScreen,
  LogoAppStyle,
  TextpasswordForgotten,
  ContainerDivideText,
  LineStyle,
  HeaderTitleText,
  TextDivide,
} from './styledComponent/StyledComponent';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import {InputAuthComponent} from '../../../Components/AuthComponents/InputAuthComponent';
import useAuth from './useAuth/useAuth';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import BackIconSVG from '../../../assets/Icons/svg/BackIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
const SignInScreen = ({navigation}: any) => {
  const {email, setEmail, password, setPassword, loginUser} =
    useAuth(navigation);

  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}>
          <NavigateBack navigation={navigation} />
        </View>
        <HeaderConnexionScreen>
          <LogoAppStyle></LogoAppStyle>
          <HeaderTitleText>Se Connecter à MatchMate</HeaderTitleText>
        </HeaderConnexionScreen>
        <ContainerForm>
          <InputAuthComponent
            placeholder="Ex : email@example.com"
            inputName="Adresse mail"
            setValue={setEmail}
            valueInput={email}
            iconComponent={
              <MailIconSVG color={MatchMatePalette.primaryColor} />
            }
          />
          <InputAuthComponent
            placeholder="Choisissez un mot de passe"
            inputName="MOT DE PASSE mail"
            setValue={setPassword}
            valueInput={password}
            iconComponent={
              <PasswordIconSVG color={MatchMatePalette.primaryColor} />
            }
          />
          <ButtonAuthComponent
            btnText="Connexion"
            backgroundColor={MatchMatePalette.primaryColor}
            btnTextColor="white"
            btnClicked={loginUser}
            iconComponent={""}
          />
          <TextpasswordForgotten>Mot de passe oublié ?</TextpasswordForgotten>
          <ContainerDivideText>
            <LineStyle></LineStyle>
            <TextDivide>ou</TextDivide>
            <LineStyle></LineStyle>
          </ContainerDivideText>
          <ButtonAuthComponent
            btnText="Créer un compte"
            backgroundColor={MatchMatePalette.primaryColor}
            btnTextColor="white"
            btnClicked={() => {
              // signIn()
              navigation.navigate('Signup');
            }}
            iconComponent={""}
          />
        </ContainerForm>
      </ContainerScreen>
    </ContainerApp>
  );
};

export default SignInScreen;
