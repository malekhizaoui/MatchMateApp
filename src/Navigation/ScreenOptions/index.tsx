import { View, Text } from 'react-native';
import ProfileIconSVG from '../../assets/Icons/svg/TabsIcon/ProfileIconSVG';
import HomeIconSVG from '../../assets/Icons/svg/TabsIcon/HomeIconSVG';
import LeaderboardIconSCG from '../../assets/Icons/svg/TabsIcon/LeaderboardIconSCG';
import BookingIconSVG from '../../assets/Icons/svg/TabsIcon/BookingIconSVG';
import { MatchMatePalette } from '../../assets/color-palette';

interface ScreenOptions {
  color: string;
  focused: boolean;
}

export const ScreenOptions = ({ navigation, route }:any) => ({
  title: '',
  headerShown: false,
  tabBarIcon: ({ focused, color }:any) => {
    let iconName;
    let name;
    if (route.name === 'HomeTab') {
      iconName = focused ? <HomeIconSVG color={MatchMatePalette.primaryColor} /> : <HomeIconSVG color={MatchMatePalette.secondaryTextColor} />;
      name = 'Home';
    } else if (route.name === 'ProfileTab') {
      iconName = focused ? <ProfileIconSVG color={MatchMatePalette.primaryColor} /> : <ProfileIconSVG color={MatchMatePalette.secondaryTextColor} />;
      name = 'Profile';
    } else if (route.name === 'LeaderboardTab') {
      iconName = focused ? <LeaderboardIconSCG color={MatchMatePalette.primaryColor} /> : <LeaderboardIconSCG color={MatchMatePalette.secondaryTextColor} />;
      name = 'Leaderboard';
    } else if (route.name === 'BookingTab') {
      iconName = focused ? <BookingIconSVG color={MatchMatePalette.primaryColor} /> : <BookingIconSVG color={MatchMatePalette.secondaryTextColor} />;
      name = 'Booking';
    
    } 

    return (
      <View style={{ alignItems: 'center' }}>
        {iconName}
        <Text style={{ color }}>{name}</Text>
      </View>
    );
  },
  tabBarActiveTintColor: MatchMatePalette.primaryColor,
  tabBarInactiveTintColor: MatchMatePalette.secondaryTextColor,
});
