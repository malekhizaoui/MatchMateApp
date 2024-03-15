import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {

  ButtonStyle,
  TextButton
} from './StyledComponent/StyledComponent';

interface ButtonAuthComponentProps{
    btnText:string,
    backgroundColor:string,
    btnTextColor:string,
    btnClicked:()=>void
  }

const ButtonAuthComponent = ({btnText,backgroundColor,btnTextColor,btnClicked}:ButtonAuthComponentProps) => {
  return (
    <ButtonStyle style={{backgroundColor}} onPress={btnClicked} >
     <TextButton style={{color:btnTextColor}}>{btnText}</TextButton>
   </ButtonStyle>
    )
}

export default ButtonAuthComponent