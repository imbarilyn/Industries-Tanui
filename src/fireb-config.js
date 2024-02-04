import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAW84L3_LMaUblBKyOTfe_Ympznhvr96KQ",
  authDomain: "t-industries-8adfc.firebaseapp.com",
  projectId: "t-industries-8adfc",
  storageBucket: "t-industries-8adfc.appspot.com",
  messagingSenderId: "422534713126",
  appId: "1:422534713126:web:e3cb41c7149a701806bbe7",
  measurementId: "G-TTWD7P8S3Y"
};

const app = initializeApp(firebaseConfig);

export const database  = getFirestore(app)
e