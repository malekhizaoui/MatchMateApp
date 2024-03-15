import {useEffect, useState} from 'react';
import axios from 'axios'

export const useAuth = (navigation:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState("");

  const loginUser=async()=> {
    // console.log("dd");
        console.log("email",email);
        console.log("password",password);
        
      await axios.post('http://192.168.1.112:3009/api/v1/login',{email,password}).then((res)=>{
            // console.log("response",res);
            
            navigation.navigate('Signup')
    }).catch((err:any)=>{

        console.log("err",err);
        })
  }
  return {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    age,
    setAge,
    loginUser
  };
};

export default useAuth;
