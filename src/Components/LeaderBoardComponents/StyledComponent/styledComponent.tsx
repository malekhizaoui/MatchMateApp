import styled from 'styled-components/native';


import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../assets/Styles/index';
import { Theme } from '../../../App/models/Theme';

interface PaletteProps {
  palette: Theme;
}

interface ContainerRankBoardProps extends PaletteProps {
  backgroundColor?: string; // Define backgroundColor prop
}

export const ContainerRankBoard = styled.TouchableOpacity<ContainerRankBoardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: ${({ backgroundColor, palette }) => backgroundColor || palette.lightBackgroundColor};
  padding: 5px;
  border-radius: 15px;
`;

export const ImageRankContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageUser = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const TextNameLeader = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: 600;
  color: ${({ palette }) => palette.secondaryTextColor};
  margin: 5px;
`;

export const TextPointLeader = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: 400;
  color: ${({ palette }) => palette.secondaryTextColor};
  margin: 5px;
`;
