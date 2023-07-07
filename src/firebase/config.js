import {initializeApp} from "firebase/app"
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDNPYG3Ijw0_j_3aTYwdZB8V0gCV0pIDIw",
  authDomain: "books-list-eac0d.firebaseapp.com",
  databaseURL: "https://books-list-eac0d-default-rtdb.firebaseio.com",
  projectId: "books-list-eac0d",
  storageBucket: "books-list-eac0d.appspot.com",
  messagingSenderId: "534025999296",
  appId: "1:534025999296:web:9476f1730a83c7eb21ae25",
  measurementId: "G-ZKJGQPGFLC",
};

const app =initializeApp(firebaseConfig);
export const db = getDatabase(app)