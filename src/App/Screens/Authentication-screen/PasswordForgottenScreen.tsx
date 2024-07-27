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
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import useAuth from './useAuth/useAuth';
import LockerIconSVG from '../../../assets/Icons/svg/LockerIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
import {InputPassForgetComponent} from '../../../Components/AuthComponents/InputPassForgetComponent';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import TickIconSVG from '../../../assets/Icons/svg/TickIconSVG';



const PasswordForgottenScreen = ({navigation, route}: any) => {
  const palette = usePalette();

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
    // setBarColorCntxt(palette.primaryColor);
  }, []);
  console.log('route', route);

  return (
    <ContainerPass palette={palette}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.primaryColor}
      />
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View>
          <NavigateBack navigation={navigation} color="white" />
        </View>
        <ImagePasswordContainer palette={palette}>
          {step !== 3 ? (
            <LockerIconSVG color={palette.primaryColor} />
          ) : (
            <TickIconSVG color={palette.secondaryTextColor} />
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
                  <MailIconSVG color={palette.primaryColor} />
                }
                placeholder={'Tapez votre adresse mail ...'}
              />
              <TextDescriptionForgetPass>
                Vous recevrez un code de confirmation sur votre adresse mail
                pour récupérer votre compte .
              </TextDescriptionForgetPass>
              <ButtonAuthComponent
                btnText="Continuer"
                backgroundColor={palette.darkBackgroundColor}
                btnTextColor={palette.secondaryTextColor}
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
                  <PasswordIconSVG color={palette.primaryColor} />
                }
                placeholder={'Nouveau mot de passe ...'}
              />
              <InputPassForgetComponent
                setValue={setNewPassword}
                valueInput={newPassword}
                iconComponent={
                  <PasswordIconSVG color={palette.primaryColor} />
                }
                placeholder={'Nouveau mot de passe ...'}
              />
              <TextDescriptionForgetPass>
                Une fois vous creéz un Nouveau mot de puis vous avez l'acces à
                nouveau à votre compte
              </TextDescriptionForgetPass>
              <ButtonAuthComponent
                btnText="Continuer"
                backgroundColor={palette.darkBackgroundColor}
                btnTextColor={palette.secondaryTextColor}
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
              backgroundColor={palette.darkBackgroundColor}
              btnTextColor={palette.secondaryTextColor}
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
