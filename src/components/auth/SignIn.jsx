import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import {useNavigate} from "react-router-dom"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


let navigate=useNavigate();

  //Login/Signin component
  const signIn = (e) => {
    e.preventDefault();


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //If login successfull
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

      //const navigate = useNavigate();
      
      };


  //Render =  Return the elements
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>LOG IN</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={() => navigate("/dashboard")} type="submit">Log In</button>
        </form>
    </div>
  );
};

export default SignIn;