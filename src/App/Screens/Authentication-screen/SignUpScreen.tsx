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
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import {InputAuthComponent} from '../../../Components/AuthComponents/InputAuthComponent';
import useAuth from './useAuth/useAuth';
import UserNameIconSVG from '../../../assets/Icons/svg/UsernameIconSVG';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import AgeIconSVG from '../../../assets/Icons/svg/AgeIconSV';
import BackIconSVG from '../../../assets/Icons/svg/BackIconSVG';
import NavigateBack from '../../../Components/NavigateBack';


const SignUpScreen = ({navigation}: any) => {
  const palette = usePalette();

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
    loading
  } = useAuth(navigation);
  
  return (
    <ContainerApp palette={palette}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.darkBackgroundColor}
      />
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <HeaderRegisterScreen>
          <View style={{marginBottom:20}}>
          <NavigateBack navigation={navigation}/>
          </View>
          <HeaderText palette={palette}>S'inscrire</HeaderText>
          <HeaderText palette={palette}>Rapide et facile</HeaderText>
        </HeaderRegisterScreen>
        
        <ContainerForm>
          <InputAuthComponent
            placeholder="Ex : email@example.com"
            inputName="Adresse mail"
            setValue={setEmail}
            valueInput={email}
            iconComponent={ <MailIconSVG color={palette.primaryColor}
            />}
          />
          <InputAuthComponent
            placeholder="Choisissez un mot de passe"
            inputName="MOT DE PASSE"
            setValue={setPassword}
            valueInput={password}
            iconComponent={ <PasswordIconSVG color={palette.primaryColor} />}

          />
          <SeperateLine></SeperateLine>
          <InputAuthComponent
            placeholder="Votre prénom"
            inputName="PRENOM"
            setValue={setFirstName}
            valueInput={firstName}
            iconComponent={ <UserNameIconSVG color={palette.primaryColor} />}

          />
          <InputAuthComponent
            placeholder="Votre nom"
            inputName="NOM"
            setValue={setLastName}
            valueInput={lastName}
            iconComponent={ <UserNameIconSVG color={palette.primaryColor} />}

          />
          <InputAuthComponent
            placeholder="Votre age"
            inputName="AGE"
            setValue={setAge}
            valueInput={age}
            iconComponent={ <AgeIconSVG color={palette.primaryColor} />}

          />
          <ButtonAuthComponent
            btnText="Créer un compte"
            backgroundColor={palette.primaryColor}
            btnTextColor={palette.whiteColor}
            btnClicked={registerUser}
            iconComponent={""}
            loading={loading}
          />
        </ContainerForm>
      </ContainerScreen>
    </ContainerApp>
  );
};

export default SignUpScreen;
