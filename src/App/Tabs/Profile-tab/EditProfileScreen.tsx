import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
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
import { MatchMatePalette } from '../../../assets/color-palette';
import { InputUpdateFieldComponent } from '../../../Components/ProfileComponents/InputUpdateFieldComponent';
import NavigateBack from '../../../Components/NavigateBack';
import EditPicIconSVG from '../../../assets/Icons/svg/EditPicIconSVG';
import useProfile from './useProfile'; // Ensure correct path to useProfile

const EditProfileScreen = ({ navigation }: any) => {
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
    choosePhotoFromLibrary
  } = useProfile(navigation);

  return (
    <ContainerApp>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Edit profile'}
        color={MatchMatePalette.darkBackgroundColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <EditProfileHeaderContainer >
        <View style={{ position: 'relative' }}>
          <ImageProfile
            source={
              {uri:"https://media.licdn.com/dms/image/D4E03AQF9mGOMHjgeFw/profile-displayphoto-shrink_800_800/0/1691514563140?e=2147483647&v=beta&t=Dtl8CXMfr032HwoVz3eo6slKJ-KUKFzGAocaqZMnvIw"}
              // userData?.image
              //   ? { uri: userData.image }
              //   : require('../../../assets/Images/userAnonymousImage.png')
            }
          />
          <EditIconContainer>
            <TouchableOpacity onPress={choosePhotoFromLibrary}>
              <EditIcon>
                <EditPicIconSVG color={MatchMatePalette.darkBackgroundColor} />
              </EditIcon>
            </TouchableOpacity>
          </EditIconContainer>
        </View>
        <HeaderTitleContainer>
          <TextNameProfile>
            {userData?.firstName} {userData?.lastName}
          </TextNameProfile>
          <TextNameProfile>{userData?.email}</TextNameProfile>
        </HeaderTitleContainer>
      </EditProfileHeaderContainer>
      <EditProfilePropertiesContainer>
        <ProfilePropertyContent>
          <InputUpdateFieldComponent
            inputName="First name"
            placeholder={`Edit ${userData?.firstName}`}
            setValue={setFirstName}
            value={firstName}
          />
          <LineSperatorProperty />
          <InputUpdateFieldComponent
            inputName="Last name"
            placeholder={`Edit ${userData?.lastName}`}
            setValue={setLastName}
            value={lastName}
          />
          <LineSperatorProperty />
          <InputUpdateFieldComponent
            inputName="Age"
            placeholder={`Edit ${userData?.age} years old`}
            setValue={setAge}
            value={age}
          />
          <LineSperatorProperty />
          <InputUpdateFieldComponent
            inputName="Password"
            placeholder={`Edit ***********`}
            setValue={setPassword}
            value={password}
          />
          <LineSperatorProperty />
        </ProfilePropertyContent>
        <BtnContainer onPress={() => updateUser()}>
          <TxtBtn>Save changes</TxtBtn>
        </BtnContainer>
      </EditProfilePropertiesContainer>
    </ContainerApp>
  );
};

export default EditProfileScreen;
