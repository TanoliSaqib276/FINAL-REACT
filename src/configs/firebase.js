import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, where } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBSrftMnsrkgntGkEXCzHOvKUQBJtEraMQ",
    authDomain: "final-hackhthone.firebaseapp.com",
    projectId: "final-hackhthone",
    storageBucket: "final-hackhthone.appspot.com",
    messagingSenderId: "259786088469",
    appId: "1:259786088469:web:4494c2aa72929e02776e1c",
    measurementId: "G-XH72Y9YGYP"
});

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};