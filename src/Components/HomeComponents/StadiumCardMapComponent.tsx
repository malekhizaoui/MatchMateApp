import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {
  StadiumContainer,
  StadiumImage,
  StadiumDescription,
  TitleDescription,
  TextDescription,
  StadiumCardContainer,
  ImageContainerCard,
  StarsReviewContainer
} from './StyledComponent/StyledComponent';
import { Stadium } from '../../App/models/Stadium';
import { MatchMatePalette } from '../../assets/color-palette';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import { getStarsReviw } from '../../services/HelperFunctions';
import { Feedback } from '../../App/models/Feedback';
interface StadiumCardMapComponentProps {
  stadium:Stadium,
  navigation:any,
  index:number,
  feedback:Feedback[]
}

const StadiumCardMapComponent = ({stadium,navigation,index,feedback}: StadiumCardMapComponentProps) => {
  return (
    <StadiumCardContainer onPress={()=>{navigation.navigate('StadiumDetail',{stadium})}}>
      <ImageContainerCard
        source={{
          uri: stadium.imageURL,
        }}></ImageContainerCard>
        <Text style={{position:"absolute",color:"white",fontSize:20,fontWeight:"700",zIndex:999,top:"40%" }}>{index}-{stadium.stadiumName}</Text>
        <View style={{position:"absolute",width:"100%",height:"100%", backgroundColor:'rgba(38, 38, 38, 0.3)',borderRadius:20}}></View>
        <StarsReviewContainer>
            <StarIconSVG color='yellow' size='17'/>
            <Text style={{color: MatchMatePalette.whiteColor}}>{getStarsReviw(feedback)}</Text>
            </StarsReviewContainer>
      {/* <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginTop:10
        }}>
        <Text
          style={{
            color: MatchMatePalette.lightBackgroundColor,
            fontSize: 16,
            fontWeight: '600',
          }}>
          {stadium.stadiumName}
        </Text>
        <Text
          style={{
            color: MatchMatePalette.lightBackgroundColor,
            fontSize: 16,
            fontWeight: '600',
          }}>
          Sunset evening
        </Text>
      </View> */}
    </StadiumCardContainer>
  );
};

export default StadiumCardMapComponent;
