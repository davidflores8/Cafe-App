import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import RecuperacionContrasena from "./Components/RecuperacionContrasena";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<RecuperacionContrasena />}></Route>
          <Route path="/register" element = {<Register />}></Route>
          <Route path="/login" element = {<LogIn />}></Route>
          <Route path="/recuperacionContrasena" element = {<RecuperacionContrasena />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
