import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../../assets/Styles/index';
import { Theme } from '../../../models/Theme';

// Define prop types for each styled component that uses palette
interface PaletteProps {
  palette: Theme;
}

// Continue with your styled components definition
export const TeamPositionsFootball = [
  {
    top: '5%',
    left: '45%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '15%',
    left: '10%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '15%',
    right: '10%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '25%',
    right: '25%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '25%',
    left: '25%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '35%',
    left: '45%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '5%',
    left: '45%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '15%',
    left: '10%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '15%',
    right: '10%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '25%',
    right: '25%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '25%',
    left: '25%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '35%',
    left: '45%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
];

export const TeamPositionsBasketball = [
  {
    top: '3%',
    left: '20%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '3%',
    right: '20%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '19%',
    left: '25%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '19%',
    right: '25%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '29%',
    right: '45%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '3%',
    left: '20%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '3%',
    right: '20%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '19%',
    left: '25%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '19%',
    right: '25%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '29%',
    right: '45%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
];

export const TeamPositionsVolleyBall = [
  {
    bottom: '15%',
    left: '20%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '15%',
    right: '20%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    bottom: '30%',
    left: '45%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '15%',
    left: '20%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '15%',
    right: '20%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
  {
    top: '30%',
    left: '45%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 40,
  },
];

export const ContainerApp = styled.SafeAreaView<PaletteProps>`
  ${ContainerAppStyle};
  display: flex;
  flex-direction: column;
  background-color: ${({ palette }) => palette.darkBackgroundColor};

  
`;

export const ContainerScreen = styled.ScrollView`
  width: 100%;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const RegionExploreTxt = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
`;

export const RegionTxt = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
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

export const TextTitleList = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
  font-weight: 600;
`;

export const TextCheckAllList = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
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

export const InputContainer = styled.View<PaletteProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85%;
  height: 50px;
  background-color: ${({ palette }) => palette.whiteColor};
  border-radius: 25px;
  align-self: center;
  margin-top: 10px;
  border-color: ${({ palette }) => palette.secondaryTextColor};
  border: 1px;
`;

export const TextInputStyle = styled.TextInput`
  color: grey;
  width: 100%;
`;

export const TitleTextStadium = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.whiteColor};
  ${fontSizeSubTitleScreen};
  font-weight: 600;
`;

export const TxtShowMap = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
  ${fontSizeTextScreen}
  font-weight: 700;
`;

export const AddReviewText = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
  ${fontSizeLegendIcon};
  font-weight: 700;
  text-decoration-line: underline;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ExpandMore = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const TxtContainer = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
  font-weight: 700;
  margin-right: 10px;
`;

export const ImageLocation = styled.View<{ container?: string}>`
  margin-top: 20px;
  width: ${({ container }) => container || '100%'};
  height: ${({ container }) => container || '166px'};
  border-radius: 30px;
  background-color: #f1f1f1;
  margin-bottom: 60px;
  position: relative;
`;

export const BtnCheck = styled.TouchableOpacity<PaletteProps>`
  width: 70%;
  height: 40px;
  background-color: ${({ palette }) => palette.primaryColor};
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-bottom: 5px;
  flex-direction: row;
  position: absolute;
  bottom: 5px;
  align-self: center;
`;

export const TextButton = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.whiteColor};
  ${fontSizeTextScreen};
  font-weight: 600;
`;

export const CloseContainerIcon = styled.TouchableOpacity<PaletteProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ palette }) => palette.blackColor};
  z-index: 99999;
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DirectionContainerIcon = styled.TouchableOpacity<PaletteProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ palette }) => palette.blackColor};
  z-index: 99999;
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavigateUserContainerIcon = styled.TouchableOpacity<PaletteProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ palette }) => palette.blackColor};
  z-index: 99999;
  position: absolute;
  left: 10px;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineStyle = styled.View`
  width: 100%;
  height: 2px;
  background-color: grey;
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

export const TextTypeOfRender = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
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

