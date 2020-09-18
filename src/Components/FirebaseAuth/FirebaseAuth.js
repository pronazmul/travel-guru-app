import React from 'react'
import * as firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebaseConfig'

export const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig)
}

//Google Sign in
export const handleGoogleSignIn = () => {
    let googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user
            const userData = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            return userData
        })
}

//facebook Sign in
export const handleFacebookSignIn = () => {
    let facebookProvider = new firebase.auth.FacebookAuthProvider()
    return firebase.auth().signInWithPopup(facebookProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user
            const userData = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            return userData
        })
}

//Create User With Email & Password.....
export const createUser = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(success => {return success.message})
        .catch(error => {return error.message})  
}

//Sign In With User Name & Password...
export const signInEmailPass = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(success => {return success.message})
        .catch(error => {return error.message}) 
}

const FirebaseAuth = () => {

    return (
        <div>

        </div>
    );
};

export default FirebaseAuth;