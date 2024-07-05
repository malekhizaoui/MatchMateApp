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
export const ContainerAppReviews = styled.SafeAreaView`
  flex: 1;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  align-items: center;
`;
export const ContainerAppDetailGame = styled.SafeAreaView`
  flex: 1;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: ${MatchMatePalette.darkBackgroundColor};
  ${fontSizeTextScreen};
  font-weight: 800;
  margin-top: 30px;
`;

export const TextNameProfile = styled.Text`
  ${fontSizeTextScreen};
  font-weight: 700;
  color: ${MatchMatePalette.whiteColor};
`;
export const LineSperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${MatchMatePalette.whiteColor};
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const ProfileHeaderContainer = styled.View`
  width: 100%;
  height: 30%;
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
  border-color: ${MatchMatePalette.whiteColor};
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
  height: 70%;
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
  height: 28%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${MatchMatePalette.primaryColor};
`;
export const EditProfilePropertiesContainer = styled.View`
  width: 100%;
  height: 72%;
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
  background-color: ${MatchMatePalette.whiteColor};
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const EditIconContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 0; /* Position at the bottom */
  width: 45%;
  align-items: center;
`;

export const EditIcon = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${MatchMatePalette.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TxtBtn = styled.Text`
  ${fontSizeTextScreen};
  color: ${MatchMatePalette.whiteColor};
  font-weight: 600;
`;

export const BtnContainer = styled.TouchableOpacity`
  background-color: ${MatchMatePalette.secondaryColor};
  width: 70%;
  height: 50px;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

// GameHistory Edit

export const GameHistoryHeaderContainer = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${MatchMatePalette.primaryColor};
`;

export const GameHistoryPropertiesContainer = styled.ScrollView`
  width: 100%;
  height: 80%;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  display: flex;
  padding-top: 2 0px;
  padding-bottom: 70px;
`;

export const GamePropertyContent = styled.View`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

// GamehistoryDetailScreen
export const ContainerDetailScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 90%;
  flex-direction: column;
`;


