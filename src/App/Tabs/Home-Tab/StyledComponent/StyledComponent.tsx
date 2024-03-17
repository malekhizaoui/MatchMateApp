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
export const stadiumsFootball = [
  {
    titleDescription: 'Balexert',
    backgroundImage:
      'https://www.realsport.ch/sites/default/files/styles/images_section_small/public/2023-09/Terrain3.png?h=8f74817f&itok=RPSY0REx',
  },
  {
    titleDescription: 'varembé',
    backgroundImage:
      'https://www.realsport.ch/sites/default/files/styles/image_header_small/public/2022-03/DiROts9Q.jpeg?h=4521fff0&itok=s3DJdXHb',
  },
  {
    titleDescription: 'Trembley',
    backgroundImage:
      'https://www.realsport.ch/sites/default/files/styles/image_header_small/public/2021-03/Carouge%20a%C3%A9rienne.jpg?h=2e111cc1&itok=u4s66gJj',
  },
];

export const stadiumData = [
  {
    titleDescription: 'Saint Jean',
    backgroundImage:
      'https://cdn.shopify.com/s/files/1/0550/4237/5908/products/633wm_1.png?v=1660617305',
  },
  {
    titleDescription: 'Nant-Cayla',
    backgroundImage:
      'https://www.shutterstock.com/image-photo/illuminated-basketball-playground-red-pavement-600nw-1221779821.jpg',
  },
  {
    titleDescription: 'Chemain de Tivoli',
    backgroundImage:
      'https://www.sportshub.com.sg/sites/default/files/2022-09/Play%20Ground.jpg',
  },
  {
    titleDescription: 'Asphalte',
    backgroundImage:
      'https://www.geneve.ch/sites/default/files/2022-06/asphalte-ville-geneve-cover-01%281%29.jpg',
  },
  {
    titleDescription: 'Franchises',
    backgroundImage:
      'https://st2.depositphotos.com/2601429/9447/i/450/depositphotos_94474168-stock-photo-basketball-board-on-the-sky.jpg',
  },
  {
    titleDescription: 'Lancy-Florimont',
    backgroundImage:
      'https://engermancontracting.com/wp/wp-content/uploads/2022/02/US_So_CA_P1195217.jpg?gid=6',
  },
];

export const fieldData = [
  {
    fieldName: 'Basketball',
    backgroundImage:
      'https://ak.picdn.net/shutterstock/videos/1104632401/thumb/1.jpg',
    stadiums: stadiumData,
  },
  {
    fieldName: 'Football',
    backgroundImage:
      'https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_742320_1679349106715629.jpg',
    stadiums: stadiumsFootball,
  },
  {
    fieldName: 'Beach Volley',
    backgroundImage:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/beach-volleyball-leah-guo.jpg',
    stadiums: stadiumData,
  },
];

export const ContainerApp = styled.SafeAreaView`
  ${ContainerAppStyle}
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
  color: white;
  font-size: 15px;
`;
export const RegionTxt = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-size: 32px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85%;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  align-self: center;
  margin-top: 10px;
`;
export const TextInputStyle = styled.TextInput`
  color: grey;
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
  color: white;
  font-size: 17px;
  font-weight: 600;
`;
export const TextCheckAllList = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-size: 15px;
  textdecorationline: underline;
`;
export const ListContainer = styled.ScrollView`
  width: 100%;
  height: 250px;
  display: wrap;
  margin-top: 10px;
`;
export const StadiumContainer = styled.TouchableOpacity`
  height: 60%;
  border-radius: 20px;
  margin-left: 10px;
  width: 185px;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  border: 2px white;
  flex-direction: column;
  margin-top: 10px;
`;

export const StadiumImage = styled.View`
  width: 100%;
  height: 70%;
  border-radius: 17px;
  background-color: ${MatchMatePalette.primaryColor};
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

//StadiumDetailDesign

export const ContainerDetailScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 90%;
  margin-top: 10px;
`;
export const ImagesStadiumContainer = styled.View`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  margin-top: 20px;
`;
export const ImageStadium = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 15px;
`;

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

export const TxtContainer = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;

export const AttributContainer = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
`;
export const FacilityContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 22%;
  background-color: white;
  margin-right: 15px;
  height: 80px;
  border-radius: 15px;
  flex-direction: column;
`;

export const TextFacility = styled.Text`
  color: #b8b8b8;
  font-weight: 400;
`;

export const ImageLocation = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 166px;
  border-radius: 30px;
  background-color: #f1f1f1;
  margin-bottom: 20px;
`;

export const BtnCheck = styled.TouchableOpacity`
  width: 33%;
  height: 30px;
  background-color: ${MatchMatePalette.secondaryColor};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 5px;
  flex-direction: row;
  position: absolute;
  right: 15px;
  bottom: 15px;
  align-self: center;
`;
export const TextButton = styled.Text`
  color: white;
  font-size: 13px;
`;

//style ListStadium
export const ContainerListStadiumScreen = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 90%;
  margin-top: 60px;
`;
export const HeaderListStadiumContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  position: absolute;
  top: 10px;
  z-index: 9999;
  background-color: ${MatchMatePalette.darkBackgroundColor};
  height: 60px;

`;
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

export const TextTypeOfRender = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-weight: 500;
  font-size: 18px;
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

export const ListStadiumContainer = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 20px;
`;
export const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StadiumImageContainer = styled.Image`
  width: 100%;
  height: 190px;
  border-radius: 10px;
  border: 1px white;
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
