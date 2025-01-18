import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAaIW_th54wEO_90VnrhL3CiSvasKbaBP4",
  authDomain: "mithackathon-3ff33.firebaseapp.com",
  projectId: "mithackathon-3ff33",
  storageBucket: "mithackathon-3ff33.firebasestorage.app",
  messagingSenderId: "173249274963",
  appId: "1:173249274963:web:259320418acf32259f52a6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);