import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import { MatchMatePalette } from '../../../assets/color-palette/index';
import {
    fontSizeTitleScreen,
    fontSizeLegendIcon,
    fontSizeSubTitleScreen,
    fontSizeTextScreen,
    ContainerAppStyle
  } from '../../../assets/Styles/index';

//Input style
  export const ContainerInput=styled.View`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: 1.5px solid white;
  margin-bottom:20px;

  `
  export const ContainerContentInput=styled.View`
    padding:10px;
    display:flex;
    flex-direction:row;
  `
  export const ContentInput=styled.View`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:90%;
  padding:2px
  `

  export const TextTitleInput =styled.Text`
  color:${MatchMatePalette.primaryColor};
  ${fontSizeTextScreen};
  fontWeight:500
  `

  export const TextInputStyle =styled.TextInput`
  color:grey;
  margin-bottom:10px
  `

  export const IconStyle =styled.View`
  width:50px;
  align-items:center;
  padding-top:2px
  `


// Button style
  export const ButtonStyle=styled.TouchableOpacity`
  width:100%;
  height :50px;
  backgroundColor:${MatchMatePalette.primaryColor};
  justify-content:center;
  align-items:center;
  border-radius: 5px;
  margin-bottom:5px;
  flex-direction:row
  `
  export const TextButton =styled.Text`
  color:white;
  margin-left:10px
  `

  //navigateBack style