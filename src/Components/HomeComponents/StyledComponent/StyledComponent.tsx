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

  export const FieldContent=styled.TouchableOpacity`
height:100%;
border-radius:20px;
margin-left:10px;
width:185px;
align-self:center;
`

export const ImageField =styled.Image`
height:92%;
border-radius:20px;
width:182px;
align-self:center;
border:2px;


`

export const TitleCard=styled.View`
position:absolute;
height:27px;
width:90px;
border-radius:17px;
background-color:#454847;
bottom:25px;
left:12px;
align-items:center;
justify-content:center
`

export const TxtTitle=styled.Text`
font-size:13px;
color:white;
`





export const StadiumContainer=styled.TouchableOpacity`
height:60%;
border-radius:20px;
margin-left:10px;
width:185px;
border:2px white;
flex-direction:column;
margin-top:10px
`

export const StadiumImage=styled.Image`
width:100%;
height:70%;
border-radius:17px;
`
export const StadiumDescription=styled.View`
display:Flex;
flex-direction:column;
padding:5px
`
export const TitleDescription=styled.Text`
font-size:12px;
font-weight:500;
color:white;
padding-left:5px
`
export const TextDescription=styled.Text`
font-size:10px;
font-weight:500;
color:${MatchMatePalette.primaryColor};
padding-left:5px
`

