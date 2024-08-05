import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  ContainerInputPassForget,
  TextInputStyle,
  IconStyle,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you're using MaterialIcons

interface InputPassForgetComponentProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valueInput: string;
  iconComponent: any;
  placeholder: string;
  secureTextEntry?:boolean
}

export const InputPassForgetComponent = ({
  iconComponent,
  setValue,
  valueInput,
  placeholder,
  secureTextEntry=false
}: InputPassForgetComponentProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const palette = usePalette();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ContainerInputPassForget palette={palette}>
      <IconStyle>{iconComponent}</IconStyle>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
        <TextInputStyle
          value={valueInput}
          onChangeText={value => setValue(value)}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          secureTextEntry={!secureTextEntry?!isPasswordVisible:isPasswordVisible}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={isPasswordVisible ? 'visibility' : 'visibility-off'}
            size={20}
            color="grey"
          />
        </TouchableOpacity>
      </View>
    </ContainerInputPassForget>
  );
};
