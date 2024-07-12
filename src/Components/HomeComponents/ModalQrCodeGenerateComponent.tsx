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
  Image
} from 'react-native'; // Import TextInput and StyleSheet
import StarIconNotFilledIconSVG from '../../assets/Icons/svg/StarIconNotFilledIconSVG';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import CloseIconSVG from '../../assets/Icons/svg/CloseIconSVG';
import {MatchMatePalette} from '../../assets/color-palette';
import {handleRequests} from '../../services/HandleRequests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useToast} from 'react-native-toast-notifications';

interface ModalQrCodeGenerateComponentProps {
  modalVisible: boolean;
  setModalVisible: (modalVis: boolean) => void;
  stadiumId: number | undefined;
  qrCode?: string;
}

const ModalQrCodeGenerateComponent = ({
  modalVisible,
  setModalVisible,
  stadiumId,
  qrCode,
}: ModalQrCodeGenerateComponentProps) => {
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
              Your QrCode for this Booking has been successfully created
            </TextReviewQs>
         
            <View style={styles.qrCodeContainer}>
            <Image source={{ uri: qrCode }} style={styles.qrCodeImage} />
          </View>
       
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
    borderRadius: 10,
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
  qrCodeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  qrCodeLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: MatchMatePalette.whiteColor,
  },
  qrCodeImage: {
    width: 200,
    height: 200,
  },
});


export default ModalQrCodeGenerateComponent;
