import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import { fontSizeTextScreen } from '../assets/Styles';


const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;


export const BtnContainer = styled.TouchableOpacity`
  height: ${WIDTH * 0.11}px;
  align-self: center;
  background-color: red;
  border-radius: 15px;
  margin: 5px;
  justify-content: center;
`;

export const TextBtnContainer = styled.Text`
  color: #fff;
  ${fontSizeTextScreen};
  text-align: center;
`;