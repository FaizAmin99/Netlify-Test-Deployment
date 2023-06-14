import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ErrorPage from './components/auth/ErrorPage';
import AuthDetails from './components/AuthDetails';
import React from "react";
import Dashboard from "./components/Dashboard";
import AddFingerprint from "./components/AddFingerprint";
import TimeIn from "./components/TimeIn";
import ViewHistory from "./components/ViewHistory";
import { BrowserRouter as Router, Switch, Route, Routes, Redirect, Link } from "react-router-dom";



function App() {
  return (
    
      <div className="App">
      
      
      

<Router>
      <Routes>
          <Route exact path="/" element={<><SignIn/><SignUp/><AuthDetails/></>}/>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="*" element={<ErrorPage />} />
      </Routes>
</Router>

      </div>
    
  );
  


  }


export default App;