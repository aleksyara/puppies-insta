import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


export default function SignUpPage(props){
  const [error, setError ]          = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  });
    
    return (
        <>
          <h1>Sign up Page!</h1>

          
        </>
      );
}
