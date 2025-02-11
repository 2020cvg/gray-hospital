import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxvnKoqiN_axrY8iZd4NZzegMmR_IoVUY",
  authDomain: "gray-hospital.firebaseapp.com",
  projectId: "gray-hospital",
  storageBucket: "gray-hospital.firebasestorage.app",
  messagingSenderId: "465694166905",
  appId: "1:465694166905:web:29745469587c9b5f2be9a8",
  measurementId: "G-HD7KRBZQCX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
