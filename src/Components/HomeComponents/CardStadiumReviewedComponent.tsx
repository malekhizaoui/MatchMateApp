import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  UserContainerReview,
  UserImageReview,
  UserNameReview,
  DateReviewtxt,
  StarsContainer,
  Reviewtxt,
  CardReviewDetailContainer,
  ImageStadiumReview,
  TextNameProfile,
  HeaderDescriptionReview,
  ButtonToReview,
  LineSperator,
} from './StyledComponent/StyledComponent';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import StarIconNotFilledIconSVG from '../../assets/Icons/svg/StarIconNotFilledIconSVG';
import {User} from '../../App/models/User';
import {formatDate} from '../../services/HelperFunctions';
import {Feedback} from '../../App/models/Feedback';
import { MatchMatePalette } from '../../assets/color-palette';


interface CardStadiumReviewedComponentProps {
  feedback: Feedback;
  user: User;
}

const CardStadiumReviewedComponent = ({
  feedback,
  user,
}: CardStadiumReviewedComponentProps) => {
  const renderStars = (stars: number) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starIcons.push(<StarIconSVG key={i} color={MatchMatePalette.primaryColor} />);
      } else {
        starIcons.push(<StarIconNotFilledIconSVG key={i} color={MatchMatePalette.primaryColor} />);
      }
    }
    return starIcons;
  };

  return (
    <View style={{display:"flex",flexDirection:'column'}}>
      <UserContainerReview>
        <UserImageReview source={{uri: user.image}} />
        <UserNameReview>
          {user.firstName} {user.lastName}
        </UserNameReview>
        <DateReviewtxt>
          created at {formatDate(feedback.created_at)}
        </DateReviewtxt>
      </UserContainerReview>
      <StarsContainer>{renderStars(feedback.stars)}</StarsContainer>
      <Reviewtxt>{feedback.stadium.stadiumName} court</Reviewtxt>
      <CardReviewDetailContainer style={{width:"90%"}}>
        <HeaderDescriptionReview style={{width:"90%"}}>
          <ImageStadiumReview source={{uri: feedback.stadium.imageURL}} />
          <Reviewtxt>{feedback.comment}</Reviewtxt>
          </HeaderDescriptionReview>
      </CardReviewDetailContainer>
      <LineSperator></LineSperator>

    </View>
  );
};

const styles = StyleSheet.create({
  selectedDayContainer: {
    width: '80%',
    height: 2,
    backgroundColor: '#04ADB3',
  },
});

export default CardStadiumReviewedComponent;
