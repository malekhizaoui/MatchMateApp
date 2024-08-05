import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  ContainerInput,
  ContentInput,
  ContainerContentInput,
  TextTitleInput,
  TextInputStyle,
  IconStyle,
} from './StyledComponent/StyledComponent';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you're using MaterialIcons

interface InputAuthComponentProps {
  placeholder: string;
  inputName: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valueInput: string;
  iconComponent: any;
  secureTextEntry?: boolean;
}

export const InputAuthComponent = ({
  placeholder,
  inputName,
  setValue,
  valueInput,
  iconComponent,
  secureTextEntry = false,
}: InputAuthComponentProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  const palette = usePalette();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ContainerInput palette={palette}>
      <ContainerContentInput>
        <IconStyle>
          {iconComponent}
        </IconStyle>
        <ContentInput>
          <TextTitleInput palette={palette}>{inputName} :</TextTitleInput>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',width:"80%" }}>
            <TextInputStyle
              value={valueInput}
              onChangeText={value => setValue(value)}
              placeholder={placeholder}
              placeholderTextColor={'grey'}
              secureTextEntry={!isPasswordVisible}
              style={{ flex: 1 }}
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
