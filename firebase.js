import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import{ getAuth, createUserWithEmailAndPassword ,sendPasswordResetEmail,signInWithEmailAndPassword ,onAuthStateChanged,signOut } from"https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js"
import{serverTimestamp,collection,addDoc,getFirestore,onSnapshot,query, orderBy,deleteDoc ,doc }from"https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"



const firebaseConfig = {
  apiKey: "AIzaSyC85XfycLxYYhgBarYGaL_RloobDdB_Fqg",
  authDomain: "portfolio-9c2e1.firebaseapp.com",
  projectId: "portfolio-9c2e1",
  storageBucket: "portfolio-9c2e1.firebasestorage.app",
  messagingSenderId: "97061477861",
  appId: "1:97061477861:web:e02149b5a75430ec70630c",
  measurementId: "G-8CNFGMPCGQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);




export{
    getAuth,
    createUserWithEmailAndPassword ,
    auth,
    sendPasswordResetEmail ,
    signInWithEmailAndPassword ,
    serverTimestamp,
    collection, 
    addDoc,
    db,
    onSnapshot ,
    query,
     orderBy,
     deleteDoc ,
     doc,
     onAuthStateChanged,
     signOut,
    

}


