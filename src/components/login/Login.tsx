import React from "react";
import "./Login.scss";
import Button from "@mui/material/Button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signin = () => {
    // const provider = new GoogleAuthProvider();
    // const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>
      <Button onClick={signin}>ログイン</Button>
    </div>
  );
};

export default Login;
