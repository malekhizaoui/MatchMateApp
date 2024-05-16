import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons

const NoTimeSlotsComponent = ({ selectedDay }: any) => {
  return (
    <View style={styles.container}>
      <Icon name="schedule" size={50} color="#666" /> 
      <Text style={styles.message}>
        There are no time slots available for {selectedDay.realDay}. Check other days.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50, // Adjust as needed
  },
  message: {
    fontSize: 16,
    color: '#666', // Adjust color as needed
    marginLeft: 10, // Spacing between icon and text
    padding:50,
    textAlign:"center"
  },
});

export default NoTimeSlotsComponent;
