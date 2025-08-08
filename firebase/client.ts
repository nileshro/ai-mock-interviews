// firebase/client.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgXCX0P4B1PauYeJySiWWzGoZXReFdlxE",
  authDomain: "prepwise-2ba32.firebaseapp.com",
  projectId: "prepwise-2ba32",
  storageBucket: "prepwise-2ba32.appspot.com",
  messagingSenderId: "560875211570",
  appId: "1:560875211570:web:91993cfc8e112478a3a52b",
  measurementId: "G-T941Z7YT4J"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
