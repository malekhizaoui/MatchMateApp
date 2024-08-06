import { Feedback } from "../../App/models/Feedback";
import i18n from 'i18next'; // Ensure you have your i18next setup properly

export const extractTimeFromDate=(dateString:Date)=> {
    const date = new Date(dateString);
  
    const hours = date.getUTCHours().toString().padStart(2, '0'); // Convert to UTC hours
    const minutes = date.getUTCMinutes().toString().padStart(2, '0'); // Convert to UTC minutes
  
    return `${hours}:${minutes}`;
  }

  export const formatDate = (dateString:Date) => {
    const date = new Date(dateString);
  
    const day = date.getUTCDate();
    const weekday = date.toLocaleDateString('en-GB', {
      weekday: 'long',
      timeZone: 'Europe/Paris'
    });
    const year = date.getUTCFullYear();
  
    return `${day} ${weekday}, ${year}`;
  };

  const capitalizeFirstLetter = (string:string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
 export const getWeekDaysInfo = () => {
  const today = new Date();
  const daysInfo = [];
  
  const options = { month: 'long', weekday: 'long' };
  const language = i18n.language ; 

  daysInfo.push({
    day: capitalizeFirstLetter(i18n.t('home.stadiumAvailability.today')),
    date: `${today.getDate()} ${capitalizeFirstLetter(today.toLocaleDateString(language, { month: 'long' }))}`,
    realDay: capitalizeFirstLetter(today.toLocaleDateString(language, { weekday: 'long' })), // Actual day of the week
  });

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  daysInfo.push({
    day: capitalizeFirstLetter(i18n.t('home.stadiumAvailability.tomorrow')),
    date: `${tomorrow.getDate()} ${capitalizeFirstLetter(tomorrow.toLocaleDateString(language, { month: 'long' }))}`,
    realDay: capitalizeFirstLetter(tomorrow.toLocaleDateString(language, { weekday: 'long' })), // Actual day of the week
  });

  for (let i = 2; i < 7; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    daysInfo.push({
      day: capitalizeFirstLetter(nextDay.toLocaleDateString(language, { weekday: 'long' })),
      date: `${nextDay.getDate()} ${capitalizeFirstLetter(nextDay.toLocaleDateString(language, { month: 'long' }))}`,
      realDay: capitalizeFirstLetter(nextDay.toLocaleDateString(language, { weekday: 'long' })), // Actual day of the week
    });
  }

  return daysInfo;
};
  

  export const getStarsReviw = (feedbacks: Feedback[]): string => {
    let totalStars: number = 0;
    feedbacks.forEach((feedback) => {
      totalStars += feedback.stars;
    });
  
    const averageStars = totalStars / feedbacks.length;
    return averageStars.toFixed(1);
  };
  