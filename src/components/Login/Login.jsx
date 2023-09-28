import {
    GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const handelGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
        console.log(loginUser);
      })
      .catch((error) => {
        console.log("error", error.messae);
      });
  };

  const handelGoogleSigOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelGothubSignIn = ()  =>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
        const loginUserr = result.user;
        console.log(loginUserr);
        setUser(loginUserr)
    })
    .catch(error =>{
        console.log(error);
    })
  }
  console.log(user);
  return (
    <div>
      {user ? 
      <button onClick={handelGoogleSigOut}>SignOut</button> 
      
       : 
       <div>
       <button onClick={handelGoogleSignIn}>Google Lgoin</button>
       <button onClick={handelGothubSignIn}>Github Lgoin</button>
      </div>
      }

     

      {user && (
        <div>
          <h3>User Name : {user?.displayName}</h3>
          <h3>User Email :{user?.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
