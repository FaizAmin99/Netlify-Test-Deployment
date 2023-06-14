import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import AddFingerprint from "./AddFingerprint";
import TimeIn from "./TimeIn";
import ViewHistory from "./ViewHistory";
import {useNavigate} from "react-router-dom"
import SignIn from "./auth/SignIn";

const Dashboard = ({ authorized }) => {

  /*if(!authorized) {

    return <Redirect to "/SignIn" />;
  }
  */
  const navigate = useNavigate();

  return (


    <div>
      <h1>DASHBOARD</h1>
      
      
      <button onClick={() => navigate(-1)}>Log Out</button>

      </div>  
      
  );
}


export default Dashboard;
