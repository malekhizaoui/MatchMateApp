import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
    UserContainerReview,
    UserImageReview,
    UserNameReview,
    DateReviewtxt,
    StarsContainer,
    Reviewtxt
} from './StyledComponent/StyledComponent';
import StarIconSVG from '../../assets/Icons/svg/StarIconSVG';
import StarIconNotFilledIconSVG from '../../assets/Icons/svg/StarIconNotFilledIconSVG';
import { User } from '../../App/models/User';
import { formatDate } from '../../services/HelperFunctions';

interface CardReviewComponentProps {
  user: User;
  stars: number;
  comment: string | undefined;
  date: Date;
}

const CardReviewComponent = ({
  user,
  stars,
  comment,
  date
}: CardReviewComponentProps) => {

  const renderStars = (stars: number) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starIcons.push(<StarIconSVG key={i} color="yellow" />);
      } else {
        starIcons.push(<StarIconNotFilledIconSVG key={i} color="yellow" />);
      }
    }
    return starIcons;
  };

  return (
    <>
      <UserContainerReview>
        <UserImageReview
          source={{ uri: user.image }}
        />
        <UserNameReview>{user.firstName} {user.lastName}</UserNameReview>
        <DateReviewtxt>created at {formatDate(date)}</DateReviewtxt>
      </UserContainerReview>
      <StarsContainer>
        {renderStars(stars)}
      </StarsContainer>
      <Reviewtxt>
        {comment}
      </Reviewtxt>
    </>
  );
};

const styles = StyleSheet.create({
  selectedDayContainer: {
    width: '80%',
    height: 2,
    backgroundColor: '#04ADB3',
  }
});

export default CardReviewComponent;
