import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../../assets/Styles/index';
import { Theme } from '../../../models/Theme';

interface PaletteProps {
  palette: Theme;
}

export const ContainerApp = styled.SafeAreaView<PaletteProps>`
  flex: 1;
  background-color: ${({ palette }) => palette.primaryColor};
  align-items: center;
`;

export const ContainerAppReviews = styled.SafeAreaView<PaletteProps>`
  flex: 1;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  align-items: center;
`;

export const ContainerAppDetailGame = styled.SafeAreaView<PaletteProps>`
  flex: 1;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  align-items: center;
`;

export const TextHeader = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.darkBackgroundColor};
  ${fontSizeTextScreen};
  font-weight: 800;
  margin-top: 30px;
`;

export const TextNameProfile = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: 700;
  color: ${({ palette }) => palette.whiteColor};
`;

export const LineSperator = styled.View<PaletteProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ palette }) => palette.secondaryTextColor};
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const ProfileHeaderContainer = styled.View<PaletteProps>`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ palette }) => palette.primaryColor};
  position:relative;
`;

export const ImageProfile = styled.Image<PaletteProps>`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-color: ${({ palette }) => palette.whiteColor};
  border-width: 2px;
  margin: 10px;
`;

export const HeaderTitleContainer = styled.View`
  display: flex;
  margin: 10px;
  align-items: center;
`;

export const ProfilePropertiesContainer = styled.View<PaletteProps>`
  width: 100%;
  height: 70%;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  display: flex;
  padding-top: 40px;
  padding-bottom: 70px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePropertyContent = styled.View`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const EditProfileHeaderContainer = styled.View<PaletteProps>`
  width: 100%;
  height: 28%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ palette }) => palette.primaryColor};
`;

export const EditProfilePropertiesContainer = styled.View<PaletteProps>`
  width: 100%;
  height: 72%;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  display: flex;
  padding-bottom: 70px;
  justify-content: space-between;
  align-items: center;
`;

export const LineSperatorProperty = styled.View<PaletteProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ palette }) => palette.secondaryTextColor};
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const EditIconContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  width: 45%;
  align-items: center;
`;

export const EditIcon = styled.View<PaletteProps>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ palette }) => palette.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TxtBtn = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.whiteColor};
  font-weight: 600;
`;

export const BtnContainer = styled.TouchableOpacity<PaletteProps>`
  background-color: ${({ palette }) => palette.secondaryColor};
  width: 70%;
  height: 50px;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const GameHistoryHeaderContainer = styled.View<PaletteProps>`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ palette }) => palette.primaryColor};
`;

export const GameHistoryPropertiesContainer = styled.ScrollView<PaletteProps>`
  width: 100%;
  height: 80%;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  display: flex;
  padding-top: 20px;
  padding-bottom: 70px;
`;

export const GamePropertyContent = styled.View`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerDetailScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 90%;
  flex-direction: column;
`;
