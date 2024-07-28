import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  ContainerApp,
  HeaderTitleText,
  HeaderConnexionScreen,
  LogoAppStyle,
  ContainerScreen,
  TextValidationCode,
} from './styledComponent/StyledComponent';
import NavigateBack from '../../../Components/NavigateBack';
import TickIconSVG from '../../../assets/Icons/svg/TickIconSVG';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import ButtonAuthComponent from '../../../Components/AuthComponents/ButtonAuthComponent';
import {
  CodeField,
  Cursor
} from 'react-native-confirmation-code-field';
import useAuth from './useAuth/useAuth';


const CodeVerificationScreen = ({navigation,route}: any) => {
  const palette = usePalette();

  const {
    verifyCode,
    ref,
    props,
    value,
    setValue,
    getCellOnLayoutHandler,
    CELL_COUNT,
  } = useAuth(navigation,route);
  const styles = StyleSheet.create({
    codeFieldRoot: {marginTop: 40, marginBottom: 20},
    cell: {
      width: 50,
      height: 50,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 1,
      borderColor: palette.secondaryTextColor,
      textAlign: 'center',
      backgroundColor: palette.primaryTextColor,
      borderRadius: 5,
      color: palette.secondaryTextColor,
      alignSelf: 'center',
    },
    focusCell: {
      borderColor: palette.secondaryTextColor,
    },
  });
  return (
    <ContainerApp palette={palette}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.darkBackgroundColor}
      />
      <ContainerScreen showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}>
          <NavigateBack navigation={navigation} />
        </View>
        <HeaderConnexionScreen>
          <LogoAppStyle palette={palette}>
            <TickIconSVG color={palette.whiteColor} />
          </LogoAppStyle>
          <HeaderTitleText palette={palette}>Code de confirmation</HeaderTitleText>
        </HeaderConnexionScreen>
        <CodeField
          ref={ref}
          {...props}
          //   Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          caretHidden={false}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <TextValidationCode palette={palette}>
          Un mail a été envoyé au adresse mail suivante maiek52su@gmail.com . Si
          vous n'avez rien recu , veuillez revenir en arriére et bien vérifier
          votre adresse mail
        </TextValidationCode>
        <ButtonAuthComponent
          btnText="Valider"
          backgroundColor={palette.primaryColor}
          btnTextColor={palette.whiteColor}
          btnClicked={verifyCode}
          iconComponent={""}
        />
      </ContainerScreen>
    </ContainerApp>
  );
  
};

export default CodeVerificationScreen;


