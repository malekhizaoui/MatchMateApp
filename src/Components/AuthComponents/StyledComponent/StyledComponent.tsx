import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
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
// Input style
export const ContainerInput = styled.View<PaletteProps>`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: 1px solid ${({ palette  }) => palette .secondaryTextColor};
  margin-bottom: 20px;
`;

export const ContainerContentInput = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const ContentInput = styled.View`
  display: flex;
  flex-direction: column;
  height: 90%;
  padding-bottom: 22px;
  width:100%  
`;

export const TextTitleInput = styled.Text<PaletteProps>`
  color: ${({ palette  }) => palette .primaryColor};
  ${fontSizeTextScreen};
  font-weight: 500;
  padding: 0;
`;

export const TextInputStyle = styled.TextInput`
  color: grey;
  width:100%
`;

export const IconStyle = styled.View`
  width: 50px;
  align-items: center;
  padding-top: 2px;
`;

// Button style
export const ButtonStyle = styled.TouchableOpacity<PaletteProps>`
  width: 100%;
  height: 50px;
  background-color: ${({ palette  }) => palette .primaryColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 5px;
  flex-direction: row;
`;

export const TextButton = styled.Text<PaletteProps>`
  color: ${({ palette  }) => palette .secondaryTextColor};
  margin-left: 10px;
  font-weight: 600;
`;

// Input field for forgotten password or similar
export const ContainerInputPassForget = styled.View<PaletteProps>`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: ${({ palette  }) => palette .darkBackgroundColor};
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
