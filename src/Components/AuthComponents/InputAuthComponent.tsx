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
import { usePalette } from '../../assets/color-palette/ThemeApp';
interface InputAuthComponentProps{
  placeholder:string,
  inputName:string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  valueInput : string ,
  iconComponent :any
}


export const InputAuthComponent = ({placeholder,inputName,setValue,valueInput,iconComponent }:InputAuthComponentProps) => {
  const palette=usePalette()

  return (
    <ContainerInput     palette={palette}
>
            <ContainerContentInput>
              <IconStyle>
              {iconComponent}
              </IconStyle>
              <ContentInput>
                <TextTitleInput     palette={palette}
                >{inputName} :</TextTitleInput>
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
