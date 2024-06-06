import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import { MatchMatePalette } from '../../../../assets/color-palette';
import {
    fontSizeTitleScreen,
    fontSizeLegendIcon,
    fontSizeSubTitleScreen,
    fontSizeTextScreen,
    ContainerAppStyle
  } from '../../../../assets/Styles/index';

  export const ContainerApp =styled.SafeAreaView`
  flex:1;
  backgroundColor:${MatchMatePalette.primaryColor};
  align-items:center;
  `

export const TextHeader=styled.Text`
color: ${MatchMatePalette.darkBackgroundColor};
font-size:16px;
font-weight:600;
margin-top:30px;
`

export const TextNameProfile=styled.Text`
font-size: 15px;
font-weight:600;
color: ${MatchMatePalette.darkBackgroundColor};

`
export const LineSperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top:20px;
  margin-bottom:35px
`;
