import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {MatchMatePalette} from '../../../../assets/color-palette';
import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../../assets/Styles/index';

export const ContainerApp = styled.SafeAreaView`
  ${ContainerAppStyle}
`;
export const ContainerScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 85%;
`;
export const HeaderRegisterScreen = styled.View`
  margin-top: 20px;
`;

export const HeaderTitleText = styled.Text`
  ${fontSizeSubTitleScreen}
  color: white;
  font-weight: 500;
  text-align: center;
  width:70%;
  margin-top:20px
`;
export const HeaderText = styled.Text`
  ${fontSizeSubTitleScreen};
  color: ${MatchMatePalette.whiteColor};
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
  margin-top:20px;
  margin-bottom:20px
`;
export const HeaderConnexionMethodScreen = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:50px
`;
export const LogoAppStyle = styled.View`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoApp = styled.Image`
  height:175px;
  width: 175px;
`;
export const TextpasswordForgotten = styled.Text`
  color: ${MatchMatePalette.whiteColor};
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

export const LineStyle = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${MatchMatePalette.whiteColor};
`;
export const TextDivide = styled.Text`
  margin-horizontal: 10px;
  ${fontSizeTextScreen};
  color: ${MatchMatePalette.whiteColor};
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
  ${fontSizeTextScreen}
`;

export const TextValidationCode = styled.Text`
  color: ${MatchMatePalette.whiteColor};
  ${fontSizeTextScreen};
  margin-top: 20px;
  margin-bottom: 20px;
`;

// forgotPassword design screen
export const ContainerPass = styled.SafeAreaView`
flex:1;
backgroundColor:${MatchMatePalette.primaryColor};
align-items:center;`;

export const ImagePasswordContainer=styled.View`
  width:160px;
  height:160px;
  border-radius:80px;
  background-color:${MatchMatePalette.darkBackgroundColor};
  align-self:center;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:40px
`
export const ResetPaswordStepsContainer=styled.View`
width:90%;

`
export const HeaderStepText = styled.Text`
  font-size:28px;
  color: white;
  font-weight: 600;
  margin-top:20px;
  margin-bottom:20px
`;
// 

