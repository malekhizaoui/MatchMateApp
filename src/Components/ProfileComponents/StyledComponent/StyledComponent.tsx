import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import {MatchMatePalette} from '../../../assets/color-palette/index';
import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../assets/Styles/index';

export const PropertyContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TextProperty = styled.Text`
  font-size: 16px;
  color: ${MatchMatePalette.primaryColor};
  margin-left: 20px;
  font-weight: 600;
`;


//Input style
export const ContainerInput=styled.View`
width: 100%;
height: 70px;
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
font-size:17px;
fontWeight:500
`

export const TextInputStyle =styled.TextInput`
color:grey;
margin-bottom:10px;
font-size:15px

`

export const IconStyle =styled.View`
width:50px;
align-items:center;
padding-top:2px
`