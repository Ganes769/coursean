import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-ZHitA26vQTjL8S5aJy2K3h5CQNFS-Bs",
  authDomain: "coursean-485fc.firebaseapp.com",
  projectId: "coursean-485fc",
  storageBucket: "coursean-485fc.appspot.com",
  messagingSenderId: "1096673456721",
  appId: "1:1096673456721:web:c49cc9324c55bf2cc7be70",
  measurementId: "G-Z7GWYM5JHJ",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export { auth };
export default app;
