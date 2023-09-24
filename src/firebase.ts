import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBBjSrSsgX7bEKgPp01VzWf_jJ0mv0cQxI",
  authDomain: "discord-clone-udemy-311a4.firebaseapp.com",
  projectId: "discord-clone-udemy-311a4",
  storageBucket: "discord-clone-udemy-311a4.appspot.com",
  messagingSenderId: "147513851613",
  appId: "1:147513851613:web:b2702ffee7ac75eddba534"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider, db};