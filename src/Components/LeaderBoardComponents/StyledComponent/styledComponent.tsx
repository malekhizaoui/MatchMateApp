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

interface ContainerRankBoardProps {
    backgroundColor?: string; // Define backgroundColor prop
  }
export const ContainerRankBoard=styled.TouchableOpacity<ContainerRankBoardProps>`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
margin-bottom:20px;
background-color: ${({ backgroundColor }) => backgroundColor || '#262626'};
padding:5px;
border-radius:15px
`
export const ImageRankContainer=styled.View`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
`
export const ImageUser=styled.Image`
width:40px;
height:40px;
border-radius:20px;
`
export const TextNameLeader = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin:5px
`;
export const TextPointLeader = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: white;
  margin:5px

`;


