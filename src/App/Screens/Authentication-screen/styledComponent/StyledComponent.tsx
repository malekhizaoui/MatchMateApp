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
    ${ContainerAppStyle}
  `
  export const ContainerScreen=styled.View`
    display:flex;
    flex:1;
    width:85%;
  `
  export const HeaderRegisterScreen =styled.View`
    margin-top:50px
  `
  
  export const HeaderTitleText=styled.Text`
    ${fontSizeTitleScreen};
    color:white;
    font-weight:500;
    text-align:center;
  `
  export const HeaderText=styled.Text`
    ${fontSizeSubTitleScreen};
    color:white;
    font-weight:500
  `

  export const ContainerForm=styled.View`
  margin-top:40px;
  display:flex;
  justify-content:center;
  align-items:center
  `

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
  justify-content:center;
  align-items:center;
  `

  export const SeperateLine =styled.View`
  width:100%;
  height:1.5px;
  backgroundColor:grey;
  margin-bottom:20px;
  `
  export const ButtonStyle=styled.TouchableOpacity`
  width:100%;
  height :50px;
  backgroundColor:${MatchMatePalette.primaryColor};
  justify-content:center;
  align-items:center;
  border-radius: 5px;
  margin-bottom:5px
  `
  export const TextButton =styled.Text`
  color:white
  `



  export const HeaderConnexionScreen =styled.View`
    margin-top:50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
  `
  export const LogoAppStyle =styled.View`
  height:150px;
  width:150px;
  border-radius:75px;
  backgroundColor:${MatchMatePalette.primaryColor};
  margin-bottom:20px
  `

  export const TextpasswordForgotten=styled.Text`
    color:white;
    margin-top:20px;
    ${fontSizeTextScreen};
    font-weight:bold
  `
  export const ContainerDivideText=styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
    margin-bottom:20px;
    margin-top:20px;

  `

  export const LineStyle=styled.View`
  flex: 1;
  height: 1;
  backgroundColor: white
  `
  export const TextDivide =styled.Text`
  marginHorizontal: 10;
  fontSize: 16;
  color: white;
  `


  export const ContainerScreenMethod=styled.View`
  display:flex;
  flex:1;
  width:85%;
  justify-content:space-between
`

  export const ContainerBtnMethod=styled.View`
    margin-bottom:50px
  `
  export const TextDescription =styled.Text`
  color:grey;
  text-align:center;
  width:80%;
  align-self:center;
  margin-bottom:20px
  `

  export const ButtonStyleFacebook=styled.TouchableOpacity`
  width:100%;
  height :50px;
  backgroundColor:#1d5dc4;
  justify-content:center;
  align-items:center;
  border-radius: 5px;
  margin-bottom:5px
  `
  export const ButtonStyleGoogle=styled.TouchableOpacity`
  width:100%;
  height :50px;
  backgroundColor:white;
  justify-content:center;
  align-items:center;
  border-radius: 5px;
  margin-bottom:5px
  `

  export const TextButtonGoogle =styled.Text`
  color:black
  `