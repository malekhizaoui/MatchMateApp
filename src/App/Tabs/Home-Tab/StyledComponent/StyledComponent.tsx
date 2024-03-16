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


export const ContainerScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 100%;
`;
export const ContainerDetailScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 85%;
  margin-top:20px
`;
export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
  width:85%;
  align-self:center;
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
  width: 85%;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  align-self: center;
  margin-top: 10px;

`;
export const TextInputStyle =styled.TextInput`
color:grey;
`

export const  TextContainer =styled.View`
  width:85%;
  align-self:center;
  margin-top:20px;
  display:flex;
  justify-content:space-between;
  flex-direction:row
`
export const TextTitleList= styled.Text`
color:white;
font-size:17px;
font-weight:600

`
export const TextCheckAllList= styled.Text`
color:${MatchMatePalette.primaryColor};
font-size:15px;
textDecorationLine:underline;
`
export const ListContainer=styled.ScrollView`
width:100%;
height:250px;
display:flex;
flex-direction:row;
margin-top:10px;
`

export const FieldContent=styled.TouchableOpacity`
height:90%;
border-radius:20px;
margin-left:10px;
width:185px;
background-color:${MatchMatePalette.primaryColor};
border:2px white;
align-self:center;
`

export const StadiumContainer=styled.TouchableOpacity`
height:60%;
border-radius:20px;
margin-left:10px;
width:185px;
background-color:${MatchMatePalette.darkBackgroundColor};
border:2px white;
flex-direction:column;
margin-top:10px
`

export const StadiumImage=styled.View`
width:100%;
height:70%;
border-radius:17px;
background-color:${MatchMatePalette.primaryColor};
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
