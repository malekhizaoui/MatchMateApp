import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {
  ContainerApp,
  TextNameProfile,
  LineSperatorProperty,
  EditProfileHeaderContainer,
  ImageProfile,
  HeaderTitleContainer,
  EditProfilePropertiesContainer,
  ProfilePropertyContent,
  EditIconContainer,
  EditIcon,
  TxtBtn,
  BtnContainer,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { InputUpdateFieldComponent } from '../../../Components/ProfileComponents/InputUpdateFieldComponent';
import NavigateBack from '../../../Components/NavigateBack';
import EditPicIconSVG from '../../../assets/Icons/svg/EditPicIconSVG';
import useProfile from './useProfile';
import { useTranslation } from 'react-i18next';

const EditProfileScreen = ({ navigation }: any) => {
  const palette = usePalette();
  const { t } = useTranslation(); // Use the useTranslation hook
  const styles = StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
      justifyContent: 'center',
      alignItems: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      backgroundColor: palette.primaryTextColor,
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    openButton: {
      backgroundColor: palette.primaryColor,
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginBottom: 10,
      width: 170
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });
  const {
    userData,
    setPassword,
    setFirstName,
    setLastName,
    setAge,
    updateUser,
    password,
    firstName,
    lastName,
    age,
    modalVisible,
    setModalVisible,
    openImagePicker,
    handleCameraLaunch,
  } = useProfile({ navigation });

  return (
    <ContainerApp palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={t('profile.editProfile.header')}
        color={palette.darkBackgroundColor}
      />

      <EditProfileHeaderContainer palette={palette}>
        <View style={{ position: 'relative' }}>
          <ImageProfile
            palette={palette}
            source={
              userData?.image
                ? { uri: userData.image }
                : require('../../../assets/Images/userAnonymousImage.png')
            }
          />
          <EditIconContainer>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <EditIcon palette={palette}>
                <EditPicIconSVG color={palette.blackColor} />
              </EditIcon>
            </TouchableOpacity>
          </EditIconContainer>
        </View>
        <HeaderTitleContainer>
          <TextNameProfile palette={palette}>
            {userData?.firstName} {userData?.lastName}
          </TextNameProfile>
          <TextNameProfile palette={palette}>{userData?.email}</TextNameProfile>
        </HeaderTitleContainer>
      </EditProfileHeaderContainer>
      <EditProfilePropertiesContainer
        contentContainerStyle={{ justifyContent: "space-between", alignItems: "center" }}
        palette={palette}>
        <ProfilePropertyContent>
          <InputUpdateFieldComponent
            inputName={t('profile.editProfile.firstName')}
            placeholder={`${t('profile.editProfile.firstName')} ${userData?.firstName}`}
            setValue={setFirstName}
            value={firstName}
          />
          <LineSperatorProperty palette={palette} />
          <InputUpdateFieldComponent
            inputName={t('profile.editProfile.lastName')}
            placeholder={`${t('profile.editProfile.lastName')} ${userData?.lastName}`}
            setValue={setLastName}
            value={lastName}
          />
          <LineSperatorProperty palette={palette} />
          <InputUpdateFieldComponent
            inputName={t('profile.editProfile.age')}
            placeholder={`${t('profile.editProfile.age')} ${userData?.age} ${t('yearsOld')}`}
            setValue={setAge}
            value={age}
          />
          <LineSperatorProperty palette={palette} />
          <InputUpdateFieldComponent
            inputName={t('profile.editProfile.password')}
            placeholder={t('profile.editProfile.password')}
            setValue={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <LineSperatorProperty palette={palette} />
        </ProfilePropertyContent>
        <BtnContainer palette={palette} onPress={() => updateUser()}>
          <TxtBtn palette={palette}>{t('profile.editProfile.saveChanges')}</TxtBtn>
        </BtnContainer>
      </EditProfilePropertiesContainer>

      {/* Modal for choosing image source */}
      {modalVisible && (
        <View style={styles.overlay}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.openButton}
                  onPress={() => {
                    handleCameraLaunch();
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>{t('profile.editProfile.takeSelfie')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.openButton}
                  onPress={() => {
                    openImagePicker();
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>{t('profile.editProfile.chooseFromGallery')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.openButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>{t('profile.editProfile.cancel')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </ContainerApp>
  );
};

export default EditProfileScreen;
