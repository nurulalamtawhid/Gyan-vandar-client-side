import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();
        const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () =>{
        setLoading(true);
        localStorage.removeItem("email");
        return signOut(auth);

    };
    const providerlogin =(provider)=>{
        setLoading(true);
        
        return signInWithPopup(auth,provider);
    };
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])
    useEffect(()=>{
        localStorage.setItem("email",user?.email)
    },[user])
   
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        providerlogin,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
  
export default Authprovider;