import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            return () => {
                unSubscribe();
            }
        })
       
    }, [])



    // Google sign in
    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut
    const logOut = ()=>{
       return signOut(auth)
       .then((res)=>{
            console.log(res)
        }).catch((error) => {
            console.log(error)
          });
    }


    


   







    // auth info
    const authInfo = {
        user,
        loading,
        google,
        createUser,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;