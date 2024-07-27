import styled from 'styled-components/native';
import { usePalette } from '../../../../assets/color-palette/ThemeApp';
import { fontSizeTextScreen } from '../../../../assets/Styles';
import { Theme } from '../../../models/Theme';

interface PaletteProps {
  palette: Theme;
}

export const ContainerApp = styled.View<PaletteProps>`
  flex: 1;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  align-items: center;
  justify-content: center;
`;

export const BookingContainer = styled.View<PaletteProps>`
  display: flex;
  align-items: center;
  height: 400px;
  width: 90%;
  background-color: ${({ palette }) => palette.lightBackgroundColor};
  border-radius: 30px;
  margin-top: 20px;
  border-width: 1px;
  border-color: ${({ palette }) => palette.whiteColor};
  margin-bottom: 30px;
`;

export const BookingImage = styled.Image<PaletteProps>`
  width: 100%;
  height: 40%;
  background-color: ${({ palette }) => palette.whiteColor};
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

export const BookingTitle = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.whiteColor};
  margin-top: 20px;
  font-weight: 700;
`;

export const BookingDetailText = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.primaryColor};
  margin-top: 20px;
  font-weight: 700;
  text-decoration-line: underline;
`;

export const BookingDate = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.whiteColor};
  margin-top: 10px;
  font-weight: 600;
`;

export const CancelButton = styled.TouchableOpacity<PaletteProps>`
  background-color: ${({ palette }) => palette.primaryColor};
  width: 70%;
  height: 45px;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-self: center;
  margin-top: 20px;
`;

export const CancelButtonText = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.whiteColor};
  font-weight: 600;
  text-align: center;
`;

export const ContainerAppDetailGame = styled.SafeAreaView<PaletteProps>`
  flex: 1;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  align-items: center;
`;

export const ContainerDetailScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 90%;
  flex-direction: column;
`;

export const TextNameProfile = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: 700;
  color: ${({ palette }) => palette.whiteColor};
`;

export const BtnCheck = styled.TouchableOpacity<PaletteProps>`
  width: 70%;
  height: 40px;
  background-color: ${({ palette }) => palette.primaryColor};
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-bottom: 5px;
  flex-direction: row;
  position: absolute;
  bottom: 5px;
  align-self: center;
`;

export const TextButton = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.whiteColor};
  ${fontSizeTextScreen};
  font-weight: 600;
`;
