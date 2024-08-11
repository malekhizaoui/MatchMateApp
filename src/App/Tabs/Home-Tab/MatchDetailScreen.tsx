import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {
  ContainerApp,
  MatchDetailContainer,
  FieldStyleContainer,
  FieldImage,
  TeamPositionsFootball,
  TeamPositionsBasketball,
  TeamPositionsVolleyBall,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';
import PrimaryButtonComponant from '../../../Components/ButtonPrimaryComponent';
import MatchDetailBoardComponent from '../../../Components/HomeComponents/MatchDetailBoardComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleRequests } from '../../../services/HandleRequests';
import ModalReviewComponent from '../../../Components/HomeComponents/ModalReviewComponent';
import ModalQrCodeGenerateComponent from '../../../Components/HomeComponents/ModalQrCodeGenerateComponent';
import { useTranslation } from 'react-i18next';


export const MatchDetailScreen = ({ navigation, route }: any) => {
  const { stadium, timeSlot } = route.params;
  const palette = usePalette();
  const {t}=useTranslation()
  const [qrCode, setQrCode] = useState<string>(""); // State to store the QR code
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [loading,setLoading]=useState(false)
  const currentSport =
    stadium.field.fieldName === 'Basketball'
      ? TeamPositionsBasketball
      : stadium.field.fieldName === 'FootBall'
      ? TeamPositionsFootball
      : TeamPositionsVolleyBall;

  const joinTeam = async () => {
    setLoading(true)
    const userId = await AsyncStorage.getItem('userId');
    try {
      const response = await handleRequests('put', `user/${userId}`, {
        timeSlotId: timeSlot.id,
      });
      
      setQrCode(response.data.data.timeSlots[0].qrCodeUrl);
      setModalVisible(true)
    } catch (error) {
      console.log('err', error);
      Alert.alert('Error', 'Failed to join the team.');
    }finally{
          setLoading(true)

    }
  };

  const renderPlayerIcons = (team: any) => {
    return team.map((el: object | any, index: number) => (
      <View key={index} style={el}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: palette.whiteColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={
              timeSlot.team[index]?.image
                ? { uri: timeSlot.team[index].image }
                : require('../../../assets/Images/userAnonymousImage.png')
            }
            style={{ width: 48, height: 48, borderRadius: 25 }}
          />
        </View>
        <Text style={{ color: palette.whiteColor }}>
          {timeSlot.team[index] ? timeSlot.team[index].firstName : ''}
        </Text>
      </View>
    ));
  };


  return (
    <ContainerApp palette={palette}>
      <NavigateBack navigation={navigation} headerTitle={'Match Detail'} />
      <MatchDetailContainer>
        <MatchDetailBoardComponent stadium={stadium} timeSlot={timeSlot} />
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
          colorTxtBtn={palette.whiteColor}
          colorbtn={palette.primaryColor}
          event={joinTeam}
          radius={20}
          titlebtn={t('home.matchDetailScreen.joinTeam')}
          widthPrimaryBtn={'95%'}
        />
        {modalVisible && (
        <ModalQrCodeGenerateComponent qrCode={qrCode} modalVisible={modalVisible} setModalVisible={setModalVisible} stadiumId={stadium?.id}/>
      )}
      </MatchDetailContainer>
    </ContainerApp>
  );
};


export default MatchDetailScreen;
