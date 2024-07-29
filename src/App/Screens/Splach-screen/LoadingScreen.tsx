import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text, StatusBar, useColorScheme} from 'react-native';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import {Image} from 'react-native';
import { fontSizeTextScreen } from '../../../assets/Styles';

const LoadingScreen: React.FC = () => {
  const palette = usePalette();
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.darkBackgroundColor,
      position:"relative"
    },
    imageContainer:{
      width: 200,
      height: 200,
      borderRadius: 100,
      alignSelf: 'center',
    },
    textStyle:{
      color:palette.primaryColor,
      fontWeight:"600",
      fontSize:14,
      position:"absolute",
      bottom:30,
      alignSelf:"center"
    }
  });
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.darkBackgroundColor}
      />
      <View>
        <Image
            source={colorScheme==="light"?require('../../../assets/Logos/MatchMate.png'):require('../../../assets/Logos/MatchMateDarkWhite.png')}
            // source={require('../../../assets/Logos/MatchMateDarkTurq.png')}
          style={styles.imageContainer}></Image>
        <ActivityIndicator size="large" color={palette.primaryColor} />
      </View>

        <Text style={styles.textStyle}>
            Match Mate
        </Text>
          
    </View>
  );
};



export default LoadingScreen;
