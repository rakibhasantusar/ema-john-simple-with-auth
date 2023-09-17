import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../firebase/firebase.init';
// aita holo context toiri korar jonno mone rakhte hobe aikhan a authcontext ta k export korte hobe must nahole onno jaigai import kora jabe na
export const AuthContext = createContext()


const auth = getAuth(app) // aikhan a auth ta  pelam abong firebase er jei app ta paicilam oi ta aikhan a dhukia dilam

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOUt = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false) // aikhan a aita set korar mane holo jokhon search korte gece tokhon private route loading true thake jei na jokhon current user peye jai user set kore fele tokhon loading false kore fele aar jokhon e loading false kore fele tokhon aar oikha a loading na dhuke porer line a dhuke jai mane children er line a
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { signUp, setUser, user, signIn, logOUt, loading } // aita auth provider er value gula aikhan theke pathabo
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;