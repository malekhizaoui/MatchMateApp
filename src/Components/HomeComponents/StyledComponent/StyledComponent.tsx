import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import { MatchMatePalette } from '../../../assets/color-palette/index';
import {
    fontSizeTitleScreen,
    fontSizeLegendIcon,
    fontSizeSubTitleScreen,
    fontSizeTextScreen,
    ContainerAppStyle
  } from '../../../assets/Styles/index';

  export const FieldContent=styled.TouchableOpacity`
height:100%;
border-radius:20px;
margin-left:10px;
width:185px;
align-self:center;
`

export const ImageField =styled.Image`
height:92%;
border-radius:20px;
width:182px;
align-self:center;
border:2px;


`

export const TitleCard=styled.View`
position:absolute;
height:27px;
width:90px;
border-radius:17px;
background-color:#454847;
bottom:25px;
left:12px;
align-items:center;
justify-content:center
`

export const TxtTitle=styled.Text`
font-size:13px;
color:white;
`





export const StadiumContainer=styled.TouchableOpacity`
height:60%;
border-radius:20px;
margin-left:10px;
width:185px;
border:2px white;
flex-direction:column;
margin-top:10px
`

export const StadiumImage=styled.Image`
width:100%;
height:70%;
border-radius:17px;
`
export const StadiumDescription=styled.View`
display:Flex;
flex-direction:column;
padding:5px
`
export const TitleDescription=styled.Text`
font-size:12px;
font-weight:500;
color:white;
padding-left:5px
`
export const TextDescription=styled.Text`
font-size:10px;
font-weight:500;
color:${MatchMatePalette.primaryColor};
padding-left:5px
`

// ImageSlideComponent Design
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
justify-content:space-around
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
