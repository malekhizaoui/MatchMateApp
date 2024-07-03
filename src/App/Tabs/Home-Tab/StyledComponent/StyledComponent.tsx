import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import {MatchMatePalette} from '../../../../assets/color-palette';
import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../../assets/Styles/index';

export const TeamPositionsFootball = [
  {top: '5%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '15%', left: '10%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '15%', right: '10%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '25%', right: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '25%', left: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '35%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '5%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '15%', left: '10%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '15%', right: '10%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '25%', right: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '25%', left: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '35%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
];

export const TeamPositionsBasketball = [
  {top: '5%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '5%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '17%', left: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '17%', right: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '27%', right: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '5%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '5%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '17%', left: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '17%', right: '25%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '27%', right: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
];

export const TeamPositionsVolleyBall = [
  {bottom: '15%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '15%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {bottom: '30%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '15%', left: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '15%', right: '20%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
  {top: '30%', left: '45%', position: 'absolute', zIndex: 999,alignItems:"center",justifyContent: 'center',maxWidth:40},
];

interface ContainerMap {
  container?: any; // Define backgroundColor prop
}

export const ContainerApp = styled.SafeAreaView`
  ${ContainerAppStyle};
  display: flex;
  flex-direction: column;
`;

export const ContainerScreen = styled.ScrollView`
  width: 100%;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
  width: 85%;
  align-self: center;
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
  color: ${MatchMatePalette.whiteColor};
  ${fontSizeTextScreen};
`;
export const RegionTxt = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  ${fontSizeTitleScreen};
`;

export const TextContainer = styled.View`
  width: 85%;
  align-self: center;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const TextTitleList = styled.Text`
  color: ${MatchMatePalette.whiteColor};
  ${fontSizeTextScreen};
  font-weight: 600;
`;
export const TextCheckAllList = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  ${fontSizeTextScreen};
  text-decoration-line: underline;
  font-weight: 600;
`;
export const ListContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: 250px;
  margin-top: 10px;
`;

//StadiumDetailDesign

export const ContainerDetailScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 90%;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85%;
  height: 50px;
  background-color: ${MatchMatePalette.whiteColor};
  border-radius: 25px;
  align-self: center;
  margin-top: 10px;
`;
export const TextInputStyle = styled.TextInput`
  color: grey;
`;

export const TitleTextStadium = styled.Text`
  color: ${MatchMatePalette.whiteColor};
  ${fontSizeSubTitleScreen};
  font-weight: 600;
`;

export const TxtShowMap = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-size: 15px;
  font-weight: 700;
`;

export const ExpandMore = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const TxtContainer = styled.Text`
  color: ${MatchMatePalette.whiteColor};
  ${fontSizeTextScreen};
  font-weight: 600;
  margin-top: 20px;
`;

export const ImageLocation = styled.View<ContainerMap>`
  margin-top: 20px;
  width:${({ container }) => container || '100%'};
  height:${({ container }) => container || "166px"};
  border-radius: 30px;
  background-color: #f1f1f1;
  margin-bottom: 60px;
  position: relative;
`;

export const BtnCheck = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  background-color: ${MatchMatePalette.primaryColor};
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-bottom: 5px;
  flex-direction: row;
  position: absolute;
  bottom: 5px;
  align-self: center;
`;
export const TextButton = styled.Text`
  color: ${MatchMatePalette.whiteColor};
  ${fontSizeTextScreen};
  font-weight: 600;
`;
export const CloseContainerIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  z-index: 99999;
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//style ListStadium
export const ContainerListStadiumScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 60px;
  padding: 15px;
`;
export const HeaderListStadiumContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  position: absolute;
  top: 10px;
  z-index: 9999;
  height: 60px;
`;

export const TextTypeOfRender = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-weight: 500;
  ${fontSizeTextScreen};
  width: 37px;
`;

export const ListStadiumContainer = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
`;

//
export const DaysContainer = styled.ScrollView`
  width: ${WIDTH}px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  max-height: 60px;
  position: fixed;
`;

export const ImageConainer = styled.View`
  width: 90%;
  align-items: center;
  margin-bottom: 10px;
`;

export const ImagesContent = styled.View`
  position: relative;
  width: 100%;
  height: ${WIDTH * 0.45}px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// MatchDetail STyle
export const MatchDetailContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  height: 95%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex: 1;
`;

export const FieldStyleContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex: 6;
  align-item: center;
  position: relative;
`;

export const FieldImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

//

export const FlatListMapContainer = styled.ScrollView`
  width: 95%;
  position: absolute;
  bottom: 15px;
  align-self: center;
`;
