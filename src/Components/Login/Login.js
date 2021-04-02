import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  ///// google sign in///////
  const handelSignInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoUrl } = result.user;
        const signinUser = { userName: displayName, email: email };
        setLoginUser(signinUser);
        history.replace(from);
        console.log(signinUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        console.log(errorMessage, email, errorCode);
      });
  };
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={handelSignInWithGoogle} className="btn btn-success">
        sign in with google
      </button>
    </div>
  );
};

export default Login;
