import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, useColorScheme, Image } from 'react-native';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { AuthContext } from '../../../services/Context/AuthContext';

// Functional component for displaying a loading screen
const LoadingScreen: React.FC = () => {
  // Retrieve color palette for theming
  const palette = usePalette();
  
  // Determine the current color scheme (light or dark)
  const colorScheme = useColorScheme();
  
  // Access light mode status from AuthContext
  const { lightModeStatus } = useContext(AuthContext);

  // Log current values for debugging
  console.log("Current palette:", palette);
  console.log("Color scheme:", colorScheme);

  // Styles for the loading screen
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.darkBackgroundColor, // Background color based on the palette
      position: "relative",
    },
    imageContainer: {
      width: 200,
      height: 200,
      borderRadius: 100, // Makes the image circular
      alignSelf: 'center',
    },
    textStyle: {
      color: palette.primaryColor, // Text color based on the palette
      fontWeight: "600",
      fontSize: 14,
      position: "absolute",
      bottom: 30,
      alignSelf: "center",
    }
  });

  return (
    <View style={styles.container}>
      <View>
        {/* Display logo based on the current color scheme */}
        <Image
          source={colorScheme === "light" 
            ? require('../../../assets/Logos/MatchMate.png') 
            : require('../../../assets/Logos/MatchMateDarkWhite.png')}
          style={styles.imageContainer}
        />
        {/* Activity indicator to show loading state */}
        <ActivityIndicator size="large" color={palette.primaryColor} />
      </View>
      {/* Displaying text at the bottom of the screen */}
      <Text style={styles.textStyle}>
        Match Mate
      </Text>
    </View>
  );
};

export default LoadingScreen;
