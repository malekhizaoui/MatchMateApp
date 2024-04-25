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
export const stadiumsFootball = [
  {
    titleDescription: 'Balexert',
    backgroundImage:
      'https://www.realsport.ch/sites/default/files/styles/images_section_small/public/2023-09/Terrain3.png?h=8f74817f&itok=RPSY0REx',
    field: 'footBall',
  },
  {
    titleDescription: 'varembé',
    backgroundImage:
      'https://www.realsport.ch/sites/default/files/styles/image_header_small/public/2022-03/DiROts9Q.jpeg?h=4521fff0&itok=s3DJdXHb',
    field: 'footBall',
  },
  {
    titleDescription: 'Trembley',
    backgroundImage:
      'https://www.realsport.ch/sites/default/files/styles/image_header_small/public/2021-03/Carouge%20a%C3%A9rienne.jpg?h=2e111cc1&itok=u4s66gJj',
    field: 'footBall',
  },
];
export const stadiumsVolley = [
  {
    titleDescription: 'Zermatt',

    backgroundImage:
      'https://db-service.toubiz.de/var/plain_site/storage/images/orte/zermatt/beachvolley/beachvolley/1404114-1-ger-DE/beachvolley_front_large.jpg',
    field: 'volleyBall',
  },
  {
    titleDescription: 'Asphalt',
    backgroundImage:
      'https://www.genevepascher.com/wp-content/uploads/2022/06/initiations-volley-geneve-pas-cher.jpg',
    field: 'volleyBall',
  },
  {
    titleDescription: 'Trembley',
    backgroundImage:
      'https://aweniddofq.cloudimg.io/v7/luxemburg.imxplatform.de/data/httpsappvisitluxembourgcomimages23296-resize-1680x1050x100.jpg?func=crop&width=1000&height=1000',
    field: 'volleyBall',
  },
];

export const stadiumData = [
  {
    titleDescription: 'Saint Jean',
    backgroundImage:
      'https://cdn.shopify.com/s/files/1/0550/4237/5908/products/633wm_1.png?v=1660617305',
    field: 'basketball',
  },
  {
    titleDescription: 'Nant-Cayla',
    backgroundImage:
      'https://www.shutterstock.com/image-photo/illuminated-basketball-playground-red-pavement-600nw-1221779821.jpg',
    field: 'basketball',
  },
  {
    titleDescription: 'Chemain de Tivoli',
    backgroundImage:
      'https://www.sportshub.com.sg/sites/default/files/2022-09/Play%20Ground.jpg',
    field: 'basketball',
  },
  {
    titleDescription: 'Asphalte',
    backgroundImage:
      'https://www.geneve.ch/sites/default/files/2022-06/asphalte-ville-geneve-cover-01%281%29.jpg',
    field: 'basketball',
  },
  {
    titleDescription: 'Franchises',
    backgroundImage:
      'https://st2.depositphotos.com/2601429/9447/i/450/depositphotos_94474168-stock-photo-basketball-board-on-the-sky.jpg',
    field: 'basketball',
  },
  {
    titleDescription: 'Lancy-Florimont',
    backgroundImage:
      'https://engermancontracting.com/wp/wp-content/uploads/2022/02/US_So_CA_P1195217.jpg?gid=6',
    field: 'basketball',
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
    stadiums: stadiumsVolley,
  },
];

export const ContainerApp = styled.SafeAreaView`
  ${ContainerAppStyle};
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
  margin-top: 60px;
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

export const ImageLocation = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 166px;
  border-radius: 30px;
  background-color: #f1f1f1;
  margin-bottom: 60px;
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
  color: white;
  font-size: 15px;
  font-weight: 600;
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

export const TextTypeOfRender = styled.Text`
  color: ${MatchMatePalette.primaryColor};
  font-weight: 500;
  font-size: 18px;
  width: 37px;
`;

export const ListStadiumContainer = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;

//
export const DaysContainer = styled.ScrollView`
  width: ${WIDTH}px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  padding: 5px;
  border-radius: 5px;
  max-height: 140px;
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
  margin-top: 70px;
  margin-bottom:20px;
  flex:1
`;

export const FieldStyleContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex:6;
  align-item: center;
  position: relative;
`;

export const FieldImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
