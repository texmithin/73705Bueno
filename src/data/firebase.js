import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk1N1QxDdlahVKih-9kDzbMkL0ZZo4iyM",
  authDomain: "be3d-bb81d.firebaseapp.com",
  projectId: "be3d-bb81d",
  storageBucket: "be3d-bb81d.firebasestorage.app",
  messagingSenderId: "159876684141",
  appId: "1:159876684141:web:c08606effe434fce81a264",
  measurementId: "G-MCFF094HHF"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);