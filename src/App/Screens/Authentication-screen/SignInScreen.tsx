import { StatusBar, TouchableOpacity, useColorScheme, View } from 'react-native';
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
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { InputAuthComponent } from '../../../Components/AuthComponents/InputAuthComponent';
import useAuth from './useAuth/useAuth';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
import { useTranslation } from 'react-i18next';

const SignInScreen = ({ navigation }:any) => {
  const palette = usePalette();
  const colorScheme = useColorScheme();
  const { t, i18n } = useTranslation();

  const { email, setEmail, password, setPassword, loginUser, loading } = useAuth(navigation);

  return (
    <ContainerApp palette={palette}>
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View>
          <NavigateBack navigation={navigation} />
        </View>
        <HeaderConnexionScreen>
          <LogoApp
            source={
              colorScheme === "light"
                ? require('../../../assets/Logos/MatchMate.png')
                : require('../../../assets/Logos/MatchMateDarkWhite.png')
            }
          />
          <HeaderTitleText palette={palette}>{t("authentication.signInToMatchMate")}</HeaderTitleText>
        </HeaderConnexionScreen>
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
          <ButtonAuthComponent
            btnText={t("authentication.signIn")}
            backgroundColor={palette.primaryColor}
            btnTextColor={palette.whiteColor}
            btnClicked={loginUser}
            iconComponent={''}
            loading={loading}
          />
          <TouchableOpacity onPress={() => { navigation.navigate('PasswordForgotten') }}>
            <TextpasswordForgotten palette={palette}>{t("authentication.forgotPassword")}</TextpasswordForgotten>
          </TouchableOpacity>
          <ContainerDivideText>
            <LineStyle palette={palette}></LineStyle>
            <TextDivide palette={palette}>{t("authentication.or")}</TextDivide>
            <LineStyle palette={palette}></LineStyle>
          </ContainerDivideText>
          <ButtonAuthComponent
            btnText={t("authentication.createAccount")}
            backgroundColor={palette.primaryColor}
            btnTextColor={palette.whiteColor}
            btnClicked={() => { navigation.navigate('Signup'); }}
            iconComponent={''}
          />
        </ContainerForm>
      </ContainerScreen>
    </ContainerApp>
  );
};

export default SignInScreen;
