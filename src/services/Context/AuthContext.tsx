import React, {useState, createContext, Dispatch, SetStateAction} from 'react';

export interface AuthContextProps {
  choix: string;
  setChoix: Dispatch<SetStateAction<string>>;
  signIn: () => void; // Include signIn function in the interface
  signOut: () => void;
  setBarColorCntxt:(color:string)=>void

}

export const AuthContext = createContext<AuthContextProps>({
  choix: '',
  setChoix: () => {},
  signIn: () => {},
  signOut: () => {},
  setBarColorCntxt:(color:string)=>{}

   // Provide a default empty function
});