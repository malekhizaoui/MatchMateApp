import React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Linking,
  useColorScheme,
} from 'react-native';
import styled from 'styled-components/native';
import { ContainerAppReviews,LineSperator } from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';

const AboutScreen = ({ navigation }:any) => {
  const palette = usePalette();
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      alignItems: 'center',
      backgroundColor: palette.darkBackgroundColor,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: palette.secondaryTextColor,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      color: palette.secondaryTextColor,
      marginBottom: 20,
    },
    featureTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: palette.secondaryTextColor,
      marginTop: 20,
      marginBottom: 10,
    },
    featureItem: {
      fontSize: 16,
      color: palette.secondaryTextColor,
      marginBottom: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: palette.secondaryTextColor,
      marginTop: 20,
      marginBottom: 10,
    },
    link: {
      color: palette.secondaryTextColor,
      textDecorationLine: 'underline',
    },
  });

  const handleLinkPress = ({url}:any) => {
    Linking.openURL(url);
  };

  return (
    <ContainerAppReviews palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={'About App'}
      />
      
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <LogoApp
            source={colorScheme==="light"?require('../../../assets/Logos/MatchMate.png'):require('../../../assets/Logos/MatchMateDarkWhite.png')}
            />
        </View>
        <Text style={styles.title}>MatchMate</Text>
        <Text style={styles.description}>
          MatchMate is your ultimate companion for finding and joining sports activities in your area. Whether you're into basketball, football, or volleyball, MatchMate connects you with local games and teams. Book stadium time slots, generate QR codes for entry, and track your sports activities all in one place.
        </Text>
        <LineSperator palette={palette}></LineSperator>
        <Text style={styles.featureTitle}>Key Features:</Text>
        <Text style={styles.featureItem}>• Join Teams and Play Sports: Find and join teams to play basketball, football, volleyball, and more with people in your locality.</Text>
        <Text style={styles.featureItem}>• Book Stadium Time Slots: Easily book available time slots at local stadiums directly through the app.</Text>
        <Text style={styles.featureItem}>• Generate QR Codes: Get a QR code for your bookings to streamline your stadium entry process.</Text>
        <Text style={styles.featureItem}>• Profile Management: View and manage your profile, including your personal details and sports preferences.</Text>
        <Text style={styles.featureItem}>• Game History: Keep track of all the games you've played, with detailed history and stats.</Text>
        <Text style={styles.featureItem}>• User Reviews: Read and write reviews for players and games, helping to build a trusted community.</Text>
        <Text style={styles.featureItem}>• Leaderboard: See who the most active players are with our leaderboard, showcasing the top players based on games played.</Text>
        <LineSperator palette={palette}></LineSperator>
        <Text style={styles.sectionTitle}>Contact Us:</Text>
        <Text style={styles.featureItem}>For support, feedback, or inquiries, please contact us at:</Text>
        <Text style={styles.featureItem}>Email: support@matchmate.com</Text>
        <Text style={styles.featureItem}>Phone: +123-456-7890</Text>
        <LineSperator palette={palette}></LineSperator>

        <Text style={styles.sectionTitle}>Version:</Text>
        <Text style={styles.featureItem}>App Version: 1.0.0</Text>
        <LineSperator palette={palette}></LineSperator>

        <Text style={styles.sectionTitle}>Legal:</Text>
        <Text style={styles.featureItem}>
          <Text style={styles.link} onPress={() => handleLinkPress('https://www.matchmate.com/privacy-policy')}>
            Privacy Policy
          </Text>
        </Text>
        <Text style={styles.featureItem}>
          <Text style={styles.link} onPress={() => handleLinkPress('https://www.matchmate.com/terms-of-service')}>
            Terms of Service
          </Text>
        </Text>
      </ScrollView>
    </ContainerAppReviews>
  );
};

const LogoApp = styled.Image`
  height: 175px;
  width: 175px;
`;

export default AboutScreen;
