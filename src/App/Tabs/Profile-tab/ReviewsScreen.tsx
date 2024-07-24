import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Modal,
  ScrollView,
} from 'react-native';
import {ContainerAppReviews} from './StyledComponent/StyledComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import useProfile from './useProfile';
import FireIconSVG from '../../../assets/Icons/svg/FireIconSVG';
import StarIconNotFilledIconSVG from '../../../assets/Icons/svg/StarIconNotFilledIconSVG';
import CardToReviewComponent from '../../../Components/HomeComponents/CardToReviewComponent';
import ModalReviewComponent from '../../../Components/HomeComponents/ModalReviewComponent';
import CardStadiumReviewedComponent from '../../../Components/HomeComponents/CardStadiumReviewedComponent';

const ReviewsScreen = ({navigation}: any) => {
  const {setModalVisible, userData, stadiumsExcludingFeedback} =
    useProfile(navigation);
  const [activeTab, setActiveTab] = useState('readyForReview');
  console.log('stadiumsExcludingFeedback', stadiumsExcludingFeedback);

  const reviewedCards = [
    {id: '3', title: 'Game 3'},
    {id: '4', title: 'Game 4'},
  ];

  const renderCard = ({item}: any) => (
    <View style={styles.card}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <ContainerAppReviews>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Your reviews'}
        // color={MatchMatePalette.darkBackgroundColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('readyForReview')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'readyForReview' && styles.activeTabText,
            ]}>
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
            ]}>
            Reviewed {`(${userData?.feedbacks.length})`}
          </Text>
          {activeTab === 'reviewed' && (
            <View style={styles.activeTabIndicator} />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView style={{width:"90%"}} >
        {activeTab === 'readyForReview'
          ? stadiumsExcludingFeedback.map((stadiumUserReview, index) => {
              return (
                <CardToReviewComponent
                  stadiumUserReview={stadiumUserReview}
                  key={index}
                />
              );
            })
          : userData?.feedbacks.map((feedback, index) => {
              return (
                <CardStadiumReviewedComponent
                  user={userData}
                  feedback={feedback}
                  key={index}
                />
              );
            })}
            <View style={{marginBottom:30}}></View>
      </ScrollView>
    </ContainerAppReviews>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: MatchMatePalette.darkBackgroundColor,
    paddingVertical: 10,
    width: '100%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: MatchMatePalette.lightBackgroundColor,
  },
  tabText: {
    color: MatchMatePalette.secondaryTextColor,
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
});

export default ReviewsScreen;
