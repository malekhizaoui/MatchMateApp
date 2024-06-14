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
interface HeaderDetailContainerProps {
  backgroundColor?: string; // Define backgroundColor prop
}
interface TxtButtonProps {
  color?: string; // Define backgroundColor prop
}
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
  background-color: ${({ backgroundColor }) => backgroundColor || '#262626'};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

export const TextHeaderTime = styled.Text`
  color: white;
  font-size: 17px;
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
export const TxtdetailLabel = styled.Text`
  color: ${MatchMatePalette.lightBackgroundColoe};
  font-weight: bold;
  font-size: 15px;
  margin-left: 10px;
`;
export const TextDesciption = styled.Text`
  color: white;
  font-size: 15px;
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
  color: ${({ color }) => color || '#262626'};
  font-size: 15px;
  font-weight: 600;
`;