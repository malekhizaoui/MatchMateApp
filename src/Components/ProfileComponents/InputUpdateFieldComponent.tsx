import React, { useState } from 'react';
import {
  ContainerInput,
  ContentInput,
  ContainerContentInput,
  TextTitleInput,
  TextInputStyle,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you're using MaterialIcons
import { TouchableOpacity, View } from 'react-native';

interface InputUpdateFieldComponentProps {
  placeholder: string;
  inputName: string;
  setValue: (value: any) => void; // Ensure correct type for setValue
  value: any; // Ensure correct type for value
  secureTextEntry?: boolean;

}

export const InputUpdateFieldComponent = ({
  placeholder,
  inputName,
  setValue,
  value,
  secureTextEntry = false,

}: InputUpdateFieldComponentProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  const palette = usePalette();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };  return (
    <ContainerInput>
      <ContainerContentInput>
        <ContentInput>
          <TextTitleInput palette={palette}>{inputName} :</TextTitleInput>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',width:"90%" }}>

          <TextInputStyle
            value={value}
            onChangeText={(text) => setValue(text)} // Ensure onChangeText correctly invokes setValue
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            secureTextEntry={!isPasswordVisible}
            />
          {secureTextEntry && (
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Icon
                  name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                  size={20}
                  color="grey"
                />
              </TouchableOpacity>
            )}
            </View>
        </ContentInput>
      </ContainerContentInput>
    </ContainerInput>
  );
};
