// StyledComponents.js

import styled from 'styled-components/native';
import { MatchMatePalette } from '../../../../assets/color-palette';
import { fontSizeTextScreen } from '../../../../assets/Styles';

export const ContainerApp = styled.View`
  flex: 1;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  align-items: center;
  justify-content: center;
`;

export const BookingContainer = styled.View`
  display: flex;
  align-items: center;
  height: 400px;
  width: 90%;
  background-color:${MatchMatePalette.lightBackgroundColor};
  border-radius: 30px;
  margin-top: 20px;
  border-width: 1px;
  border-color: ${MatchMatePalette.whiteColor};
  margin-bottom: 30px;
`;

export const BookingImage = styled.Image`
  width: 100%;
  height: 40%;
  background-color: ${MatchMatePalette.whiteColor};
  border-radius: 25px;
`;

export const BookingDetails = styled.View`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const BookingRow = styled.View`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
`;

export const BookingTitle = styled.Text`
  ${fontSizeTextScreen};
  color: ${MatchMatePalette.whiteColor};
  margin-top: 20px;
  font-weight: 700;
`;

export const BookingDetailText = styled.Text`
  ${fontSizeTextScreen};
  color: ${MatchMatePalette.primaryColor};
  margin-top: 20px;
  font-weight: 700;
  text-decoration-line: underline;
`;

export const BookingDate = styled.Text`
  ${fontSizeTextScreen};
  color: ${MatchMatePalette.whiteColor};
  margin-top: 10px;
  font-weight: 600;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: ${MatchMatePalette.primaryColor};
  width: 70%;
  height: 45px;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-self: center;
  margin-top: 20px;
`;

export const CancelButtonText = styled.Text`
  ${fontSizeTextScreen};
  color: ${MatchMatePalette.whiteColor};
  font-weight: 600;
  text-align: center;
`;


// 
export const ContainerAppDetailGame = styled.SafeAreaView`
  flex: 1;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  align-items: center;
`;
export const ContainerDetailScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 90%;
  flex-direction:column;
`;

export const TextNameProfile = styled.Text`
  ${fontSizeTextScreen};
  font-weight: 700;
  color: ${MatchMatePalette.whiteColor};

`;
export const BtnCheck = styled.TouchableOpacity`
width: 70%;
height: 40px;
background-color: ${MatchMatePalette.primaryColor};
justify-content: center;
align-items: center;
border-radius: 7px;
margin-bottom: 5px;
flex-direction: row;
position: absolute;
bottom: 5px;
align-self: center;
`;
export const TextButton = styled.Text`
color: ${MatchMatePalette.whiteColor};
${fontSizeTextScreen};
font-weight: 600;
`;