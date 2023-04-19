import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAKPF_Io3jjInfodSE_j4C_qnwNjB44vWc",
    authDomain: "cherry-ecommerce.firebaseapp.com",
    projectId: "cherry-ecommerce",
    storageBucket: "cherry-ecommerce.appspot.com",
    messagingSenderId: "507399640649",
    appId: "1:507399640649:web:1830547d7da409258b5198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database;