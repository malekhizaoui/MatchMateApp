import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { ViewProps } from 'react-native';

import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../../assets/Styles/index';
import { Theme } from '../../../models/Theme';

// Define prop types for each styled component that uses palette
interface PaletteProps {
  palette: Theme;
}

export const ContainerApp = styled.SafeAreaView<PaletteProps>`
  ${ContainerAppStyle};
    background-color: ${({ palette }) => palette.darkBackgroundColor};

  
`;

export const ContainerScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 85%;
`;

export const HeaderRegisterScreen = styled.View`
  margin-top: 20px;
`;

export const HeaderTitleText = styled.Text<PaletteProps>`
  ${fontSizeSubTitleScreen}
  color: ${({ palette }) => palette.secondaryTextColor};
  font-weight: 500;
  text-align: center;
  width: 70%;
  margin-top: 20px;
`;

export const HeaderText = styled.Text<PaletteProps>`
  ${fontSizeSubTitleScreen};
  color: ${({ palette }) => palette.secondaryTextColor};
  font-weight: 500;
`;

export const ContainerForm = styled.View`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeperateLine = styled.View`
  width: 100%;
  height: 1.5px;
  background-color: grey;
  margin-bottom: 20px;
`;

export const HeaderConnexionScreen = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const HeaderConnexionMethodScreen = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const LogoAppStyle = styled.View<PaletteProps>`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ palette }) => palette.primaryColor};
`;

export const LogoApp = styled.Image`
  height: 175px;
  width: 175px;
`;

export const TextpasswordForgotten = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  margin-top: 10px;
  ${fontSizeTextScreen};
  font-weight: bold;
`;

export const ContainerDivideText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const LineStyle = styled.View<PaletteProps>`
  flex: 1;
  height: 1px;
  background-color: ${({ palette }) => palette.secondaryTextColor};
`;

export const TextDivide = styled.Text<PaletteProps>`
  margin-horizontal: 10px;
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.secondaryTextColor};
`;

export const ContainerScreenMethod = styled.View`
  display: flex;
  flex: 1;
  width: 85%;
  justify-content: space-between;
`;

export const ContainerBtnMethod = styled.View`
  margin-bottom: 50px;
`;

export const TextDescription = styled.Text`
  color: grey;
  text-align: center;
  width: 80%;
  align-self: center;
  margin-bottom: 20px;
`;

export const TextDescriptionForgetPass = styled.Text`
  color: white;
  margin-bottom: 20px;
  ${fontSizeTextScreen};
`;

export const TextValidationCode = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
  margin-top: 20px;
  margin-bottom: 20px;
`;

// forgotPassword design screen
export const ContainerPass = styled.SafeAreaView<PaletteProps>`
  flex: 1;
  background-color: ${({ palette }) => palette.primaryColor};
  align-items: center;
`;

export const ImagePasswordContainer = styled.View<PaletteProps>`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const ResetPaswordStepsContainer = styled.View`
  width: 90%;
`;

export const HeaderStepText = styled.Text`
  font-size: 28px;
  color: white;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
`;
// 
export const TextAddPicture = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.whiteColor};
  ${fontSizeTextScreen};
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const ImageProfile = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-color: white;
  border-width: 2px;
`;
