import React, {useState, createContext, Dispatch, SetStateAction} from 'react';

export interface AuthContextProps {
  choix: string;
  setChoix: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);