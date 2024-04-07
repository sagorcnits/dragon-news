import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase_config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(true);
  // creatuser
  const createUser = (email, password) => {
    setLoaded(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // loginuser

  const loginUser = (email, password) => {
    setLoaded(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout user

  const logOutUser = () => {
    setLoaded(true);
    signOut(auth).then().catch();
  };

  // google login user

  const googleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        const user = res.user;
      })
      .then((error) => {
        console.log(error);
      });
  };
// github login

const githubLogin = () => {
  signInWithPopup(auth,new GithubAuthProvider)
  .then((res) => {
    const user = res.user;
  })
  .then((error) => {
    console.log(error);
  });
}

  // observer onAuthChange
  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoaded(false);
      return () => {
        authChange();
      };
    });
  }, []);

  const authInfo = { user, createUser, loginUser, logOutUser, loaded , googleLogin,githubLogin };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
