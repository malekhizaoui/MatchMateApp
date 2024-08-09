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
} from './styledComponent/StyledComponent';

import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { InputAuthComponent } from '../../../Components/AuthComponents/InputAuthComponent';
import useAuth from './useAuth/useAuth';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
import { AuthContext } from '../../../services/Context/AuthContext';

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
  const { email, setEmail, password, setPassword, loginUser, loading } = useAuth(navigation);

  return (
    <ContainerApp palette={palette}>
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View>
          {/* NavigateBack component for going back to the previous screen */}
          <NavigateBack navigation={navigation} />
        </View>

        <HeaderConnexionScreen>
          {/* Display logo with conditional source based on color scheme and light mode */}
          <LogoApp
            source={
              !lightModeStatus
                ? colorScheme === 'light'
                  ? require('../../../assets/Logos/MatchMate.png')
                  : require('../../../assets/Logos/MatchMateDarkWhite.png')
                : lightModeStatus === 'light'
                ? require('../../../assets/Logos/MatchMate.png')
                : require('../../../assets/Logos/MatchMateDarkWhite.png')
            }
          />
          {/* Display header title */}
          <HeaderTitleText palette={palette}>{t("authentication.signInToMatchMate")}</HeaderTitleText>
        </HeaderConnexionScreen>

        <ContainerForm>
          {/* Input field for email */}
          <InputAuthComponent
            placeholder={t("authentication.emailPlaceholder")}
            inputName={t("authentication.emailAddress")}
            setValue={setEmail}
            valueInput={email}
            iconComponent={<MailIconSVG color={palette.primaryColor} />}
          />
          
          {/* Input field for password */}
          <InputAuthComponent
            placeholder={t("authentication.passwordPlaceholder")}
            inputName={t("authentication.password")}
            setValue={setPassword}
            valueInput={password}
            secureTextEntry={true}
            iconComponent={<PasswordIconSVG color={palette.primaryColor} />}
          />
          
          {/* Sign In button */}
          <ButtonAuthComponent
            btnText={t("authentication.signIn")}
            backgroundColor={palette.primaryColor}
            btnTextColor={palette.whiteColor}
            btnClicked={loginUser}
            iconComponent={''}
            loading={loading}
          />
          
          {/* Link to password forgotten screen */}
          <TouchableOpacity onPress={() => { navigation.navigate('PasswordForgotten') }}>
            <TextpasswordForgotten palette={palette}>{t("authentication.forgotPassword")}</TextpasswordForgotten>
          </TouchableOpacity>
          
          {/* Divider with text */}
          <ContainerDivideText>
            <LineStyle palette={palette}></LineStyle>
            <TextDivide palette={palette}>{t("authentication.or")}</TextDivide>
            <LineStyle palette={palette}></LineStyle>
          </ContainerDivideText>
          
          {/* Button to navigate to the sign-up screen */}
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
