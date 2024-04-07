
import { createUserWithEmailAndPassword } from "firebase/auth";
const AuthProvider = () => {

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;