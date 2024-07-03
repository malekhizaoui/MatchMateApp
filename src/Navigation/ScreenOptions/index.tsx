import {View, Text, Image, TouchableOpacity} from 'react-native';
import ProfileIconSVG from '../../assets/Icons/svg/TabsIcon/ProfileIconSVG';
import HomeIconSVG from '../../assets/Icons/svg/TabsIcon/HomeIconSVG';
import LeaderboardIconSCG from '../../assets/Icons/svg/TabsIcon/LeaderboardIconSCG';
import BookingIconSVG from '../../assets/Icons/svg/TabsIcon/BookingIconSVG';
import { MatchMatePalette } from '../../assets/color-palette';
interface ScreenOptions {
  color: string;
  focused: boolean;
}


export const ScreenOptions = ({navigation, route}: any) => ({
    title: '',
    headerShown: false,
    tabBarIcon: ({focused, color}: ScreenOptions) => {
      var namm;
      let iconName;
      let name;
      if (route.name === 'HomeTab') {
        iconName = !focused
          ? <HomeIconSVG color={MatchMatePalette.whiteColor}/>
          :<HomeIconSVG color={MatchMatePalette.primaryColor}/>
        name = 'home';
        namm = 'home';
      } else if (route.name === 'ProfileTab') {
        iconName = !focused
        ? <ProfileIconSVG color={MatchMatePalette.whiteColor}/>
        :<ProfileIconSVG color={MatchMatePalette.primaryColor}/>
        name = 'Profile';
      } else if (route.name === 'LeaderboardTab') {
        iconName = !focused
        ? <LeaderboardIconSCG color={MatchMatePalette.whiteColor}/>
        :<LeaderboardIconSCG color={MatchMatePalette.primaryColor}/>
        name = 'Leaderboard';
      } else if (route.name === 'BookingTab') {
        iconName = !focused
        ? <BookingIconSVG color={MatchMatePalette.whiteColor}/>
        :<BookingIconSVG color={MatchMatePalette.primaryColor}/>
        name = 'booking';
      } 
  
      return (
        <View style={{alignItems: 'center'}}>
          {/* {namm === 'home' ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NavigationTabHome');
              }}>
              <Image
                source={iconName}
                style={{
                  top: 13,
                }}
              />
            </TouchableOpacity>
          ) : ( */}
                {iconName}
          {/* )} */}
          {/* {color === '#E59138' ? ( */}
            <Text style={{color}}>{name}</Text>
        </View>
      );
    },
    tabBarActiveTintColor: MatchMatePalette.primaryColor,
    tabBarInactiveTintColor: MatchMatePalette.whiteColor,
  });