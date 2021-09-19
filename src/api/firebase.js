import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-TFURBWSPkkDOums9y06rLvJuFa7pZPY",
  authDomain: "legion-62r.firebaseapp.com",
  databaseURL:
    "https://legion-62r-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "legion-62r",
  storageBucket: "legion-62r.appspot.com",
  messagingSenderId: "729931849262",
  appId: "1:729931849262:web:1033889363cf4233ba89bf"
};

// Initialize Firebase
export const appFireBase = initializeApp(firebaseConfig);
