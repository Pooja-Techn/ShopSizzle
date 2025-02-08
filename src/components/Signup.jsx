import React, { useContext, useState } from 'react';
import {   getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { app } from '../firebaseInit';
import styles from  "../styles/LoginPage.module.css"
import authenticationContext from '../authenticationContext';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from './redux/reducers/authenticationReducer';

const Signup = () => {
   
   const [error, setError] = useState(null);
    const dispatch = useDispatch()
    const {email, setEmail, password, setPassword} = useContext(authenticationContext)
      
    return (
        <div>        
        <div className={styles.register_page}>      
            <div className={styles.registerpage_container}>
            <h1> Sign Up</h1>
          <input type="text" placeholder="Name"  />
            <input type="text" placeholder="Email" onChange={(e) =>
                setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) =>
                setPassword(e.target.value)} />
          <button onClick={()=>{dispatch(signUp({email,password}))}}>Sign Up</button>
                      {error && <p>{error}</p>}
        </div>
        </div>
        </div>
    );
};
export default Signup;