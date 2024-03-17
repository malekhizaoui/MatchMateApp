import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {
  ContainerInput,
  ContentInput,
  ContainerContentInput,
  TextTitleInput,
  TextInputStyle,
  IconStyle,
} from './StyledComponent/StyledComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserNameIconSVG from '../../assets/Icons/svg/UsernameIconSVG';
import { MatchMatePalette } from '../../assets/color-palette';
interface InputAuthComponentProps{
  placeholder:string,
  inputName:string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  valueInput : string ,
  iconComponent :any
}


export const InputAuthComponent = ({placeholder,inputName,setValue,valueInput,iconComponent }:InputAuthComponentProps) => {

  return (
    <ContainerInput>
            <ContainerContentInput>
              <IconStyle>
              {/* <Text style={{color:"white"}}>He</Text> */}
              {/* <Icon name="rocket" size={30} color="#900" /> */}
              {/* <UserNameIconSVG color={MatchMatePalette.primaryColor} /> */}
              {iconComponent}
              </IconStyle>
              <ContentInput>
                <TextTitleInput>{inputName} :</TextTitleInput>
                <TextInputStyle
                
                  value={valueInput}
                  onChangeText={value=>setValue(value)}
                  placeholder={placeholder}
                  placeholderTextColor={'grey'}></TextInputStyle>
              </ContentInput>
            </ContainerContentInput>
          </ContainerInput>
  )
}
