import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDKKc95O8UysbPUpC9V1IvmjPGtyIssJU4",
    authDomain: "netflix-clone-5fdc4.firebaseapp.com",
    projectId: "netflix-clone-5fdc4",
    storageBucket: "netflix-clone-5fdc4.appspot.com",
    messagingSenderId: "421174463377",
    appId: "1:421174463377:web:24f273439007241b4ee830"
  };
  const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export const auth = getAuth(app)
  export const db = getFirestore(app)
  export const storage = getStorage(app)
  export default app

