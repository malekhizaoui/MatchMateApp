// StyledComponents.js

import styled from 'styled-components/native';
import { MatchMatePalette } from '../../../../assets/color-palette';

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
  background-color: #262626;
  border-radius: 30px;
  margin-top: 20px;
  border-width: 1px;
  border-color: white;
  margin-bottom: 30px;
`;

export const BookingImage = styled.Image`
  width: 100%;
  height: 50%;
  background-color: white;
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
  font-size: 17px;
  color: white;
  margin-top: 20px;
  font-weight: 700;
`;

export const BookingDetailText = styled.Text`
  font-size: 15px;
  color: ${MatchMatePalette.primaryColor};
  margin-top: 20px;
  font-weight: 700;
  text-decoration-line: underline;
`;

export const BookingDate = styled.Text`
  font-size: 15px;
  color: grey;
  margin-top: 10px;
  font-weight: 600;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: ${MatchMatePalette.primaryColor};
  width: 90%;
  height: 50px;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-self: center;
  margin-top: 20px;
`;

export const CancelButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 600;
  text-align: center;
`;
