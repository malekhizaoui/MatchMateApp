import { StatusBar, TouchableOpacity, View } from 'react-native';
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
import { InputAuthComponent } from '../../../Components/AuthComponents/InputAuthComponent';
import useAuth from './useAuth/useAuth';
import UserNameIconSVG from '../../../assets/Icons/svg/UsernameIconSVG';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
import { useTranslation } from 'react-i18next';
import AgeIconSVG from '../../../assets/Icons/svg/AgeIconSV';

const SignUpScreen = ({ navigation }: any) => {
  const palette = usePalette();
  const { t, i18n } = useTranslation();

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
