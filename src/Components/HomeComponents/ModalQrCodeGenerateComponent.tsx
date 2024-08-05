import React from 'react';
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
  StyleSheet,
  Image
} from 'react-native';
import CloseIconSVG from '../../assets/Icons/svg/CloseIconSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const palette = usePalette();
  
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
      backgroundColor: palette.primaryColor,
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
      color: palette.whiteColor,
    },
    qrCodeImage: {
      width: 200,
      height: 200,
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
              {t('home.stadiumAvailability.qrCodeMessage')}
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

export default ModalQrCodeGenerateComponent;
