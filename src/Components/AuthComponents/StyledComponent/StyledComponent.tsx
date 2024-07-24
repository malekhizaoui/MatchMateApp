import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {MatchMatePalette} from '../../../assets/color-palette/index';
import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../assets/Styles/index';

//Input style
export const ContainerInput = styled.View`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: 1px solid ${MatchMatePalette.secondaryTextColor};
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
`;

export const TextTitleInput = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  ${fontSizeTextScreen};
  font-weight: 500;
  padding: 0;
`;

export const TextInputStyle = styled.TextInput`
  color: grey;
`;

export const IconStyle = styled.View`
  width: 50px;
  align-items: center;
  padding-top: 2px;
`;

// Button style
export const ButtonStyle = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  backgroundcolor: ${MatchMatePalette.primaryColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 5px;
  flex-direction: row;
`;
export const TextButton = styled.Text`
  color: ${MatchMatePalette.secondaryTextColor};
  margin-left: 10px;
  font-weight:600;
`;

//
export const ContainerInputPassForget = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color:${MatchMatePalette.darkBackgroundColor};
   padding: 10px;
  display: flex;
  flex-direction: row;
  align-items:center;
`;