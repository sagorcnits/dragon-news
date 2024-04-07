import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import API_KEY from "./firebase_key";
const firebaseConfig = {
  apiKey: API_KEY.apiKey,
  authDomain: API_KEY.authDomain,
  projectId: API_KEY.projectId,
  storageBucket: API_KEY.storageBucket,
  messagingSenderId: API_KEY.messagingSenderId,
  appId: API_KEY.appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
