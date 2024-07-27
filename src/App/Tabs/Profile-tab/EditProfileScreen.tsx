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
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { InputUpdateFieldComponent } from '../../../Components/ProfileComponents/InputUpdateFieldComponent';
import NavigateBack from '../../../Components/NavigateBack';
import EditPicIconSVG from '../../../assets/Icons/svg/EditPicIconSVG';
import useProfile from './useProfile'; // Ensure correct path to useProfile

const EditProfileScreen = ({ navigation }: any) => {
  const palette = usePalette();

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
  } = useProfile(navigation);

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
          <ImageProfile palette={palette}
            source={
              // {uri:"https://media.licdn.com/dms/image/D4E03AQF9mGOMHjgeFw/profile-displayphoto-shrink_800_800/0/1691514563140?e=2147483647&v=beta&t=Dtl8CXMfr032HwoVz3eo6slKJ-KUKFzGAocaqZMnvIw"}
              userData?.image
                ? { uri: userData.image }
                : require('../../../assets/Images/userAnonymousImage.png')
            }
          />
          <EditIconContainer>
            <TouchableOpacity >
              <EditIcon palette={palette}>
                <EditPicIconSVG color={palette.secondaryTextColor} />
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
      <EditProfilePropertiesContainer palette={palette}>
        <ProfilePropertyContent>
          <InputUpdateFieldComponent
            inputName="First name"
            placeholder={`Edit ${userData?.firstName}`}
            setValue={setFirstName}
            value={firstName}
          />
          <LineSperatorProperty palette={palette}/>
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
          <LineSperatorProperty palette={palette}/>
          <InputUpdateFieldComponent
            inputName="Password"
            placeholder={`Edit ***********`}
            setValue={setPassword}
            value={password}
          />
          <LineSperatorProperty palette={palette}/>
        </ProfilePropertyContent>
        <BtnContainer palette={palette} onPress={() => updateUser()}>
          <TxtBtn palette={palette}>Save changes</TxtBtn>
        </BtnContainer>
      </EditProfilePropertiesContainer>
    </ContainerApp>
  );
};

export default EditProfileScreen;
