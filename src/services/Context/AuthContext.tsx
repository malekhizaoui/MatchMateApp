import React, {useState, createContext, Dispatch, SetStateAction} from 'react';

export interface AuthContextProps {
  choix: string;
  setChoix: Dispatch<SetStateAction<string>>;
  signIn: () => void; // Include signIn function in the interface

}

export const AuthContext = createContext<AuthContextProps>({
  choix: '',
  setChoix: () => {},
  signIn: () => {} // Provide a default empty function
});