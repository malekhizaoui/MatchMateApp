import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  CardReviewsContainer,
  CardReviewDetailContainer,
  HeaderDescriptionReview,
  ImageStadiumReview,
  TextNameProfile,
  ButtonToReview,
  ReviewWaitContainer,
} from './StyledComponent/StyledComponent';
import FireIconSVG from '../../assets/Icons/svg/FireIconSVG';
import StarIconNotFilledIconSVG from '../../assets/Icons/svg/StarIconNotFilledIconSVG';
import { Stadium } from '../../App/models/Stadium';
import ModalReviewComponent from './ModalReviewComponent';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next';

interface CardToReviewComponentProps {
  stadiumUserReview: Stadium;
}

const CardToReviewComponent = ({ stadiumUserReview }: CardToReviewComponentProps) => {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const palette = usePalette();
  const { t } = useTranslation();

  return (
    <>
      <CardReviewsContainer>
        <CardReviewDetailContainer>
          <HeaderDescriptionReview>
            <ImageStadiumReview source={{ uri: stadiumUserReview.imageURL }} />
            <TextNameProfile palette={palette}>{stadiumUserReview.stadiumName}</TextNameProfile>
          </HeaderDescriptionReview>
          <ButtonToReview palette={palette} onPress={() => setModalVisible(true)}>
            <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>
              {t('profile.reviews.leaveReview')}
            </Text>
          </ButtonToReview>
        </CardReviewDetailContainer>
      </CardReviewsContainer>
      <ReviewWaitContainer palette={palette} onPress={() => setModalVisible(true)}>
        <HeaderDescriptionReview>
          <FireIconSVG color={palette.primaryColor} />
          <Text style={{ fontSize: 12, color: palette.primaryColor }}>
            99+
          </Text>
          <Text style={{ fontSize: 12, color: 'grey', fontWeight: '600' }}>
            {t('profile.reviews.peopleWaiting')}
          </Text>
        </HeaderDescriptionReview>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
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
