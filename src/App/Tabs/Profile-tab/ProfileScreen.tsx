import React from 'react';
import {Text, View, StatusBar, Image, Button, TouchableOpacity} from 'react-native';
import {
  ContainerApp,
  TextHeader,
  TextNameProfile,
  LineSperator,
} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import GameHistoryIconSVG from '../../../assets/Icons/svg/GameHistoryIconSVG';
import InfoPersoIconSVG from '../../../assets/Icons/svg/InfoPersoIconSVG';
import SettingsIconSVG from '../../../assets/Icons/svg/SettingsIconSVG';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';
import LogoutIconSVG from '../../../assets/Icons/svg/LogoutIconSVG';
const ProfileScreen = () => {
  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <TextHeader>ProfileScreen</TextHeader>
      <View
        style={{
          width: '100%',
          height: '35%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
         <Image
  source={require('../../../assets/Images/yasmine.jpg')} // Correct usage for local images
  style={{
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 2,
    margin: 10,
  }}
/>
        <View
          style={{
            display: 'flex',
            margin: 10,
            alignItems: 'center',
          }}>
          <TextNameProfile>Yasmine ghali</TextNameProfile>
          <TextNameProfile>YasmineGhali@gmail.com</TextNameProfile>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '65%',
          backgroundColor: MatchMatePalette.darkBackgroundColor,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          display: 'flex',
          paddingTop: 40,
          paddingBottom: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: 20,
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <InfoPersoIconSVG color="white" />
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  marginLeft: 20,
                  fontWeight: '600',
                }}>
                Personal information
              </Text>
            </View>
            <NextIconSVG color="white" />
          </View>
          <LineSperator></LineSperator>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SettingsIconSVG color="white" />
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  marginLeft: 20,
                  fontWeight: '600',
                }}>
                Settings
              </Text>
            </View>
            <NextIconSVG color="white" />
          </View>
          <LineSperator></LineSperator>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <GameHistoryIconSVG color="white" />
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  marginLeft: 20,
                  fontWeight: '600',
                }}>
                Game history
              </Text>
            </View>
            <NextIconSVG color="white" />
          </View>
          <LineSperator></LineSperator>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <LogoutIconSVG color="red" />
              <Text
                style={{
                  fontSize: 16,
                  color: 'red',
                  marginLeft: 20,
                  fontWeight: '600',
                }}>
                Log out
              </Text>
            </View>
            <NextIconSVG color="red" />
          </View>

        </View>
        
                {/* <TouchableOpacity style={{backgroundColor:MatchMatePalette.primaryColor,width:'70%',height:50,display:"flex",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                <Text  style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: '600',
                }}>Logout</Text>
                </TouchableOpacity> */}
      </View>
    </ContainerApp>
  );
};

export default ProfileScreen;
