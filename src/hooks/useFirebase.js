import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.initialize';
import { useState } from 'react';
import { useEffect } from 'react';

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);

            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, [])



    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        logOut,
        signInUsingGoogle,
        isLoading
    }

};

export default useFirebase;