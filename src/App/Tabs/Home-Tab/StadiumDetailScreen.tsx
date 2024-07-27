import React, {useEffect, useState} from 'react';
import {
  ContainerApp,
  ContainerDetailScreen,
  TxtContainer,
  ImageLocation,
  BtnCheck,
  TextButton,
  CloseContainerIcon,
  LineStyle,
  AddReviewText,
} from './StyledComponent/StyledComponent';
import CardReviewComponent from '../../../Components/HomeComponents/CardReviewComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';
import ImageSlideComponent from '../../../Components/HomeComponents/ImageSlideComponent';
import DescriptionStadiumComponent from '../../../Components/HomeComponents/DescriptionStadiumComponent';
import FacilityCardComponent from '../../../Components/HomeComponents/FacilityCardComponent';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight,
  Text,
} from 'react-native';
import StadiumLocationMapComponent from '../../../Components/HomeComponents/StadiumLocationMapComponent';
import CloseIconSVG from '../../../assets/Icons/svg/CloseIconSVG';
import {Stadium} from '../../models/Stadium';
import {handleRequests} from '../../../services/HandleRequests';
import StarIconSVG from '../../../assets/Icons/svg/StarIconSVG';
import StarIconNotFilledIconSVG from '../../../assets/Icons/svg/StarIconNotFilledIconSVG';
import {Feedback} from '../../models/Feedback';
import {getStarsReviw} from '../../../services/HelperFunctions';
import ModalReviewComponent from '../../../Components/HomeComponents/ModalReviewComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StadiumDetailScreenProps {
  navigation: any;
  route: any;
  container: any;
}

export const StadiumDetailScreen = ({
  navigation,
  route,
}: StadiumDetailScreenProps) => {
  const palette = usePalette();

  const {stadiumId} = route.params;
  const [showMap, setShowMap] = useState(false);
  const [stadium, setStadium] = useState<Stadium | null>(null);
  const [feedbacks, setFeedbacks] = useState<Feedback[] | null>(null);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  

  const getStadiumById = async () => {
    try {
      const res = await handleRequests('get', `stadium/${stadiumId}`);
      setStadium(res.data);
      setFeedbacks(res.data.feedbacks);
    } catch (error) {
      console.log('err', error);
    }
  };

  console.log('stadium', stadium);

  useEffect(() => {
    getStadiumById();
  }, [modalVisible]);
  const handleAddReview = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
    setModalVisible(true);
    return;
    }
    navigation.navigate('ProfileTab', {Screen: 'ConnexionMethodScreen'});
  };
  return (
    <ContainerApp palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Stadium Detail'}
        color={palette.primaryColor}
        backgroundColor={palette.darkBackgroundColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.darkBackgroundColor}
      />
      {!showMap && (
        <ContainerDetailScreen
          horizontal={false}
          showsVerticalScrollIndicator={false}>
          <ImageSlideComponent
            stadium={stadium}
            reviewStars={feedbacks && getStarsReviw(feedbacks)}
          />
          <DescriptionStadiumComponent
            stadium={stadium}
            btnClicked={() => {
              setShowMap(true);
            }}
          />
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 10,
            }}>
            <TxtContainer palette={palette}>Facilities</TxtContainer>
          </TouchableOpacity>
          <LineStyle></LineStyle>

          <FacilityCardComponent />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 10,
              }}>
              <TxtContainer palette={palette}>
                Reviews {feedbacks && getStarsReviw(feedbacks)}
              </TxtContainer>
              <StarIconSVG color={palette.primaryColor} />
            </View>
            <TouchableOpacity onPress={handleAddReview}>
              <AddReviewText palette={palette}>Add Review</AddReviewText>
            </TouchableOpacity>
          </View>
          <LineStyle></LineStyle>
          <View style={{marginBottom: 60}}>
            {feedbacks && feedbacks.length > 0 ? (
              feedbacks.map((feedback, index) => {
                return (
                  <CardReviewComponent
                    user={feedback.user}
                    stars={feedback.stars}
                    comment={feedback.comment}
                    key={index}
                    date={feedback.created_at}
                  />
                );
              })
            ) : (
              <View
                style={{
                  display: 'flex',
                  margin: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TxtContainer palette={palette}>There is no Review to show</TxtContainer>
              </View>
            )}
          </View>
        </ContainerDetailScreen>
      )}
      {showMap && (
        <>
          <ImageLocation container={showMap && '100%'}>
            <StadiumLocationMapComponent stadium={stadium} />

            <CloseContainerIcon palette={palette}
              onPress={() => {
                setShowMap(false);
              }}>
              <CloseIconSVG />
            </CloseContainerIcon>
          </ImageLocation>
        </>
      )}

      {stadium?.status === 'private' && (
        <BtnCheck palette={palette}
          onPress={() => {
            navigation.navigate('StadiumAvailability', {
              stadiumId: stadium?.id,
            });
          }}>
          <TextButton palette={palette}>Check availability</TextButton>
        </BtnCheck>
      )}

      {modalVisible && (
        <ModalReviewComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          stadiumId={stadium?.id}
        />
      )}
    </ContainerApp>
  );
};
