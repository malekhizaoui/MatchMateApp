import React, {createContext, Dispatch, SetStateAction} from 'react';

export interface AuthContextProps {
  lightModeStatus: string | null; // Update to allow null
  setLightModeStatusContext: (color: string|null) => void; // Update to allow null
  signIn: () => void;
  signOut: () => void;
  setBarColorCntxt: (color: string) => void;
}


export const AuthContext = createContext<AuthContextProps>({
  lightModeStatus: '',
  setLightModeStatusContext: (color:string|null)=>{},
  signIn: () => {},
  signOut: () => {},
  setBarColorCntxt:(color:string)=>{}

   // Provide a default empty function
});