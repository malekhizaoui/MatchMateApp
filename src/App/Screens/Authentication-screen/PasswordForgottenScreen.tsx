import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { useTranslation } from 'react-i18next';

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
import { InputPassForgetComponent } from '../../../Components/AuthComponents/InputPassForgetComponent';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import MailIconSVG from '../../../assets/Icons/svg/MailIconSVG';
import PasswordIconSVG from '../../../assets/Icons/svg/PasswordIconSVG';
import TickIconSVG from '../../../assets/Icons/svg/TickIconSVG';

const PasswordForgottenScreen = ({ navigation, route }: any) => {
  // Get color palette for theming
  const palette = usePalette();
  
  // Destructure authentication-related functions and states from the custom hook
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

  // Update status bar color based on the current palette (commented out)
  useEffect(() => {
    // setBarColorCntxt(palette.primaryColor);
  }, [palette.primaryColor]);

  // Translation hook for internationalization
  const { t } = useTranslation();

  return (
    <ContainerPass palette={palette}>
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View>
          {/* NavigateBack component for going back to the previous screen */}
          <NavigateBack navigation={navigation} color="white" />
        </View>
        
        {/* Display different icons based on the current step */}
        <ImagePasswordContainer palette={palette}>
          {step !== 3 ? (
            <LockerIconSVG color={palette.primaryColor} />
          ) : (
            <TickIconSVG color={palette.secondaryTextColor} />
          )}
        </ImagePasswordContainer>

        {/* Conditional rendering based on the current step */}
        {step !== 3 ? (
          !route.params ? (
            <>
              {/* Step 1: Enter Email */}
              <HeaderStepText>{t("authentication.step1of2")}</HeaderStepText>
              <HeaderStepText>{t("authentication.enterYourInfo")}</HeaderStepText>
              <InputPassForgetComponent
                setValue={setEmail}
                valueInput={email}
                iconComponent={<MailIconSVG color={palette.primaryColor} />}
                placeholder={t("authentication.emailPlaceholder")}
                secureTextEntry={true}
              />
              <TextDescriptionForgetPass>
                {t("authentication.confirmationCodeDescription")}
              </TextDescriptionForgetPass>
              <ButtonAuthComponent
                btnText={t("authentication.continue")}
                backgroundColor={palette.darkBackgroundColor}
                btnTextColor={palette.secondaryTextColor}
                btnClicked={resentCode}
                iconComponent={''}
              />
            </>
          ) : (
            <>
              {/* Step 2: Enter New Password */}
              <HeaderStepText>{t("authentication.step2of2")}</HeaderStepText>
              <HeaderStepText>{t("authentication.enterNewPassword")}</HeaderStepText>
              <InputPassForgetComponent
                setValue={setPassword}
                valueInput={password}
                iconComponent={<PasswordIconSVG color={palette.primaryColor} />}
                placeholder={t("authentication.newPassword")}
              />
              <InputPassForgetComponent
                setValue={setNewPassword}
                valueInput={newPassword}
                iconComponent={<PasswordIconSVG color={palette.primaryColor} />}
                placeholder={t("authentication.newPassword")}
              />
              <TextDescriptionForgetPass>
                {t("authentication.newPasswordDescription")}
              </TextDescriptionForgetPass>
              <ButtonAuthComponent
                btnText={t("authentication.continue")}
                backgroundColor={palette.darkBackgroundColor}
                btnTextColor={palette.secondaryTextColor}
                btnClicked={resetPassword}
                iconComponent={''}
              />
            </>
          )
        ) : (
          <>
            {/* Step 3: Password Changed Confirmation */}
            <HeaderStepText>
              {t("authentication.passwordChanged")}
            </HeaderStepText>
            <TextDescriptionForgetPass>
              {t("authentication.connectWithNewPassword")}
            </TextDescriptionForgetPass>
            <ButtonAuthComponent
              btnText={t("authentication.signIn")}
              backgroundColor={palette.darkBackgroundColor}
              btnTextColor={palette.secondaryTextColor}
              btnClicked={() => { navigation.navigate('Signin') }}
              iconComponent={''}
            />
          </>
        )}
      </ContainerScreen>
    </ContainerPass>
  );
};

export default PasswordForgottenScreen;
