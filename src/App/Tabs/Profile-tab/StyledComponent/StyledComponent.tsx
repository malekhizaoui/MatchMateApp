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
  flex: 1;
  background-color: ${MatchMatePalette.primaryColor};
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: ${MatchMatePalette.darkBackgroundColor};
  font-size: 17px;
  font-weight: 800;
  margin-top: 30px;
`;

export const TextNameProfile = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${MatchMatePalette.darkBackgroundColor};
`;
export const LineSperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const ProfileHeaderContainer = styled.View`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${MatchMatePalette.primaryColor};
`;

export const ImageProfile = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-color: white;
  border-width: 2px;
  margin: 10px;
`;

export const HeaderTitleContainer = styled.View`
  display: flex;
  margin: 10px;
  align-items: center;
`;

export const ProfilePropertiesContainer = styled.View`
  width: 100%;
  height: 65%;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  display: flex;
  padding-top: 40px;
  padding-bottom: 70px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePropertyContent = styled.View`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

// editProfile
export const EditProfileHeaderContainer = styled.View`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${MatchMatePalette.primaryColor};
  padding-top:30px
`;
export const EditProfilePropertiesContainer = styled.View`
  width: 100%;
  height: 65%;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  display: flex;
  padding-bottom: 70px;
  justify-content: space-between;
  align-items: center;
`;

export const LineSperatorProperty = styled.View`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const EditIconContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 0 ; /* Position at the bottom */
  width: 45%;
  align-items: center;
`;

export const EditIcon = styled.View`
  width: 30px;
  height: 30px;
  border-radius:15px;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:center
`;

export const TxtBtn=styled.Text`
font-size: 16px;
  color: white;
  font-weight: 600;
`

export const BtnContainer=styled.TouchableOpacity`
 background-color: ${MatchMatePalette.secondaryColor};
  width: 70%;
  height: 50px;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`