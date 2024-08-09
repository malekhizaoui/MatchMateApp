import { View, Text } from 'react-native';
import ProfileIconSVG from '../../assets/Icons/svg/TabsIcon/ProfileIconSVG';
import HomeIconSVG from '../../assets/Icons/svg/TabsIcon/HomeIconSVG';
import LeaderboardIconSCG from '../../assets/Icons/svg/TabsIcon/LeaderboardIconSCG';
import BookingIconSVG from '../../assets/Icons/svg/TabsIcon/BookingIconSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next';

interface ScreenOptions {
  color: string;
  focused: boolean;
}

export const ScreenOptions = ({ navigation, route }:any) => {
  const palette=usePalette()
  const {t}=useTranslation()
  return ({
  title: '',
  headerShown: false,
  tabBarIcon: ({ focused, color }:any) => {
    let iconName;
    let name;
    if (route.name === 'HomeTab') {
      iconName = focused ? <HomeIconSVG color={palette.primaryColor} /> : <HomeIconSVG color={palette.secondaryTextColor} />;
      name = t("tabs.home");
    } else if (route.name === 'ProfileTab') {
      iconName = focused ? <ProfileIconSVG color={palette.primaryColor} /> : <ProfileIconSVG color={palette.secondaryTextColor} />;
      name = t("tabs.profile");
    } else if (route.name === 'LeaderboardTab') {
      iconName = focused ? <LeaderboardIconSCG color={palette.primaryColor} /> : <LeaderboardIconSCG color={palette.secondaryTextColor} />;
      name = t("tabs.leaderboard");
    } else if (route.name === 'BookingTab') {
      iconName = focused ? <BookingIconSVG color={palette.primaryColor} /> : <BookingIconSVG color={palette.secondaryTextColor} />;
      name = t("tabs.booking");
    
    } 

    return (
      <View style={{ alignItems: 'center' }}>
        {iconName}
        <Text style={{ color }}>{name}</Text>
      </View>
    );
  },
  tabBarActiveTintColor: palette.primaryColor,
  tabBarInactiveTintColor: palette.secondaryTextColor,
});}
