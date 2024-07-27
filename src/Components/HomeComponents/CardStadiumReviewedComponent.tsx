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
import { usePalette } from '../../assets/color-palette/ThemeApp';


interface CardStadiumReviewedComponentProps {
  feedback: Feedback;
  user: User;
}

const CardStadiumReviewedComponent = ({
  feedback,
  user,
}: CardStadiumReviewedComponentProps) => {
  const palette=usePalette()

  const renderStars = (stars: number) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starIcons.push(<StarIconSVG key={i} color={palette.primaryColor} />);
      } else {
        starIcons.push(<StarIconNotFilledIconSVG key={i} color={palette.primaryColor} />);
      }
    }
    return starIcons;
  };

  return (
    <View style={{display:"flex",flexDirection:'column'}}>
      <UserContainerReview>
        <UserImageReview source={{uri: user.image}} />
        <UserNameReview palette={palette}>
          {user.firstName} {user.lastName}
        </UserNameReview>
        <DateReviewtxt palette={palette}>
          created at {formatDate(feedback.created_at)}
        </DateReviewtxt>
      </UserContainerReview>
      <StarsContainer>{renderStars(feedback.stars)}</StarsContainer>
      <Reviewtxt palette={palette}>{feedback.stadium.stadiumName} court</Reviewtxt>
      <CardReviewDetailContainer style={{width:"90%"}}>
        <HeaderDescriptionReview style={{width:"90%"}}>
          <ImageStadiumReview source={{uri: feedback.stadium.imageURL}} />
          <Reviewtxt palette={palette}>{feedback.comment}</Reviewtxt>
          </HeaderDescriptionReview>
      </CardReviewDetailContainer>
      <LineSperator palette={palette}></LineSperator>

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
