import React, { useContext } from 'react';
import { StatusBar, TouchableOpacity, useColorScheme, View } from 'react-native';
import { useTranslation } from 'react-i18next';

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
  HeaderRegisterScreen,
  HeaderText,
  SeperateLine,
} from './styledComponent/StyledComponent';

import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { InputAuthComponent } from '../../../Components/AuthComponents/InputAuthComponent';
import useAuth from './useAuth/useAuth';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
import { AuthContext } from '../../../services/Context/AuthContext';
import UserNameIconSVG from '../../../assets/Icons/svg/UsernameIconSVG';
import AgeIconSVG from '../../../assets/Icons/svg/AgeIconSV';

const SignInScreen = ({ navigation }: any) => {
  // Get color palette for theming
  const palette = usePalette();
  
  // Determine the color scheme (light or dark)
  const colorScheme = useColorScheme();
  
  // Translation hook for internationalization
  const { t } = useTranslation();
  
  // Access light mode status from context
  const { lightModeStatus } = useContext(AuthContext);

  // Destructure authentication-related functions and states from the custom hook
  const { email, setEmail, password, setPassword, loginUser, loading ,setFirstName,firstName,lastName,setLastName,setAge,age,registerUser} = useAuth(navigation);

  return (
    <ContainerApp palette={palette}>
    <ContainerScreen showsVerticalScrollIndicator={false}>
      <HeaderRegisterScreen>
        <View style={{ marginBottom: 20 }}>
          <NavigateBack navigation={navigation} />
        </View>
        <HeaderText palette={palette}>{t("authentication.signUp")}</HeaderText>
        <HeaderText palette={palette}>{t("authentication.quickAndEasy")}</HeaderText>
      </HeaderRegisterScreen>
      <ContainerForm>
        <InputAuthComponent
          placeholder={t("authentication.emailPlaceholder")}
          inputName={t("authentication.emailAddress")}
          setValue={setEmail}
          valueInput={email}
          iconComponent={<MailIconSVG color={palette.primaryColor} />}
        />
        <InputAuthComponent
          placeholder={t("authentication.passwordPlaceholder")}
          inputName={t("authentication.password")}
          setValue={setPassword}
          valueInput={password}
          secureTextEntry={true}
          iconComponent={<PasswordIconSVG color={palette.primaryColor} />}
        />
        <SeperateLine />
        <InputAuthComponent
          placeholder={t("authentication.firstName")}
          inputName={t("authentication.firstName")}
          setValue={setFirstName}
          valueInput={firstName}
          iconComponent={<UserNameIconSVG color={palette.primaryColor} />}
        />
        <InputAuthComponent
          placeholder={t("authentication.lastName")}
          inputName={t("authentication.lastName")}
          setValue={setLastName}
          valueInput={lastName}
          iconComponent={<UserNameIconSVG color={palette.primaryColor} />}
        />
        <InputAuthComponent
          placeholder={t("authentication.age")}
          inputName={t("authentication.age")}
          setValue={setAge}
          valueInput={age}
          iconComponent={<AgeIconSVG color={palette.primaryColor} />}
        />
        <ButtonAuthComponent
            btnText={t("authentication.createAccount")}
            backgroundColor={palette.primaryColor}
            btnTextColor={palette.whiteColor}
            btnClicked={registerUser} iconComponent={undefined}          />
        </ContainerForm>
      </ContainerScreen>
    </ContainerApp>
  );
};

export default SignInScreen;
