import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  DayContent,
  DayText,
  MonthText,
} from './StyledComponent/StyledComponent';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import ExpandIconSVG from '../../assets/Icons/svg/ExpandIconSVG';
import {MatchMatePalette} from '../../assets/color-palette';
interface DaySelectedComponentProps {
  selectedDay: any;
  item: any;
  setSelectedDay: (item:any) => void;
}

const DaySelectedComponent = ({
  selectedDay,
  setSelectedDay,
  item,
}: DaySelectedComponentProps) => {
  // console.log("selectedDay",selectedDay);
  // console.log("item",item);
  
  return (
    <DayContent onPress={() => {setSelectedDay(item);console.log("item",item)}
    }>
      <DayText>{item.day}</DayText>
      <MonthText>{item.month}</MonthText>
      <View
        style={[selectedDay === item && styles.selectedDayContainer]}></View>
        </DayContent>
  );
};
const styles=StyleSheet.create({
    selectedDayContainer: {
        width: '80%',
        height: 2,
        backgroundColor: '#04ADB3',
      }
})
export default DaySelectedComponent;
