import React, { useState } from 'react';
import {
  Overlay,
  CenteredView,
  ModalView,
  CloseButton,
  TextReviewQs,
} from './StyledComponent/StyledComponent';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import StarIconNotFilledIconSVG from '../../assets/Icons/svg/StarIconNotFilledIconSVG';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import CloseIconSVG from '../../assets/Icons/svg/CloseIconSVG';
import { handleRequests } from '../../services/HandleRequests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface ModalReviewComponentProps {
  modalVisible: boolean;
  setModalVisible: (modalVis: boolean) => void;
  stadiumId: number | undefined;
}

const ModalReviewComponent = ({
  modalVisible,
  setModalVisible,
  stadiumId,
}: ModalReviewComponentProps) => {
  const palette = usePalette();
  const { t } = useTranslation(); // Initialize useTranslation

  const toast = useToast();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const addFeedback = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      handleRequests('post', `feedback/${userId}/${stadiumId}`, {
        stars: rating,
        comment: reviewText,
      });
      toast.show(t('modalReview.successMessage'), { type: 'success', placement: 'center', duration: 4000, style: { backgroundColor: palette.primaryColor } });
      setModalVisible(false);
    } catch (error) {
      console.log('err', error);
    }
  };

  const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 20,
      padding: 10,
      backgroundColor: palette.darkBackgroundColor,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      width: '100%',
    },
    input: {
      color: 'white',
      minHeight: 100,
    },
    button: {
      width: '70%',
      height: 40,
      borderRadius: 20,
      backgroundColor: palette.primaryColor, // Example background color
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Overlay>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <CenteredView>
          <ModalView palette={palette}>
            <CloseButton palette={palette} onPress={() => setModalVisible(false)}>
              <CloseIconSVG />
            </CloseButton>
            <TextReviewQs palette={palette}>
              {t('modalReview.selectStarsAndTags')}
            </TextReviewQs>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity
                  key={star}
                  onPress={() => setRating(star)}
                  activeOpacity={0.7}
                  style={{ marginRight: 5, marginTop: 10 }}>
                  {star <= rating ? (
                    <StarIconSVG
                      color={palette.primaryColor}
                      size="35"
                    />
                  ) : (
                    <StarIconNotFilledIconSVG
                      color={palette.primaryColor}
                      size="35"
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholderTextColor={palette.secondaryTextColor}
                placeholder={t('modalReview.writeReview')}
                value={reviewText}
                onChangeText={setReviewText}
                multiline
                style={[styles.input, { textAlignVertical: 'top' }]}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={addFeedback}
              activeOpacity={0.7}>
              <Text style={{ color: palette.whiteColor }}>{t('modalReview.submit')}</Text>
            </TouchableOpacity>
          </ModalView>
        </CenteredView>
      </Modal>
    </Overlay>
  );
};

export default ModalReviewComponent;
