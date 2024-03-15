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

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
`;
export const ContainerScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 85%;
`;
export const ExploreRegionContainer = styled.View`
  display: flex;
  flex-direction: column;
`;
export const UpdateRegionContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const RegionExploreTxt = styled.Text`
  color: white;
  font-size: 15px;
`;
export const RegionTxt = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-size: 32px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  align-self: center;
  margin-top: 10px;

`;
export const TextInputStyle =styled.TextInput`
color:grey;
`
