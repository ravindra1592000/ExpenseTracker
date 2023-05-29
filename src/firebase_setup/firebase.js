import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRhsa3Rz1_T3Uh0thyBmgzKXPvRS4cFII",
  authDomain: "expensetracker-9b397.firebaseapp.com",
  projectId: "expensetracker-9b397",
  storageBucket: "expensetracker-9b397.appspot.com",
  messagingSenderId: "1029607644186",
  appId: "1:1029607644186:web:d006f20723b225e74e85a3",
  measurementId: "G-98M24E439C",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
