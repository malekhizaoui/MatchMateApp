import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import { MatchMatePalette } from '../../../assets/color-palette/index';
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

interface HeaderDetailContainerProps extends PaletteProps {
  backgroundColor?: string;
}

interface TxtButtonProps extends PaletteProps {
  color?: string;
}

export const PropertyContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TextProperty = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.secondaryTextColor};
  margin-left: 20px;
  font-weight: 600;
`;

// Input style
export const ContainerInput = styled.View`
  width: 100%;
  height: 70px;
`;

export const ContainerContentInput = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const ContentInput = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  padding: 2px;
`;

export const TextTitleInput = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
  font-size: 17px;
  font-weight: 500;
`;

export const TextInputStyle = styled.TextInput`
  color: grey;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const IconStyle = styled.View`
  width: 50px;
  align-items: center;
  padding-top: 2px;
`;

// GameHistory design
export const MatchDetailContainer = styled.View`
  display: flex;
  width: 110%;
  margin-top: 10px;
`;

export const DayDetailContainer = styled.View`
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: grey;
`;

export const HeaderDetailContainer = styled.View<HeaderDetailContainerProps>`
  width: 100%;
  background-color: ${({ backgroundColor, palette }) => backgroundColor || palette.lightBackgroundColor};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

export const TextHeaderTime = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.whiteColor};
  ${fontSizeTextScreen};
  font-weight: bold;
  margin: 10px;
`;

export const ContentMatchDetail = styled.View`
  width: 90%;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TxtdetailLabel = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.lightColor};
  font-weight: bold;
  ${fontSizeTextScreen};
  margin-left: 10px;
`;

export const TextDesciption = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
  margin-left: 10px;
  margin-bottom: 4px;
  margin-top: 4px;
  font-weight: 600;
`;

export const Seperator = styled.View`
  width: 90%;
  height: 1px;
  background-color: grey;
  margin-bottom: 20px;
`;

export const BtnTxtContainer = styled.View`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const TxtButton = styled.Text<TxtButtonProps>`
  color: ${({ color, palette }) => color || palette.lightBackgroundColor};
  ${fontSizeTextScreen};
  font-weight: 600;
`;

export const GameHistoryDetailContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 650px;
  margin-top: 10px;
  margin-bottom: 20px;
  flex: 1;
`;

export const FieldStyleContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex: 6;
  align-item: center;
  position: relative;
`;

export const FieldImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
