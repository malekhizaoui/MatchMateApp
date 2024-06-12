import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  ContainerApp,
  TextHeader,
  TextNameProfile,
  LineSperatorProperty,
  EditProfileHeaderContainer,
  ImageProfile,
  HeaderTitleContainer,
  EditProfilePropertiesContainer,
  ProfilePropertyContent,
  EditIconContainer,
  EditIcon,
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import GameHistoryIconSVG from '../../../assets/Icons/svg/GameHistoryIconSVG';
import InfoPersoIconSVG from '../../../assets/Icons/svg/InfoPersoIconSVG';
import SettingsIconSVG from '../../../assets/Icons/svg/SettingsIconSVG';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';
import LogoutIconSVG from '../../../assets/Icons/svg/LogoutIconSVG';
import ProfilePropertyComponent from '../../../Components/ProfileComponents/ProfilePropertyComponent';
import {InputUpdateFieldComponent} from '../../../Components/ProfileComponents/InputUpdateFieldComponent';
import NavigateBack from '../../../Components/NavigateBack';
import EditPicIconSVG from '../../../assets/Icons/svg/EditPicIconSVG';
const EditProfileScreen = ({navigation}: any) => {
  return (
    <ContainerApp>
      <NavigateBack navigation={navigation} headerTitle={'Edit profile'} color={MatchMatePalette.darkBackgroundColor} />

      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <EditProfileHeaderContainer>
        <View style={{position: 'relative'}}>
          <ImageProfile
            source={require('../../../assets/Images/yasmine.jpg')}></ImageProfile>
          <EditIconContainer>
            <TouchableOpacity onPress={() => {}}>
              <EditIcon>
                <EditPicIconSVG color={MatchMatePalette.darkBackgroundColor} />
              </EditIcon>
            </TouchableOpacity>
          </EditIconContainer>
        </View>

        <HeaderTitleContainer>
          <TextNameProfile>Yasmine ghali</TextNameProfile>
          <TextNameProfile>YasmineGhali@gmail.com</TextNameProfile>
        </HeaderTitleContainer>
      </EditProfileHeaderContainer>
      <EditProfilePropertiesContainer>
        <ProfilePropertyContent>
          <InputUpdateFieldComponent
            inputName="First name"
            placeholder={`Edit Yasmine`}
          />
          <LineSperatorProperty></LineSperatorProperty>
          <InputUpdateFieldComponent
            inputName="Last name"
            placeholder={`Edit Ghali`}
          />
          <LineSperatorProperty></LineSperatorProperty>
          <InputUpdateFieldComponent
            inputName="Age"
            placeholder={`Edit 23 years old`}
          />
          <LineSperatorProperty></LineSperatorProperty>
          <InputUpdateFieldComponent
            inputName="Password"
            placeholder={`Edit ***********`}
          />
          <LineSperatorProperty></LineSperatorProperty>
        </ProfilePropertyContent>

        <TouchableOpacity
          style={{
            backgroundColor: MatchMatePalette.secondaryColor,
            width: '70%',
            height: 50,
            display: 'flex',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontWeight: '600',
            }}>
            Save changes
          </Text>
        </TouchableOpacity>
      </EditProfilePropertiesContainer>
    </ContainerApp>
  );
};

export default EditProfileScreen;
