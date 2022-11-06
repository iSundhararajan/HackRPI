import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyBhfcR2EQAYbkXmyTP8Jxe47sM7Jct_QKE",
    authDomain: "greenwish-92adb.firebaseapp.com",
    projectId: "greenwish-92adb",
    storageBucket: "greenwish-92adb.appspot.com",
    messagingSenderId: "567117065406",
    appId: "1:567117065406:web:ba7024582db970930282ef",
    measurementId: "G-CLV65YLSKJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;