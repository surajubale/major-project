import  firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import  {firebaseConfig}  from './Config'

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//SigniN WITH gOOGLE
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => {auth.signInWithPopup(googleProvider)}

export const handleUserProfile = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const {uid} = userAuth;
    const userRef = firestore.doc(`users/${uid}`)

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const{displayName,email} = userAuth;
        const timestamp = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdDate:timestamp,
                ...additionalData
            })
        }catch(err){
            console.log(err)
        }
    }

    return userRef;
}
    


