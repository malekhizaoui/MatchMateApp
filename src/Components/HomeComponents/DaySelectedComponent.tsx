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

import { usePalette } from '../../assets/color-palette/ThemeApp';
interface DaySelectedComponentProps {
  selectedDay: object;
  item: any;
  setSelectedDay: (item:any) => void;
}

const DaySelectedComponent = ({
  selectedDay,
  setSelectedDay,
  item,
}: DaySelectedComponentProps) => {
  const palette=usePalette()

  return (
    <DayContent onPress={() => {setSelectedDay(item)} 
    }
    palette={palette}
>
      <DayText     palette={palette}
      >{item.day}</DayText>
      <MonthText     palette={palette}
      > {item.date}</MonthText>
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
