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

export const FieldContent = styled.TouchableOpacity`
  height: 100%;
  border-radius: 20px;
  margin-left: 10px;
  width: 185px;
  align-self: center;
`;

export const ImageField = styled.Image`
  height: 92%;
  border-radius: 20px;
  width: 182px;
  align-self: center;
`;

export const TitleCard = styled.View`
  position: absolute;
  height: 27px;
  width: 90px;
  border-radius: 17px;
  background-color: #454847;
  bottom: 25px;
  left: 12px;
  align-items: center;
  justify-content: center;
`;

export const TxtTitle = styled.Text`
  font-size: 13px;
  color: white;
`;

export const StadiumContainer = styled.TouchableOpacity`
  height: 60%;
  border-radius: 20px;
  margin-left: 10px;
  width: 185px;
  border: 2px white;
  flex-direction: column;
  margin-top: 10px;
`;

export const StadiumImage = styled.Image`
  width: 100%;
  height: 70%;
  border-radius: 17px;
`;
export const StadiumDescription = styled.View`
  display: Flex;
  flex-direction: column;
  padding: 5px;
`;
export const TitleDescription = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: white;
  padding-left: 5px;
`;
export const TextDescription = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: ${MatchMatePalette.primaryColor};
  padding-left: 5px;
`;

// ImageSlideComponent Design
export const ImagesStadiumContainer = styled.View`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  margin-top:20px;
  margin-bottom:10px
`;
export const ImageStadium = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 15px;
`;

// DescriptionStadiumComponent Design
export const HeaderStadium = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TitleTextStadium = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 600;
`;

export const TxtShowMap = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-size: 15px;
  font-weight: 700;
`;
export const StadiumDescriptionTxt = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`;

export const ExpandMore = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

// FacilityCardComponent Design
export const AttributContainer = styled.View`
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-around;
`;
export const FacilityContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 20%;
  background-color: white;
  margin: 5px;
  height: 80px;
  border-radius: 15px;
  flex-direction: column;
`;

export const TextFacility = styled.Text`
  color: #262626;
  font-weight: 500;
  font-size: 13px;
`;

// SearchCardComponent Design
export const InputHeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65%;
  background-color: white;
  height: 40px;
  border-radius: 30px;
  justify-content: space-between;
`;
export const InputIconContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FilterIconContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;
`;
export const LineSperator = styled.View`
  height: 90%;
  width: 2px;
  background-color: #262626;
`;
export const TextInputStyle = styled.TextInput`
  color: grey;
`;

// ImageListStadiumComponent Design
export const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StadiumImageContainer = styled.Image`
  width: 100%;
  height: 190px;
  border-radius: 10px;
`;

export const TitleStadiumName = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NumberOfCourt = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: white;
`;

// design DaySelectedComponent

export const DayContent = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${WIDTH * 0.29}px;
  background-color: transparent;
`;
export const DayText = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: 500;
`;
export const MonthText = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-size: 14px;
  font-weight: 500;
`;

// Design MatchDetailComponent

export const MatchDetailContainer = styled.View`
  display: flex;
  width: 90%;
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

export const HeaderDetailContainer = styled.View`
  width: 100%;
  background-color: #262626;
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

export const TxtButton = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-size: 15px;
  text-decoration-line: underline;
  font-weight: 600;
`;
// Design MatchDetailBoardComponent

export const MatchDetailBoard = styled.View`
  display: flex;
  flex: 0.75;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  border-radius: 20px;
  heigth: 100px;
  padding: 10px;
`;

export const StadiumTextname = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
  font-family: poppins;
`;
export const PlayerLeftText = styled.Text`
  font-weight: bold;
  color: ${MatchMatePalette.primaryColor};
  font-size: 12px;
`;

export const MatchTimeDetailContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const TimeText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
  font-family: poppins;
`;

// StadiumCardMapComponent design

export const StadiumCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 250px;
  height: 150px;
  border-radius: 20px;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  margin-right: 10px;
  padding: 10px;
`;

export const ImageContainerCard = styled.Image`
  width: 40%;
  height: 100%;
  background-color: white;
  margin-right: 10px;
  border-radius:10px
`;

// ImageListFieldComponent

export const Container = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

export const StadiumImageField = styled.Image`
  width: 100%;
  height: 190px;
  border-radius: 17px;
`;
const Button = styled.TouchableOpacity`
  position: absolute;
  top: 50%;
  align-items: center;
  justify-content: center;
  width: 8%;
  height: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.54);
`;

export const PreviousButton = styled(Button)`
  left: 15px;
`;

export const NextButton = styled(Button)`
  right: 15px;
`;

export const CourtNumberContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 15px;
  align-items: center;
  justify-content: center;
  width: 8%;
  height: 18px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.54);
`;



export const RentalContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  left: 15px;
  align-items: center;
  justify-content: center;
  width: 18%;
  height: 32px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.54);
`;

export const RentalText = styled.Text`
  color: white;
  font-size: 12px;
`;

export const RentalPrice = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 600;
`;

export const StadiumTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
  color:white
`;