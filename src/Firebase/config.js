
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD7tEqkve8OXJa-ArQ7_dGbUFxnGgiJ81k",
  authDomain: "miniblog-fe16a.firebaseapp.com",
  projectId: "miniblog-fe16a",
  storageBucket: "miniblog-fe16a.firebasestorage.app",
  messagingSenderId: "336053394209",
  appId: "1:336053394209:web:da4298de36d22dc5b5fc60"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);