import { StatusBar, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useContext } from 'react';
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
import { AuthContext } from '../../../services/Context/AuthContext';

// Functional component for the SignInScreen
const SignInScreen = ({ navigation }: any) => {
  // Retrieve color palette for styling
  const palette = usePalette();
  // Determine the current color scheme (light or dark)
  const colorScheme = useColorScheme();
  // Translation functions
  const { t } = useTranslation();
  // Retrieve light mode status from context
  const { lightModeStatus } = useContext(AuthContext);

  // Destructure authentication-related methods and properties
  const { email, setEmail, password, setPassword, loginUser, loading } = useAuth(navigation);

  return (
    // Main container with styling
    <ContainerApp palette={palette}>
      <ContainerScreen showsVerticalScrollIndicator={false}>
        {/* Back navigation button */}
        <View>
          <NavigateBack navigation={navigation} />
        </View>
        
        {/* Header section with logo and title */}
        <HeaderConnexionScreen>
          <LogoApp
            // Conditional logo based on color scheme and light mode status
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
          <HeaderTitleText palette={palette}>
            {/* Translated text for sign-in header */}
            {t("authentication.signInToMatchMate")}
          </HeaderTitleText>
        </HeaderConnexionScreen>
        
        {/* Form container for authentication inputs and buttons */}
        <ContainerForm>
          {/* Email input field */}
          <InputAuthComponent
            placeholder={t("authentication.emailPlaceholder")}
            inputName={t("authentication.emailAddress")}
            setValue={setEmail}
            valueInput={email}
            iconComponent={<MailIconSVG color={palette.primaryColor} />}
          />
          
          {/* Password input field */}
          <InputAuthComponent
            placeholder={t("authentication.passwordPlaceholder")}
            inputName={t("authentication.password")}
            setValue={setPassword}
            valueInput={password}
            secureTextEntry={true}
            iconComponent={<PasswordIconSVG color={palette.primaryColor} />}
          />
          
          {/* Sign-in button */}
          <ButtonAuthComponent
            btnText={t("authentication.signIn")}
            backgroundColor={palette.primaryColor}
            btnTextColor={palette.whiteColor}
            btnClicked={loginUser}
            iconComponent={''}
            loading={loading}
          />
          
          {/* Forgot password link */}
          <TouchableOpacity onPress={() => { navigation.navigate('PasswordForgotten') }}>
            <TextpasswordForgotten palette={palette}>
              {t("authentication.forgotPassword")}
            </TextpasswordForgotten>
          </TouchableOpacity>
          
          {/* Divider with text "or" */}
          <ContainerDivideText>
            <LineStyle palette={palette}></LineStyle>
            <TextDivide palette={palette}>
              {t("authentication.or")}
            </TextDivide>
            <LineStyle palette={palette}></LineStyle>
          </ContainerDivideText>
          
          {/* Button to navigate to sign-up screen */}
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
