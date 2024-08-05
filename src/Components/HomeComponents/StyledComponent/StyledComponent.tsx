import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {
  fontSizeTitleScreen,
  fontSizeLegendIcon,
  fontSizeSubTitleScreen,
  fontSizeTextScreen,
  ContainerAppStyle,
} from '../../../assets/Styles/index';
import { Theme } from '../../../App/models/Theme';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

interface PaletteProps {
  palette: Theme;
}

export const FieldContent = styled.TouchableOpacity<PaletteProps>`
  height: 100%;
  border-radius: 20px;
  margin-left: 10px;
  width: 185px;
  align-self: center;
`;

export const ImageField = styled.Image<PaletteProps>`
  height: 92%;
  border-radius: 20px;
  width: 182px;
  align-self: center;
`;

export const TitleCard = styled.View<PaletteProps>`
  position: absolute;
  height: 27px;
  width: 90px;
  border-radius: 17px;
  background-color: ${({ palette }) => palette.blackColor};
  bottom: 25px;
  left: 12px;
  align-items: center;
  justify-content: center;
`;

export const TxtTitle = styled.Text<PaletteProps>`
  ${fontSizeLegendIcon};
  color: ${({ palette }) => palette.whiteColor};
`;

export const StadiumContainer = styled.TouchableOpacity<PaletteProps>`
  height: 65%;
  border-radius: 20px;
  margin-left: 10px;
  width: 185px;
  border: 1px ${({ palette }) => palette.secondaryTextColor};
  flex-direction: column;
  margin-top: 10px;
  position: relative;
`;

export const StadiumImage = styled.Image<PaletteProps>`
  width: 100%;
  height: 65%;
  border-radius: 17px;
`;

export const StadiumDescription = styled.View`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const TitleDescription = styled.Text<PaletteProps>`
  ${fontSizeLegendIcon};
  font-weight: 500;
  color: ${({ palette }) => palette.secondaryTextColor};
  padding-left: 5px;
`;

export const TextDescription = styled.Text<PaletteProps>`
  ${fontSizeLegendIcon};
  font-weight: 500;
  color: ${({ palette }) => palette.primaryColor};
  padding-left: 5px;
`;

export const StarsReviewContainer = styled.View<PaletteProps>`
  position: absolute;
  top: 80px;
  left: 8px;
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: ${({ palette }) => palette.blackColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

// ImageSlideComponent Design
export const ImagesStadiumContainer = styled.View`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
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

export const TitleTextStadium = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeSubTitleScreen};
  font-weight: 600;
`;

export const TxtShowMap = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
  ${fontSizeTextScreen};
  font-weight: 700;
`;

export const StadiumDescriptionTxt = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
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

export const FacilityContentContainer = styled.View<PaletteProps>`
  align-items: center;
  justify-content: center;
  width: 20%;
  background-color: ${({ palette }) => palette.whiteColor};
  margin: 5px;
  height: 80px;
  border-radius: 15px;
  flex-direction: column;
  border: 1px;
  border-color: ${({ palette }) => palette.secondaryTextColor};
`;

export const TextFacility = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.blackColor};
  font-weight: 500;
  ${fontSizeLegendIcon};
`;

// SearchCardComponent Design
export const InputHeaderContainer = styled.View<PaletteProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65%;
  background-color: ${({ palette }) => palette.whiteColor};
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

export const LineSperator = styled.View<PaletteProps>`
  width: 100%;
  height: 2px;
  background-color: ${({ palette }) => palette.lightBackgroundColor};
  margin-top: 10px;
`;

export const LineSperatorSearchBar = styled.View<PaletteProps>`
  width: 2px;
  height: 90%;
  background-color: ${({ palette }) => palette.lightBackgroundColor};
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

export const TitleStadiumName = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NumberOfCourt = styled.Text<PaletteProps>`
  ${fontSizeLegendIcon};
  font-weight: 500;
  color: ${({ palette }) => palette.whiteColor};
`;

// design DaySelectedComponent
export const DayContent = styled.TouchableOpacity<PaletteProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${WIDTH * 0.29}px;
  background-color: transparent;
`;

export const DayText = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
  font-weight: 500;
`;

export const MonthText = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
  ${fontSizeTextScreen};
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

export const HeaderDetailContainer = styled.View<PaletteProps>`
  width: 100%;
  background-color: ${({ palette }) => palette.lightBackgroundColor};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

export const TextHeaderTime = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
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

export const TxtdetailLabel = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.lightColor};
  font-weight: bold;
  ${fontSizeTextScreen};
  margin-left: 10px;
