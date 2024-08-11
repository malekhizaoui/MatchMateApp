import React from 'react';
import {Text, View} from 'react-native';
import {
  StadiumCardContainer,
  ImageContainerCard,
  StarsReviewContainer
} from './StyledComponent/StyledComponent';
import { Stadium } from '../../App/models/Stadium';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import { getStarsReviw } from '../../services/HelperFunctions';
import { Feedback } from '../../App/models/Feedback';
import { usePalette } from '../../assets/color-palette/ThemeApp';
interface StadiumCardMapComponentProps {
  stadium:Stadium,
  navigation:any,
  index:number,
  feedback:Feedback[]
}

const StadiumCardMapComponent = ({stadium,navigation,index,feedback}: StadiumCardMapComponentProps) => {
  const palette=usePalette()
  const starsReview = getStarsReviw(feedback);

  return (
    <StadiumCardContainer palette={palette} onPress={()=>{navigation.navigate('StadiumDetail',{stadiumId:stadium.id})}}>
      <ImageContainerCard palette={palette} 
        source={{
          uri: stadium.imageURL,
        }}></ImageContainerCard>
        <Text style={{position:"absolute",color:"white",fontSize:20,fontWeight:"700",zIndex:999,top:"40%" }}>{index}-{stadium.stadiumName}</Text>
        <View style={{position:"absolute",width:"100%",height:"100%", backgroundColor:'rgba(38, 38, 38, 0.3)',borderRadius:20}}></View>
        {starsReview!=="NaN"&&<StarsReviewContainer palette={palette}>
              <StarIconSVG color='yellow' size='17' />
              <Text style={{ color: palette.whiteColor }}>{starsReview}</Text>
            </StarsReviewContainer>}
    </StadiumCardContainer>
  );
};

export default StadiumCardMapComponent;
