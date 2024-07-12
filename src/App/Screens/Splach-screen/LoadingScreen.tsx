import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text, StatusBar} from 'react-native';
import {MatchMatePalette} from '../../../assets/color-palette';
import {Image} from 'react-native';
import { fontSizeTextScreen } from '../../../assets/Styles';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <View>
        <Image
          source={require('../../../assets/Logos/MatchMateDarkTurq.png')}
          style={styles.imageContainer}></Image>
        <ActivityIndicator size="large" color={MatchMatePalette.primaryColor} />
      </View>

        <Text style={styles.textStyle}>
            Match Mate
        </Text>
          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MatchMatePalette.darkBackgroundColor,
    position:"relative"
  },
  imageContainer:{
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
  textStyle:{
    color:MatchMatePalette.primaryColor,
    fontWeight:"600",
    fontSize:14,
    position:"absolute",
    bottom:30,
    alignSelf:"center"
  }
});

export default LoadingScreen;
