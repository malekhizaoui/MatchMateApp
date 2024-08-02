// import React, { useState } from 'react';
// import {
//   Text,
//   View,
//   StatusBar,
//   Image,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
// } from 'react-native';
// import {
//   ContainerApp,
//   TextNameProfile,
//   LineSperatorProperty,
//   EditProfileHeaderContainer,
//   ImageProfile,
//   HeaderTitleContainer,
//   EditProfilePropertiesContainer,
//   ProfilePropertyContent,
//   EditIconContainer,
//   EditIcon,
//   TxtBtn,
//   BtnContainer,
// } from './StyledComponent/StyledComponent';
// import { usePalette } from '../../../assets/color-palette/ThemeApp';
// import { InputUpdateFieldComponent } from '../../../Components/ProfileComponents/InputUpdateFieldComponent';
// import NavigateBack from '../../../Components/NavigateBack';
// import EditPicIconSVG from '../../../assets/Icons/svg/EditPicIconSVG';
// import useProfile from './useProfile'; // Ensure correct path to useProfile
// import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';

// let launchImageLibrary = _launchImageLibrary;
// let launchCamera = _launchCamera;

// const EditProfileScreen = ({ navigation }: any) => {
//   const palette = usePalette();

//   const {
//     userData,
//     setPassword,
//     setFirstName,
//     setLastName,
//     setAge,
//     updateUser, 
//     password,
//     firstName,
//     lastName,
//     age,
//     modalVisible, setModalVisible,
//     openImagePicker, handleCameraLaunch
//   } = useProfile(navigation);
  // const styles = StyleSheet.create({
  //   overlay: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   centeredView: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginTop: 22,
     
  //   },
  //   modalView: {
  //     // margin: 20,
  //     backgroundColor: palette.primaryTextColor,
  //     borderRadius: 20,
  //     padding: 35,
  //     alignItems: "center",
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 2
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 4,
  //     elevation: 5
  //   },
  //   openButton: {
  //     backgroundColor: palette.primaryColor,
  //     borderRadius: 10,
  //     padding: 10,
  //     elevation: 2,
  //     marginBottom: 10,
  //     width:170
  //   },
  //   textStyle: {
  //     color: "white",
  //     fontWeight: "bold",
  //     textAlign: "center"
  //   },
  // });
