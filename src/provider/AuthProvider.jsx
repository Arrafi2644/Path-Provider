import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true);
    const signUpUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserNamePhoto = (userInfo) => {
        return updateProfile(auth.currentUser, (userInfo))
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    // console.log(user);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        signUpUser,
        updateUserNamePhoto,
        loginUser,
        logoutUser,
        user,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;