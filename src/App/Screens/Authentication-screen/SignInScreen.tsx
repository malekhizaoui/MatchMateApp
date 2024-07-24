import {StatusBar, TouchableOpacity, View} from 'react-native';
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
  LogoApp,
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
  const {email, setEmail, password, setPassword, loginUser,loading } =
    useAuth(navigation);
  return (
    
    <ContainerApp>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View>
          <NavigateBack navigation={navigation} />
        </View>
        <HeaderConnexionScreen>
          <LogoApp
            // source={require('../../../assets/Logos/MatchMateDarkWhite.png')}
            source={require('../../../assets/Logos/MatchMate.png')}
          />
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
            btnTextColor={MatchMatePalette.whiteColor}
            btnClicked={loginUser}
            iconComponent={''}
            loading ={loading}
          />
          <TouchableOpacity onPress={()=>{navigation.navigate('PasswordForgotten')}}>
          <TextpasswordForgotten>Mot de passe oublié ?</TextpasswordForgotten>

          </TouchableOpacity>
          <ContainerDivideText>
            <LineStyle></LineStyle>
            <TextDivide>ou</TextDivide>
            <LineStyle></LineStyle>
          </ContainerDivideText>
          <ButtonAuthComponent
            btnText="Créer un compte"
            backgroundColor={MatchMatePalette.primaryColor}
            btnTextColor={MatchMatePalette.whiteColor}
            btnClicked={() => {
              // signIn()
              navigation.navigate('Signup');
            }}
            iconComponent={''}
          />
        </ContainerForm>
      </ContainerScreen>
    </ContainerApp>
  );
};

export default SignInScreen;
