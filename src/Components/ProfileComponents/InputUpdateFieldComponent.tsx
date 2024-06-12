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
interface InputUpdateFieldComponentProps{
  placeholder:string,
  inputName:string,
//   setValue: React.Dispatch<React.SetStateAction<string>>,
//   valueInput : string ,
}


export const InputUpdateFieldComponent = ({placeholder,inputName }:InputUpdateFieldComponentProps) => {

  return (
    <ContainerInput>
            <ContainerContentInput>
              <ContentInput>
                <TextTitleInput>{inputName} :</TextTitleInput>
                <TextInputStyle
                
                //   value={valueInput}
                //   onChangeText={value=>setValue(value)}
                  placeholder={placeholder}
                  placeholderTextColor={'grey'}></TextInputStyle>
              </ContentInput>
            </ContainerContentInput>
          </ContainerInput>
  )
}
