import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('state change: ', currentUser)
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    })

    const authInfo = {user, googleLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;