import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View,TouchableOpacity} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium,
  AttributContainer,
  FacilityContentContainer,
  TextFacility,
  CardReviewsContainer,
  CardReviewDetailContainer,
  HeaderDescriptionReview,
  ImageStadiumReview,
  TextNameProfile,
  ButtonToReview,
  ReviewWaitContainer
} from './StyledComponent/StyledComponent';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import PinIconSVG from '../../assets/Icons/svg/PinIconSVG';
import BasketBallHoopIconSVG from '../../assets/Icons/svg/BasketBallHoopIconSVG';
import BasketBallCourtIconSVG from '../../assets/Icons/svg/BasketBallCourtIconSVG';
import ShowerIconSVG from '../../assets/Icons/svg/ShowerIconSVG';
import LightningIconSVG from '../../assets/Icons/svg/LightningIconSVG';
import FireIconSVG from '../../assets/Icons/svg/FireIconSVG';
import StarIconNotFilledIconSVG from '../../assets/Icons/svg/StarIconNotFilledIconSVG';
import { Stadium } from '../../App/models/Stadium';
import ModalReviewComponent from './ModalReviewComponent';
import { usePalette } from '../../assets/color-palette/ThemeApp';
interface CardToReviewComponentProps {
//   stadium:any;
//   btnClicked: () => void;
stadiumUserReview:Stadium
}

const CardToReviewComponent = ({
//   stadium,
//   btnClicked,
stadiumUserReview
}: CardToReviewComponentProps) => {
    const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
    console.log("modalVisible",modalVisible);
    const palette=usePalette()

  return (
    <>
    <CardReviewsContainer>
      <CardReviewDetailContainer>
        <HeaderDescriptionReview>
          <ImageStadiumReview
            source={{uri:stadiumUserReview.imageURL}}
          />
          <TextNameProfile palette={palette}>{stadiumUserReview.stadiumName}</TextNameProfile>
        </HeaderDescriptionReview>
        <ButtonToReview palette={palette} onPress={(()=>{setModalVisible(true)})}>
          <Text style={{fontSize: 12, color: 'white', fontWeight: '600'}}>
            Leave review
          </Text>
        </ButtonToReview>
      </CardReviewDetailContainer>
    </CardReviewsContainer>
    <ReviewWaitContainer palette={palette} onPress={(()=>{setModalVisible(true)})}>
      <HeaderDescriptionReview >
        <FireIconSVG color={palette.primaryColor} />
        <Text
          style={{fontSize: 12, color: palette.primaryColor}}>
          99+
        </Text>
        <Text style={{fontSize: 12, color: 'grey', fontWeight: '600'}}>
          Peopel are waiting for your review
        </Text>
      </HeaderDescriptionReview>
      <View style={{flexDirection: 'row', marginRight: 10}}>
        <StarIconNotFilledIconSVG color={palette.primaryColor} />
        <StarIconNotFilledIconSVG color={palette.primaryColor} />
        <StarIconNotFilledIconSVG color={palette.primaryColor} />
        <StarIconNotFilledIconSVG color={palette.primaryColor} />
        <StarIconNotFilledIconSVG color={palette.primaryColor} />
      </View>
    </ReviewWaitContainer>
    {modalVisible && (
        <ModalReviewComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          stadiumId={stadiumUserReview?.id}
        />
      )}
    </>
  );
};

export default CardToReviewComponent;
