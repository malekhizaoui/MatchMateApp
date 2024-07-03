import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import {
  ContainerApp,
  MatchDetailContainer,
  FieldStyleContainer,
  FieldImage,
  TeamPositionsFootball,
  TeamPositionsBasketball,
  TeamPositionsVolleyBall
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import PrimaryButtonComponant from '../../../Components/ButtonPrimaryComponent';
import MatchDetailBoardComponent from '../../../Components/HomeComponents/MatchDetailBoardComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleRequests } from '../../../services/HandleRequests';
export const MatchDetailScreen = ({navigation, route}: any) => {
  const {stadium,timeSlot} = route.params;  


  const currentSport =
    stadium.field.fieldName === 'Basketball'
      ? TeamPositionsBasketball
      : stadium.field.fieldName === 'FootBall'
      ? TeamPositionsFootball
      : TeamPositionsVolleyBall;


      const joinTeam=async()=>{   
        const userId=await AsyncStorage.getItem("userId")
        try { 
            handleRequests('put',`user/${userId}`,{timeSlotId:timeSlot.id})
            navigation.goBack()
        } catch (error) {
          console.log("err",error);
          
        }
      }

      
  const renderPlayerIcons = (team: any) => {
    return team.map((el: object | any, index: number) => (
      <View key={index} style={el}>
        <View style={{width:50,height:50,borderRadius:25,borderWidth:2,borderColor:MatchMatePalette.whiteColor,display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Image source={timeSlot.team[index]?.image?{uri:timeSlot.team[index].image}:require('../../../assets/Images/userAnonymousImage.png')} style={{width:48,height:48,borderRadius:25}}/>
        </View>
        <Text style={{color:MatchMatePalette.whiteColor}}>{timeSlot.team[index]?timeSlot.team[index].firstName:""}</Text>
      </View>
    ));
  };

  return (
    <ContainerApp>
      <NavigateBack navigation={navigation} headerTitle={'Match Detail'} />
      <MatchDetailContainer>
        <MatchDetailBoardComponent stadium={stadium} timeSlot={timeSlot}/>
        <FieldStyleContainer>
          {renderPlayerIcons(currentSport)}
          <FieldImage
            source={
              stadium.field.fieldName === 'basketball'
                ? require('../../../assets/Images/BasketballFieldImage.png')
                : stadium.field.fieldName === 'footBall'
                ? require('../../../assets/Images/FootballFieldImage.png')
                : require('../../../assets/Images/VolleyballFieldImage.png')
            }
          />
        </FieldStyleContainer>
        <PrimaryButtonComponant
          colorTxtBtn={MatchMatePalette.whiteColor}
          colorbtn={MatchMatePalette.primaryColor}
          event={joinTeam}
          radius={20}
          titlebtn="Join Team"
          widthPrimaryBtn={'95%'}
        />
      </MatchDetailContainer>
    </ContainerApp>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '8%',
    height: 30,
    borderRadius: 15,
  },
});

export default MatchDetailScreen;
