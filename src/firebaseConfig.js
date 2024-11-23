import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCckOwkog0dimcctWeCqGbnfVH2Ln0XHUk",
  authDomain: "react-6dc4b.firebaseapp.com",
  projectId: "react-6dc4b",
  storageBucket: "react-6dc4b.firebasestorage.app",
  messagingSenderId: "230430732642",
  appId: "1:230430732642:web:878a565a10a69c67dabc3b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
