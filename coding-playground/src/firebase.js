// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyB62yTtod9hT9Hq8PJH-TZJvYQApctQgR8",
    authDomain: "coding-playground-4560e.firebaseapp.com",
    projectId: "coding-playground-4560e",
    storageBucket: "coding-playground-4560e.appspot.com",
    messagingSenderId: "424796038947",
    appId: "1:424796038947:web:369a4a8fdf1275af4e4e96",
    measurementId: "G-L7R9VV3T8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const LoginInWithGoogle = async () => {
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user, token)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode)
        });
}
const logout = () => {
    auth.signOut();
};

export { auth, LoginInWithGoogle, logout };