import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDnKYPNWZ9c4Sll8m-qOQANZo_hsvl7vM",
  authDomain: "coursean-97eec.firebaseapp.com",
  projectId: "coursean-97eec",
  storageBucket: "coursean-97eec.appspot.com",
  messagingSenderId: "755723366866",
  appId: "1:755723366866:web:296af3812ed18d95ac580b",
  measurementId: "G-KPCFP9X6RP",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export { auth };
export default app;
