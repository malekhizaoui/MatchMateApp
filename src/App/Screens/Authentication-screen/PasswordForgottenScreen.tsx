import { StatusBar, View } from 'react-native';
import React, { useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';

const PasswordForgottenScreen = ({ navigation, route }: any) => {
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

  const { t } = useTranslation();

  return (
    <ContainerPass palette={palette}>
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
