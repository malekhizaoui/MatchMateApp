import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle
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

export const TextHeader = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.lightBackgroundColor};
  ${fontSizeTextScreen};
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const TextNameLeader = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: 600;
  color: ${({ palette }) => palette.whiteColor};
`;

export const TextPointLeader = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: 400;
  color: ${({ palette }) => palette.whiteColor};
`;

export const LineSperator = styled.View<PaletteProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ palette }) => palette.whiteColor};
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const LeaderHeaderContainer = styled.View<PaletteProps>`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ palette }) => palette.primaryColor};
  margin-top: 15%;
  position: relative;
`;

export const UserConatinerLeaders = styled.View`
  align-items: center;
  position: absolute;
  bottom: 25px;
  margin-bottom: 30px;
`;

export const ConatinerLeaders = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserConatinerLeadersA = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const UserConatinerLeadersB = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const ImageLeader = styled.Image<PaletteProps>`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-color: ${({ palette }) => palette.lightBackgroundColor};
  border-width: 4px;
  margin: 10px;
`;

export const ImageLeaderA = styled.Image<PaletteProps>`
  width: 110px;
  height: 110px;
  border-radius: 60px;
  border-color: ${({ palette }) => palette.lightBackgroundColor};
  border-width: 4px;
  margin: 10px;
`;

export const HeaderTitleContainer = styled.View`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const LeaderPropertiesContainer = styled.ScrollView<PaletteProps>`
  width: 100%;
  height: 65%;
  background-color: ${({ palette }) => palette.darkBackgroundColor};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  display: flex;
  padding-top: 40px;
  padding-bottom: 30px;
`;

export const LeaderPropertyContent = styled.View`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 25px;
`;
