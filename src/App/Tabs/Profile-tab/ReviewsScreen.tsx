import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ContainerAppReviews } from './StyledComponent/StyledComponent';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import NavigateBack from '../../../Components/NavigateBack';
import useProfile from './useProfile';
import CardToReviewComponent from '../../../Components/HomeComponents/CardToReviewComponent';
import CardStadiumReviewedComponent from '../../../Components/HomeComponents/CardStadiumReviewedComponent';
import SkeletonBookingCard from '../../../Components/SkeletonLoadingComponents/SkeletonBookingCard';
import ReviewsIconSVG from '../../../assets/Icons/svg/ReviewsIconSVG'; // Import ReviewsIconSVG

const ReviewsScreen = ({ navigation }: any) => {
  const { setModalVisible, userData, stadiumsExcludingFeedback, isLoading } = useProfile(navigation);
  const [activeTab, setActiveTab] = useState('readyForReview');
  const palette = usePalette();

  const styles = StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: palette.darkBackgroundColor,
      paddingVertical: 10,
      width: '100%',
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: palette.lightBackgroundColor,
    },
    tabText: {
      color: palette.secondaryTextColor,
      fontSize: 16,
    },
    activeTabText: {
      fontWeight: 'bold',
    },
    activeTabIndicator: {
      height: 2,
      backgroundColor: 'grey',
      marginTop: 5,
    },
    card: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 10,
    },
    emptyMessageContainer: {
      alignItems: 'center',
      marginTop: 100,
    },
    emptyMessageText: {
      color: palette.secondaryTextColor,
      textAlign: 'center',
      marginTop: 10,
      fontSize:15,
      fontWeight:"600"
    },
    emptyMessageDetail: {
      color: palette.secondaryTextColor,
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 20,
    },
  });

  const renderEmptyContent = () => (
    <View style={styles.emptyMessageContainer}>
      <ReviewsIconSVG color={palette.primaryColor} size={"100"} />
      <Text style={styles.emptyMessageText}>No reviews available.</Text>
      <Text style={styles.emptyMessageDetail}>
        When you review a stadium, it will appear here. Start exploring and reviewing stadiums!
      </Text>
      <TouchableOpacity
                style={{
                  marginTop: 30,
                  backgroundColor: palette.primaryColor,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}
                onPress={() => navigation.navigate('HomeTab', { Screen: "Home" })}
              >
                <Text style={{ color: 'white', fontSize: 16 }}>Explore Stadiums</Text>
              </TouchableOpacity>
    </View>
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <View>
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonBookingCard key={index} />
          ))}
        </View>
      );
    }

    if (activeTab === 'readyForReview') {
      return stadiumsExcludingFeedback.length > 0 ? (
        stadiumsExcludingFeedback.map((stadiumUserReview, index) => (
          <CardToReviewComponent
            stadiumUserReview={stadiumUserReview}
            key={index}
          />
        ))
      ) : (
        renderEmptyContent()
      );
    } else {
      return userData&& userData?.feedbacks.length > 0 ? (
        userData?.feedbacks.map((feedback, index) => (
          <CardStadiumReviewedComponent
            user={userData}
            feedback={feedback}
            key={index}
          />
        ))
      ) : (
        renderEmptyContent()
      );
    }
  };

  return (
    <ContainerAppReviews palette={palette}>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Your reviews'}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={palette.darkBackgroundColor}
      />

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('readyForReview')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'readyForReview' && styles.activeTabText,
            ]}
          >
            Ready for Review {`(${stadiumsExcludingFeedback.length})`}
          </Text>
          {activeTab === 'readyForReview' && (
            <View style={styles.activeTabIndicator} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('reviewed')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'reviewed' && styles.activeTabText,
            ]}
          >
            Reviewed {`(${userData?.feedbacks.length})`}
          </Text>
          {activeTab === 'reviewed' && (
            <View style={styles.activeTabIndicator} />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "90%" }}>
        {renderContent()}
        <View style={{ marginBottom: 30 }}></View>
      </ScrollView>
    </ContainerAppReviews>
  );
};

export default ReviewsScreen;
