import React, {useState} from 'react';
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
} from 'react-native'; // Import TextInput and StyleSheet
import StarIconNotFilledIconSVG from '../../assets/Icons/svg/StarIconNotFilledIconSVG';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import CloseIconSVG from '../../assets/Icons/svg/CloseIconSVG';
import {MatchMatePalette} from '../../assets/color-palette';
import {handleRequests} from '../../services/HandleRequests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';

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
  const toast =useToast()
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const addFeedback = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      handleRequests('post', `feedback/${userId}/${stadiumId}`, {
        stars: rating,
        comment: reviewText,
      });
      toast.show('Your Feedback has bee successfully added', { type: 'success', placement: 'center', duration: 4000,style: { backgroundColor: MatchMatePalette.primaryColor }  });
      setModalVisible(false);
    } catch (error) {
      console.log('err', error);
    }
  };

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
          <ModalView>
            <CloseButton onPress={() => setModalVisible(false)}>
              <CloseIconSVG />
            </CloseButton>
            <TextReviewQs>
              Select stars and tags to leave a quick review.
            </TextReviewQs>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity
                  key={star}
                  onPress={() => setRating(star)}
                  activeOpacity={0.7}
                  style={{marginRight: 5, marginTop: 10}}>
                  {star <= rating ? (
                    <StarIconSVG
                      color={MatchMatePalette.primaryColor}
                      size="35"
                    />
                  ) : (
                    <StarIconNotFilledIconSVG
                      color={MatchMatePalette.primaryColor}
                      size="35"
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholderTextColor="white"
                placeholder="Write your review here..."
                value={reviewText}
                onChangeText={setReviewText}
                multiline
                style={[styles.input, {textAlignVertical: 'top'}]}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={addFeedback}
              activeOpacity={0.7}>
              <Text style={{color: MatchMatePalette.whiteColor}}>Submit</Text>
            </TouchableOpacity>
          </ModalView>
        </CenteredView>
      </Modal>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: MatchMatePalette.darkBackgroundColor,
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
    backgroundColor: MatchMatePalette.primaryColor, // Example background color
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalReviewComponent;
