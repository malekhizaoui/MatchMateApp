import {  StatusBar, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  ContainerApp,
  ContainerScreen,
  HeaderRegisterScreen,
  HeaderText,
  ContainerForm,
  SeperateLine,
} from './styledComponent/StyledComponent';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import {InputAuthComponent} from '../../../Components/AuthComponents/InputAuthComponent';
import useAuth from './useAuth/useAuth';
import UserNameIconSVG from '../../../assets/Icons/svg/UsernameIconSVG';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import AgeIconSVG from '../../../assets/Icons/svg/AgeIconSV';
import BackIconSVG from '../../../assets/Icons/svg/BackIconSVG';
import NavigateBack from '../../../Components/NavigateBack';

const SignUpScreen = ({navigation}: any) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    age,
    setAge,
    registerUser,
  } = useAuth(navigation);
  
  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <HeaderRegisterScreen>
          <View style={{marginBottom:20}}>
          <NavigateBack navigation={navigation}/>
          </View>
          <HeaderText>S'inscrire</HeaderText>
          <HeaderText>Rapide et facile</HeaderText>
        </HeaderRegisterScreen>
        
        <ContainerForm>
          <InputAuthComponent
            placeholder="Ex : email@example.com"
            inputName="Adresse mail"
            setValue={setEmail}
            valueInput={email}
            iconComponent={ <MailIconSVG color={MatchMatePalette.primaryColor}
            />}
          />
          <InputAuthComponent
            placeholder="Choisissez un mot de passe"
            inputName="MOT DE PASSE"
            setValue={setPassword}
            valueInput={password}
            iconComponent={ <PasswordIconSVG color={MatchMatePalette.primaryColor} />}

          />
          <SeperateLine></SeperateLine>
          <InputAuthComponent
            placeholder="Votre prénom"
            inputName="PRENOM"
            setValue={setFirstName}
            valueInput={firstName}
            iconComponent={ <UserNameIconSVG color={MatchMatePalette.primaryColor} />}

          />
          <InputAuthComponent
            placeholder="Votre nom"
            inputName="NOM"
            setValue={setLastName}
            valueInput={lastName}
            iconComponent={ <UserNameIconSVG color={MatchMatePalette.primaryColor} />}

          />
          <InputAuthComponent
            placeholder="Votre age"
            inputName="AGE"
            setValue={setAge}
            valueInput={age}
            iconComponent={ <AgeIconSVG color={MatchMatePalette.primaryColor} />}

          />
          <ButtonAuthComponent
            btnText="Créer un compte"
            backgroundColor={MatchMatePalette.primaryColor}
            btnTextColor={MatchMatePalette.whiteColor}
            btnClicked={registerUser}
            iconComponent={""}
          />
        </ContainerForm>
      </ContainerScreen>
    </ContainerApp>
  );
};

export default SignUpScreen;