//   return (
//     <ContainerApp palette={palette}>
//       <NavigateBack
//         navigation={navigation}
//         headerTitle={'Edit profile'}
//         color={palette.darkBackgroundColor}
//       />
//       <StatusBar
//         barStyle={'light-content'}
//         backgroundColor={palette.primaryColor}
//       />
//       <EditProfileHeaderContainer palette={palette}>
//         <View style={{ position: 'relative' }}>
//           <ImageProfile palette={palette}
//             source={
//               userData?.image
//                 ? { uri: userData.image }
//                 : require('../../../assets/Images/userAnonymousImage.png')
//             }
//           />
//           <EditIconContainer>
//             <TouchableOpacity onPress={() => setModalVisible(true)}>
//               <EditIcon palette={palette}>
//                 <EditPicIconSVG color={palette.blackColor} />
//               </EditIcon>
//             </TouchableOpacity>
//           </EditIconContainer>
//         </View>
//         <HeaderTitleContainer>
//           <TextNameProfile palette={palette}>
//             {userData?.firstName} {userData?.lastName}
//           </TextNameProfile>
//           <TextNameProfile palette={palette}>{userData?.email}</TextNameProfile>
//         </HeaderTitleContainer>
//       </EditProfileHeaderContainer>
//       <EditProfilePropertiesContainer palette={palette}>
//         <ProfilePropertyContent>
//           <InputUpdateFieldComponent
//             inputName="First name"
//             placeholder={`Edit ${userData?.firstName}`}
//             setValue={setFirstName}
//             value={firstName}
//           />
//           <LineSperatorProperty palette={palette} />
//           <InputUpdateFieldComponent
//             inputName="Last name"
//             placeholder={`Edit ${userData?.lastName}`}
//             setValue={setLastName}
//             value={lastName}
//           />
//           <LineSperatorProperty palette={palette} />
//           <InputUpdateFieldComponent
//             inputName="Age"
//             placeholder={`Edit ${userData?.age} years old`}
//             setValue={setAge}
//             value={age}
//           />
//           <LineSperatorProperty palette={palette} />
//           <InputUpdateFieldComponent
//             inputName="Password"
//             placeholder={`Edit ***********`}
//             setValue={setPassword}
//             value={password}
//           />
//           <LineSperatorProperty palette={palette} />
//         </ProfilePropertyContent>
//         <BtnContainer palette={palette} onPress={updateUser}>
//           <TxtBtn palette={palette}>Save changes</TxtBtn>
//         </BtnContainer>
//       </EditProfilePropertiesContainer>
      
      // {modalVisible && (
      //   <View style={styles.overlay}>
      //     <Modal
      //       animationType="slide"
      //       transparent={true}
      //       visible={modalVisible}
      //       onRequestClose={() => {
      //         setModalVisible(!modalVisible);
      //       }}
      //     >
      //       <View style={styles.centeredView}>
      //         <View style={styles.modalView}>
      //           <TouchableOpacity
      //             style={styles.openButton}
      //             onPress={() => {
      //               handleCameraLaunch();
      //               setModalVisible(false);
      //             }}
      //           >
      //             <Text style={styles.textStyle}>Take a Selfie</Text>
      //           </TouchableOpacity>
      //           <TouchableOpacity
      //             style={styles.openButton}
      //             onPress={() => {
      //               openImagePicker();
      //               setModalVisible(false);
      //             }}
      //           >
      //             <Text style={styles.textStyle}>Choose from Gallery</Text>
      //           </TouchableOpacity>
      //           <TouchableOpacity
      //             style={styles.openButton}
      //             onPress={() => setModalVisible(false)}
      //           >
      //             <Text style={styles.textStyle}>Cancel</Text>
      //           </TouchableOpacity>
      //         </View>
      //       </View>
      //     </Modal>
      //   </View>
      // )}
//     </ContainerApp>
//   );
// };



// export default EditProfileScreen;
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
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

const EditProfileScreen = ({ navigation }:any) => {
  const palette = usePalette();
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
      // margin: 20,
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
      width:170
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
        headerTitle={'Edit profile'}
        color={palette.darkBackgroundColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.primaryColor}
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
      contentContainerStyle={{justifyContent:"space-between",alignItems:"center"}}
      palette={palette}>
        <ProfilePropertyContent>
          <InputUpdateFieldComponent
            inputName="First name"
            placeholder={`Edit ${userData?.firstName}`}
            setValue={setFirstName}
            value={firstName}
          />
          <LineSperatorProperty palette={palette} />
          <InputUpdateFieldComponent
            inputName="Last name"
            placeholder={`Edit ${userData?.lastName}`}
            setValue={setLastName}
            value={lastName}
          />
          <LineSperatorProperty palette={palette} />
          <InputUpdateFieldComponent
            inputName="Age"
            placeholder={`Edit ${userData?.age} years old`}
            setValue={setAge}
            value={age}
          />
          <LineSperatorProperty palette={palette} />
          <InputUpdateFieldComponent
            inputName="Password"
            placeholder={`Edit ***********`}
            setValue={setPassword}
            value={password}
          />
          <LineSperatorProperty palette={palette} />
        </ProfilePropertyContent>
        <BtnContainer palette={palette} onPress={() => updateUser()}>
          <TxtBtn palette={palette}>Save changes</TxtBtn>
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
                  <Text style={styles.textStyle}>Take a Selfie</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.openButton}
                  onPress={() => {
                    openImagePicker();
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>Choose from Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.openButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
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

