import {StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  ContainerPass,
  ContainerScreen,
  ImagePasswordContainer,
  ResetPaswordStepsContainer,
  HeaderStepText,
  TextDescriptionForgetPass,
} from './styledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import useAuth from './useAuth/useAuth';
import LockerIconSVG from '../../../assets/Icons/svg/LockerIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
import {InputPassForgetComponent} from '../../../Components/AuthComponents/InputPassForgetComponent';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import TickIconSVG from '../../../assets/Icons/svg/TickIconSVG';



const PasswordForgottenScreen = ({navigation, route}: any) => {
  const {
    setBarColorCntxt,
    email,
    setEmail,
    resentCode,
    resetPassword,
    password,
    setPassword,
    newPassword,
    setNewPassword,
    step,
  } = useAuth(navigation);
  useEffect(() => {
    // setBarColorCntxt(MatchMatePalette.primaryColor);
  }, []);
  console.log('route', route);

  return (
    <ContainerPass>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View>
          <NavigateBack navigation={navigation} color="white" />
        </View>
        <ImagePasswordContainer>
          {step !== 3 ? (
            <LockerIconSVG color={MatchMatePalette.primaryColor} />
          ) : (
            <TickIconSVG color={MatchMatePalette.secondaryTextColor} />
          )}
        </ImagePasswordContainer>
        {step !== 3 ? (
          !route.params ? (
            <>
              <HeaderStepText>Etape 1 sur 2</HeaderStepText>
              <HeaderStepText>
                Veuillez renseigner vos informations :
              </HeaderStepText>
              <InputPassForgetComponent
                setValue={setEmail}
                valueInput={email}
                iconComponent={
                  <MailIconSVG color={MatchMatePalette.primaryColor} />
                }
                placeholder={'Tapez votre adresse mail ...'}
              />
              <TextDescriptionForgetPass>
                Vous recevrez un code de confirmation sur votre adresse mail
                pour récupérer votre compte .
              </TextDescriptionForgetPass>
              <ButtonAuthComponent
                btnText="Continuer"
                backgroundColor={MatchMatePalette.darkBackgroundColor}
                btnTextColor={MatchMatePalette.secondaryTextColor}
                btnClicked={resentCode}
                iconComponent={''}
              />
            </>
          ) : (
            <>
              <HeaderStepText>Etape 2 sur 2</HeaderStepText>
              <HeaderStepText>
                Veuillez saisir votre nouvelle mot de passe :
              </HeaderStepText>
              <InputPassForgetComponent
                setValue={setPassword}
                valueInput={password}
                iconComponent={
                  <PasswordIconSVG color={MatchMatePalette.primaryColor} />
                }
                placeholder={'Nouveau mot de passe ...'}
              />
              <InputPassForgetComponent
                setValue={setNewPassword}
                valueInput={newPassword}
                iconComponent={
                  <PasswordIconSVG color={MatchMatePalette.primaryColor} />
                }
                placeholder={'Nouveau mot de passe ...'}
              />
              <TextDescriptionForgetPass>
                Une fois vous creéz un Nouveau mot de puis vous avez l'acces à
                nouveau à votre compte
              </TextDescriptionForgetPass>
              <ButtonAuthComponent
                btnText="Continuer"
                backgroundColor={MatchMatePalette.darkBackgroundColor}
                btnTextColor={MatchMatePalette.secondaryTextColor}
                btnClicked={resetPassword}
                iconComponent={''}
              />
            </>
          )
        ) : (
          <>
            <HeaderStepText>
              Votre mot de passe a été changé avec succés !:
            </HeaderStepText>

            <TextDescriptionForgetPass>
              Veuillez vous connecter maintenant avec votre nouveau mot de passe
              que vous venez de changé
            </TextDescriptionForgetPass>
            <ButtonAuthComponent
              btnText="Connexion"
              backgroundColor={MatchMatePalette.darkBackgroundColor}
              btnTextColor={MatchMatePalette.secondaryTextColor}
              btnClicked={()=>{navigation.navigate('Signin')}}
              iconComponent={''}
            />
          </>
        )}
      </ContainerScreen>
    </ContainerPass>
  );
};

export default PasswordForgottenScreen;
