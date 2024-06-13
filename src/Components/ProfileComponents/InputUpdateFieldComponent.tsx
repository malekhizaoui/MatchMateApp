import React from 'react';
import {
  ContainerInput,
  ContentInput,
  ContainerContentInput,
  TextTitleInput,
  TextInputStyle,
} from './StyledComponent/StyledComponent';

interface InputUpdateFieldComponentProps {
  placeholder: string;
  inputName: string;
  setValue: (value: any) => void; // Ensure correct type for setValue
  value: any; // Ensure correct type for value
}

export const InputUpdateFieldComponent = ({
  placeholder,
  inputName,
  setValue,
  value,
}: InputUpdateFieldComponentProps) => {
  return (
    <ContainerInput>
      <ContainerContentInput>
        <ContentInput>
          <TextTitleInput>{inputName} :</TextTitleInput>
          <TextInputStyle
            value={value}
            onChangeText={(text) => setValue(text)} // Ensure onChangeText correctly invokes setValue
            placeholder={placeholder}
            placeholderTextColor={'grey'}
          />
        </ContentInput>
      </ContainerContentInput>
    </ContainerInput>
  );
};
