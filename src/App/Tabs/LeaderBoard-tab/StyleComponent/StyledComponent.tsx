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

  export const ContainerApp = styled.SafeAreaView`
  flex: 1;
  background-color: ${MatchMatePalette.primaryColor};
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: ${MatchMatePalette.lightBackgroundColor};
  ${fontSizeTextScreen};
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const TextNameLeader = styled.Text`
  ${fontSizeTextScreen};
  font-weight: 600;
  color: ${MatchMatePalette.whiteColor};
`;
export const TextPointLeader = styled.Text`
  ${fontSizeTextScreen};
  font-weight: 400;
  color: ${MatchMatePalette.whiteColor};
`;
export const LineSperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${MatchMatePalette.whiteColor};
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const LeaderHeaderContainer = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${MatchMatePalette.primaryColor};
  margin-top:15%;
  position:relative;
`;

export const UserConatinerLeaders=styled.View`
  align-items:center;
  position:absolute;
  bottom:25px;
  margin-bottom:30px

`
export const ConatinerLeaders=styled.View`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`
export const UserConatinerLeadersA=styled.View`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  position:absolute;
  top:10px;
  right:10px

`
export const UserConatinerLeadersB=styled.View`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  position:absolute;
  top:10px;
  left:10px
`

export const ImageLeader = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-color:${MatchMatePalette.lightBackgroundColor};
  border-width: 4px;
  margin: 10px;
`;
export const ImageLeaderA = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 60px;
  border-color:${MatchMatePalette.lightBackgroundColor};
  border-width: 4px;
  margin: 10px;
`;


export const HeaderTitleContainer = styled.View`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const LeaderPropertiesContainer = styled.ScrollView`
  width: 100%;
  height: 65%;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  display: flex;
  padding-top: 40px;
  padding-bottom:30px
`;

export const LeaderPropertyContent = styled.View`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 25px;
`;