`;

export const TextDesciption = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.secondaryTextColor};
  ${fontSizeTextScreen};
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

export const TxtButton = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.primaryColor};
  ${fontSizeTextScreen};
  text-decoration-line: underline;
  font-weight: 600;
`;

// Design MatchDetailBoardComponent
export const MatchDetailBoard = styled.View<PaletteProps>`
  display: flex;
  flex: 0.75;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ palette }) => palette.lightBackgroundColor};
  border-radius: 20px;
  height: 100px;
  padding: 10px;
`;

export const StadiumTextname = styled.Text<PaletteProps>`
  ${fontSizeSubTitleScreen};
  font-weight: bold;
  color: ${({ palette }) => palette.secondaryTextColor};
  font-family: poppins;
`;

export const PlayerLeftText = styled.Text<PaletteProps>`
  font-weight: bold;
  color: ${({ palette }) => palette.primaryColor};
  ${fontSizeTextScreen};
`;

export const MatchTimeDetailContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const TimeText = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: bold;
  color: ${({ palette }) => palette.secondaryTextColor};
  font-family: poppins;
`;

// StadiumCardMapComponent design
export const StadiumCardContainer = styled.TouchableOpacity<PaletteProps>`
  display: flex;
  flex-direction: row;
  width: 210px;
  height: 120px;
  border-radius: 20px;
  background-color: ${({ palette }) => palette.whiteColor};
  justify-content: center;
  position: relative;
  margin-right: 10px;
`;

export const ImageContainerCard = styled.Image<PaletteProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ palette }) => palette.whiteColor};
  border-radius: 12px;
`;

// ImageListFieldComponent
export const Container = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

export const StadiumImageField = styled.Image<PaletteProps>`
  width: 100%;
  height: 190px;
  border-radius: 17px;
`;

const Button = styled.TouchableOpacity<PaletteProps>`
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

export const CourtNumberContainer = styled.TouchableOpacity<PaletteProps>`
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

export const RentalContainer = styled.TouchableOpacity<PaletteProps>`
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

export const RentalText = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.whiteColor};
  ${fontSizeLegendIcon};
`;

export const RentalPrice = styled.Text<PaletteProps>`
  color: ${({ palette }) => palette.whiteColor};
  ${fontSizeLegendIcon};
  font-weight: 600;
`;

export const StadiumTitle = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
  color: ${({ palette }) => palette.secondaryTextColor};
`;

// CardReviewComponent style
export const UserContainerReview = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  width: 90%;
`;

export const UserImageReview = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 17px;
  background-color: red;
`;

export const UserNameReview = styled.Text<PaletteProps>`
  ${fontSizeLegendIcon};
  margin-left: 10px;
  color: ${({ palette }) => palette.secondaryTextColor};
  font-weight: 600;
`;

export const DateReviewtxt = styled.Text<PaletteProps>`
  ${fontSizeLegendIcon};
  margin-left: 10px;
  color: grey;
  text-align: left;
`;

export const StarsContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  width: 90%;
`;

export const Reviewtxt = styled.Text<PaletteProps>`
  ${fontSizeLegendIcon};
  margin-left: 10px;
  color: ${({ palette }) => palette.secondaryTextColor};
  text-align: left;
  font-weight: 600;
  margin-left: 3px;
`;

// ModalReviexComponent
export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  justify-content: center;
  align-items: center;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View<PaletteProps>`
  margin: 20px;
  background-color: ${({ palette }) => palette.lightBackgroundColor};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  height: 350px;
  width: 300px;
  position: relative;
`;

export const CloseButton = styled.TouchableOpacity<PaletteProps>`
  position: absolute;
  top: -40px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  border: 1px;
  border-color: ${({ palette }) => palette.secondaryTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextReviewQs = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.secondaryTextColor};
  text-align: center;
`;

// CardToReviewComponent design
export const CardReviewsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const CardReviewDetailContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const HeaderDescriptionReview = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageStadiumReview = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const ButtonToReview = styled.TouchableOpacity<PaletteProps>`
  width: 100px;
  height: 32px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  background-color: ${({ palette }) => palette.primaryColor};
  align-items: center;
`;

export const ReviewWaitContainer = styled.TouchableOpacity<PaletteProps>`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color: ${({ palette }) => palette.lightBackgroundColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextNameProfile = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  font-weight: 700;
  color: ${({ palette }) => palette.secondaryTextColor};
`;

export const BookingDetailText = styled.Text<PaletteProps>`
  ${fontSizeTextScreen};
  color: ${({ palette }) => palette.primaryColor};
  margin-top: 20px;
  font-weight: 700;
  text-decoration-line: underline;
`;
