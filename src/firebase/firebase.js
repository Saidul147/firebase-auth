// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnHhWX-_4bNd_h4CmfGini_NVtUE8Ogzk",
  authDomain: "project-one-a5edf.firebaseapp.com",
  projectId: "project-one-a5edf",
  storageBucket: "project-one-a5edf.firebasestorage.app",
  messagingSenderId: "940442366495",
  appId: "1:940442366495:web:f1d0b3aa7505ffd0455b2a",
  measurementId: "G-TMXQHH6Y1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//----------step-----------
//1.Create a firebase project by going console.google.firebase
//2.go to the created project and select [Get started by adding Firebase to your app]: web,..... then give a name for register an app.
//-------project create and app register done-----------
//3.after completing this it will show some code,if you miss it then 
//Go to Firebase Console  > Open your project: redux-thunk-taskmaster > Click the gear icon ⚙️ in the left sidebar → Project settings >Scroll down to Your apps section
//==========you will find the code first install the firebase if it didnt installed, and then copy the code and paste avobe:
//-------And you have to obiviously enable the google, and also which provider do you want to add. Either enable it you will not able to signin with google,
///----and rest of this into the code------look how 
