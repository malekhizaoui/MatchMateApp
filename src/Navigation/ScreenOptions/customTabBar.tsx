import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { MatchMatePalette } from '../../assets/color-palette';

const CustomTabBar = ({ state, descriptors, navigation }:any) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: MatchMatePalette.lightBackgroundColor, padding: 10 }}>
      {state.routes.map((route:any, index:any) => {
        const { options } = descriptors[route.key] || {};
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            {options.tabBarIcon({ focused: isFocused, color: isFocused ? MatchMatePalette.primaryColor : MatchMatePalette.whiteColor })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
