import React,{useContext, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, StatusBar, useColorScheme} from 'react-native';
import PagerView from 'react-native-pager-view';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';
import { OnboardFlow } from 'react-native-onboard';
import { AuthContext } from '../../../services/Context/AuthContext';

const DemoScreen = ({navigation}:any) => {
    const pagerRef = useRef<PagerView>(null);
    const palette = usePalette();
    const { lightModeStatus } = useContext(AuthContext);
    const colorScheme = useColorScheme();

    const goToNextPage = (value: number) => {
      if (pagerRef.current) {
        pagerRef.current.setPage(value);
      }
    };
   return (<>
   {/* StatusBar configuration based on theme and mode */}
   <StatusBar
        barStyle={
          lightModeStatus
            ? lightModeStatus === 'light'
              ? 'dark-content'
              : 'light-content'
            : colorScheme === 'light'
            ? 'dark-content'
            : 'light-content'
        }
        backgroundColor={palette.darkBackgroundColor}
      />
    <OnboardFlow
  onNext={()=>{navigation.navigate('ConnexionMethod')}}
    style={{backgroundColor:palette.darkBackgroundColor}}
      pages={[
        {
          title: 'Welcome to my app',
          subtitle: 'This is page 1',
          imageUri: 'https://static.mycity.travel/manage/uploads/6/30/432076/1/vidy-beach-volley_2000.jpg',
          
        },
        {
          title: 'Page 2 header',
          subtitle: 'This is page 2',
          imageUri: 'https://static.mycity.travel/manage/uploads/6/30/432076/1/vidy-beach-volley_2000.jpg',
        }
      ]}
      type={'fullscreen'}

    />
    </>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default DemoScreen;
