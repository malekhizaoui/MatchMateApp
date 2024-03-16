import React from 'react'
import BackIconSVG from '../assets/Icons/svg/BackIconSVG'
import { View ,TouchableOpacity} from 'react-native'
import { MatchMatePalette } from '../assets/color-palette'

export const NavigateBack = ({navigation}:any) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <BackIconSVG color={MatchMatePalette.primaryColor}/>
          </TouchableOpacity>
  )
}

export default NavigateBack