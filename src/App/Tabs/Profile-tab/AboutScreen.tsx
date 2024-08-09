import React, {useContext} from 'react';
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
import {
  ContainerAppReviews,
  LineSperator,
} from './StyledComponent/StyledComponent';
import {usePalette} from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';
import {useTranslation} from 'react-i18next';
import {AuthContext} from '../../../services/Context/AuthContext';

const AboutScreen = ({navigation}: any) => {
  const {t} = useTranslation();
  const palette = usePalette();
  const colorScheme = useColorScheme();
  const {lightModeStatus} = useContext(AuthContext);
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

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ContainerAppReviews palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={t('profile.aboutScreen.headerTitle')}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <LogoApp
            source={
              !lightModeStatus
                ? colorScheme === 'light'
                  ? require('../../../assets/Logos/MatchMate.png')
                  : require('../../../assets/Logos/MatchMateDarkWhite.png')
                : lightModeStatus === 'light'
                ? require('../../../assets/Logos/MatchMate.png')
                : require('../../../assets/Logos/MatchMateDarkWhite.png')
            }
          />
        </View>
        <Text style={styles.title}>MatchMate</Text>
        <Text style={styles.description}>
          {t('profile.aboutScreen.description')}
        </Text>
        <LineSperator palette={palette}></LineSperator>
        <Text style={styles.featureTitle}>
          {t('profile.aboutScreen.keyFeaturesTitle')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.features.joinTeams')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.features.bookSlots')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.features.generateQR')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.features.profileManagement')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.features.gameHistory')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.features.userReviews')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.features.leaderboard')}
        </Text>
        <LineSperator palette={palette}></LineSperator>
        <Text style={styles.sectionTitle}>
          {t('profile.aboutScreen.contactUsTitle')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.contactUs')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.contactDetails.email')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.contactDetails.phone')}
        </Text>
        <LineSperator palette={palette}></LineSperator>

        <Text style={styles.sectionTitle}>
          {t('profile.aboutScreen.versionTitle')}
        </Text>
        <Text style={styles.featureItem}>
          {t('profile.aboutScreen.version')}
        </Text>
        <LineSperator palette={palette}></LineSperator>

        <Text style={styles.sectionTitle}>
          {t('profile.aboutScreen.legalTitle')}
        </Text>
        <Text style={styles.featureItem}>
          <Text
            style={styles.link}
            onPress={() =>
              handleLinkPress('https://www.matchmate.com/privacy-policy')
            }>
            {t('profile.aboutScreen.links.privacyPolicy')}
          </Text>
        </Text>
        <Text style={styles.featureItem}>
          <Text
            style={styles.link}
            onPress={() =>
              handleLinkPress('https://www.matchmate.com/terms-of-service')
            }>
            {t('profile.aboutScreen.links.termsOfService')}
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
